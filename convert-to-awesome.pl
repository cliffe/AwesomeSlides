#!/usr/bin/perl

# Copyright 2015 Z. Cliffe Schreuders 
# http://z.cliffe.schreuders.org
# 
# This file is part of AwesomeSlides.
# 
# AwesomeSlides is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
# 
# AwesomeSlides is also licensed under a Creative Commons 
# Attribution-ShareAlike v4.0 International License.
# 
# AwesomeSlides is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

use strict;
use warnings;
use Data::Dumper qw(Dumper);
use File::Copy::Recursive qw(dircopy);
use URI::Encode qw(uri_encode uri_decode);
use Archive::Extract;
use XML::LibXML;
use utf8;
use Term::ANSIColor;

my $tabs = "\t"x4;
my $numArgs = $#ARGV + 1;
if($numArgs == 0) {
  die "Please provide odp file(s) on the command line\n";
}

foreach my $file (@ARGV) {
  process_file($file);
}

sub process_file {
  my ($file) = @_;
  
  print "Processing $file\n";
  
  my $output_slides_src = "./slides_template";
  my $output_slides_dest = "./slides_out";
  
  my $filename_title = $file;
  $filename_title =~ s/\..*//ig;
  $filename_title =~ s/.*Modules \d\d\d\d\///ig;
  $filename_title =~ s/[^A-Za-z0-9-_]/_/ig;
  my $uri_filename_title = uri_encode($filename_title);
  
  
  my $input_slides = "./tmp/$$-$file";
  mkdir $input_slides;

  # extract file
  my $ae = Archive::Extract->new( archive => $file, type => "zip" );
  $ae->extract( to => $input_slides ) or die $ae->error;

  my ($slides_title, $title_sanitised, $uri_slides_title) = "";
  my $sections = "";
  my $parser = XML::LibXML->new();
  my $doc = $parser->parse_file("$input_slides/content.xml");
  my $pagenumber = 0;

  # for each page
  foreach my $page ($doc->findnodes('//draw:page')) {
    $pagenumber++;
    my ($title, $outline) = "";
    my ($background_image, $slide_license, @images);
    my @attribution_image_license;
    my @attribution_text;
    my $extra_text;
    
    # attribution for this script on first slide
    unshift (@attribution_text, '<p>Slides created using AwesomeSlides converter by <a href="http://z.cliffe.schreuders.org/">Z. Cliffe Schreuders</a></p>') if $pagenumber == 1;
    
    # for each frame element on the page
    foreach my $element ($page->findnodes('./draw:frame')) {
      # get the type of element it is (title, etc)
      my $attribute = $element->getAttribute('presentation:class');
      
      if($attribute && $attribute eq "title") {
        $title = $element->findnodes("./draw:text-box")->to_literal;
        if(!$slides_title) {
          $slides_title = $title;
        }
      } elsif($attribute && $attribute eq "outline") {
      
        my $text = $element->findnodes("./draw:text-box");
        my @xml = $text->get_nodelist();

        $outline = build_outline($xml[0]->toString, "embed");

      } else {
        my $img = $element->findnodes("./draw:image");
        my @xml = $img->get_nodelist();
        if($img) {
          my $img_height = $element->getAttribute('svg:height');
          my $img_width = $element->getAttribute('svg:width');
          my $img_src = $xml[0]->getAttribute('xlink:href');
          $img_src =~ s|^Pictures/||ig;
          
          # convert images to a rounded float
          $img_height =~ s/[^0-9.]//ig;
          $img_height = sprintf("%.1f", $img_height);
          $img_width =~ s/[^0-9.]//ig;
          $img_width = sprintf("%.1f", $img_width);

          if($img_height > 13 && ($img_width > 18 || $pagenumber == 1)) {
            # image to use as a background image
            if(!$background_image) {
              $background_image = $img_src;
            } else {
              #image to include on slide
              unshift (@images, $img_src);
            }
          } else {
            # detect cc attribution image based on size
            if($img_height == 0.4 && $img_width == 2.1) {
              # attribution_image (creative commons)
              unshift(@attribution_image_license, $img_src);
            
            } elsif ($img_height == 0.8 && $img_width == 2.3) {
              # drop license image from first page (this is added by a regex for my slides)
              #$slide_license = "<img src='$img_src'>\n" . $slide_license;
            } else {
              #image to include on slide
              unshift (@images, $img_src);
            }
          }
        # not an image
        } else {
        
          my $text = $element->findnodes("./draw:text-box");
          my @xml = $text->get_nodelist();

          my $more = build_outline($xml[0]->toString, "don't embed");

          if($more =~ /Z. Cliffe Schreuders.*licensed under/) {
            $slide_license .= $more;
          }elsif($more =~ /Image:|Image by|Image <a|<p>by|No restrictions|openclipart.org|www.flickr.com|xkcd.com|et al.|<p>Copyright|CC-BY|license|en.wikipedia.org\/wiki\/File:|Public domain|http:\/\/commons.wikimedia.org\/wiki\/File:/i) {
            unshift (@attribution_text, $more);
          } else {
            $extra_text .= $more;
          }
        }
      }
    }
    
    # create_page
    warn color("cyan"), "Warning: skipping over non-outline text '$extra_text' on page $pagenumber", color("reset") if $extra_text;
    my ($background_html, $attribution_html, $slide_license_html);
    if($background_image) {
      # if there is no text and no other images, then just make this an inline image rather than a background image
      if(!$outline && !scalar @images) {
        unshift (@images, $background_image);
      } else {
        $background_html = " data-background='images/$uri_filename_title/$background_image'";
      }
    }
    my $attribution_images;
    foreach my $item (@attribution_image_license) {
      $attribution_images .= "<img src='images/$uri_filename_title/$item' class='attribution_image'>\n";
    }
    my $images_html = "";
    foreach my $item (@images) {
      $images_html .= "$tabs	<img src='images/$uri_filename_title/$item'>\n";
    }
  {no warnings 'uninitialized';
      if($slide_license) {
  $slide_license_html .= <<"END";
$tabs	<div class="slide_license">
$tabs		$slide_license
$tabs	</div>
END
    }
    if($attribution_images || @attribution_text) {
  $attribution_html .= <<"END";
$tabs	<div class="attribution">
$tabs		$attribution_images
$tabs		@attribution_text
$tabs	</div>
END
    }

  my $headingtag = "h2";
  if($pagenumber == 1) {
    $headingtag = "h1";
  }

  $sections .= <<"END";
$tabs<section$background_html>
$tabs	<$headingtag>$title</$headingtag>
$images_html
$tabs	$outline
$slide_license_html
$attribution_html
$tabs</section>
END
  }# end of no warnings

  }

  my $output = <<"END";
<!doctype html>
<html lang="en">

	<head>
		<meta charset="utf-8">

		<title>$slides_title</title>

		<meta name="generator" content="AwesomeSlides converter" />

		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
		
		<base target="_blank">

		<link rel="stylesheet" href="css/reveal.css">
		<link rel="stylesheet" href="css/theme/cliffe.css" id="theme">
		<!-- Code syntax highlighting -->
		<link rel="stylesheet" href="lib/css/zenburn.css">

		<!-- If the query includes 'print-pdf', include the PDF print sheet -->
		<script>
			if( window.location.search.match( /print-pdf/gi ) ) {
				var link = document.createElement( 'link' );
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = 'css/print/pdf.css';
				document.getElementsByTagName( 'head' )[0].appendChild( link );
			}
		</script>
		
		<!--[if lt IE 9]>
		<script src="lib/js/html5shiv.js"></script>
		<![endif]-->
	</head>

	<body>

		<div class="reveal">
			<!-- Any section element inside of this container is displayed as a slide -->
			<div class="slides">
$sections

			</div>

		</div>

		<script src="lib/js/head.min.js"></script>
		<script src="js/reveal.js"></script>
		<script src="js/awesomeslides.js"></script>

		<script>

			awesomify({
				step: 5, // awesomify roughly every 5th background
			});

			// Full list of configuration options available at:
			// https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,
				transition: 'slide', // none/fade/slide/convex/concave/zoom

				// Optional reveal.js plugins
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/notes/notes.js', async: true }
				]
			});
		</script>

	</body>
</html>

END


  # Detect slides with same heading, group into a section
  $output =~ s#(?s)(<section[^>]*>\s*<h2>([^>:.]+)(?:\.\.\.?|:.*?)?</h2>.*(<h2>\g2(?:\.\.\.?|:.*?)?</h2>.*?</section>)+)#\n$tabs<section> <!-- $2 grouping -->\n$tabs$1\n$tabs</section>\n#ig;


  # print $output;

#   mkdir $output_slides_dest;
  dircopy($output_slides_src, $output_slides_dest) or die "Could not copy framework files to $output_slides_dest: $!";
  
  my $filename = "$output_slides_dest/$filename_title.html";
  # if(-e $filename)
  # {
  #     die "Error: $filename exists, not overwriting\n";
  # }

  open(my $fh, '>', $filename) or die "Could not open file '$filename' $!";
  print $fh $output;
  close $fh;
  print "Done: Wrote to $filename\n";

  my $images_dir = "$output_slides_dest/images/$filename_title";
  dircopy("$input_slides/Pictures", $images_dir) or die "Could not copy images to $images_dir: $!";
  print "Done: Copied images to: $images_dir\n";
}

sub build_outline {
  my ($xml, $embed) = @_;
  my $html = $xml;
  
  # encode non-ASCII characters
  $html =~ s/([^[\x20-\x7F])/"&#".ord($1).";"/eg;

  # remove things that we ignore
  $html =~ s/<\/?draw:text-box>|<\/?text:list-header>|text:style-name=".*?"|type="simple"//ig;
  # convert elements to html
  $html =~ s/text:list-item/li/ig;
  $html =~ s/text:list/ul/ig;
  $html =~ s/text:p/p/ig;
  $html =~ s/text:span/span/ig;
  $html =~ s/text:a/a/ig;
  $html =~ s/xlink://ig;
  $html =~ s/<text:line-break\/>/<br \/>/ig;
  
  # remove spaces before >
  $html =~ s/\s+>/>/ig;

  # remove <p> in lists
  $html =~ s/(<li>|<ul>)\s*<p>(\s*.*?\s*)<\/p>/$1$2/ig;
  
  # automatically convert a slide with a single link displayed to an iframe
  if($html !~ m#href="https?://www.youtube.com/watch#) {
      $html =~ s#^(?:\<ul>|</ul>|<span>|</span>|<p>|</p>|<li>|</li>|<br />)*<a href="(https?://[^<]+)">(https?://[^<]+)</a>(?:\<ul>|</ul>|<span>|</span>|<p>|</p>|<li>|</li>|<br />)*$#<iframe width="900" height="500" src="$1" frameborder="0" allowFullScreen></iframe><p class="iframe-caption"><a href="$1">$2</a></p>#ig if $embed eq "embed";
  }

  # keep multiple spaces
  $html =~ s/<text:s text:c="(\d+)"\/>/'&nbsp;' x $1/ige;
  
  # remove <text:tab/> etc
  $html =~ s/<\/?text:[a-zA-Z0-9_]*\/?>//ig;
  
  # newline when starting a list
  $html =~ s/<ul>/\n<ul>\n/ig;
  # new lines between points
  $html =~ s/<\/li>/<\/li>\n/ig;
  # add spaces before points
  $html =~ s/<li>/$tabs\t\t<li>/ig;
  $html =~ s/(<\/?ul>)/$tabs\t$1/ig;
#   # extra tabs for lists within lists
#   $html =~ s|<li>([^/])<ul>|<li>$1$tabs\t\t<ul>|ig;
  
  # remove spans with no attributes
  $html =~ s/<span>(.*?)<\/span>/$1/ig;
  $html =~ s/<span \/>//ig;
  $html =~ s/<p><\/p>//ig;
  # remove blank bullet points
  $html =~ s/<li>(?:<p \/>)+<\/li>//ig;
  
  # remove empty a (no text)
  $html =~ s/<a href="[^"]*?"><\/a>//ig;
  $html =~ s/<a href="[^"]*?"\s?\/>//ig;

  # university name change
  $html =~ s/Leeds Metropolitan/Leeds Beckett/ig;
  $html =~ s/Leeds Met/Leeds Beckett/ig;
  
  # replace uni name on slide with a logo
  $html =~ s/<ul>\s*Leeds Beckett\s*<\/ul>/<img src="images\/leeds-beckett\/Leeds_Beckett_University_logo_white.png" class="attribution_image" style="height: 70px; position: absolute; top: 600px; right: 1em; background:none; border:none; box-shadow:none; filter: brightness(0) invert(1);" \/>/ig;

  # update license used in my slides
  my $old1 = 'This work by <a href="http://z.cliffe.schreuders.org/">Z. Cliffe Schreuders.* License(?:</a>)?.';
  my $new = '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img class="attribution_image" alt="Creative Commons License" src="images/licenses/CC BY-SA 88x31.png" style="height: 30px; background:none; border:none; box-shadow:none;" /></a>
  <a rel="license" href="http://www.gnu.org/licenses/agpl.html"><img class="attribution_image" alt="GNU AGPL License" src="images/licenses/agplv3-155x51_white.png" style="height: 30px; background:none; border:none; box-shadow:none;" /></a><br />
  <span class="ccsa"\>This content and code (including slides CSS, HTML, and JS) by <a href="http://z.cliffe.schreuders.org/" property="cc:attributionName dct:creator" rel="cc:attributionURL">Z. Cliffe Schreuders</a> is dual licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike v4.0 International License</a> and <a rel="license" href="http://www.gnu.org/licenses/agpl.html">GNU Affero General Public License v3</a>.<br /><br /><a href="https://www.youtube.com/c/ZCliffeSchreuders"><img class="attribution_image" alt="YouTube" src="images/logos/YouTube-logo-light.png" style="height: 30px; background:none; border:none; box-shadow:none;"></a><br />Lecture recordings are published on the VLE and <a href="https://www.youtube.com/c/ZCliffeSchreuders">YouTube</a>.';
  $html =~ s/<p>\s*$old1\s*<\/p>/$new/ig;
  # by removing the p above the below regexp does not also pick up on the attribution text
  
  # add spaces in image attribution, remove p
  $html =~ s/<p>(.*?by)\s?(<a href.*?)<\/p>/Image $1 $2/ig;
  
  # auto embed YouTube videos, when a text link is included (does not consider images with links set)
  if ($embed eq "embed") {
    my $num_youtube = $html =~ s#<a href="https?://www.youtube.com/watch\?v=(\w+)">([^<]+)</a>#<iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/$1" frameborder="0" allowFullScreen></iframe><p class="youtube-caption"><a href="https://www.youtube.com/watch?v=$1">$2</a></p>#ig;  
    if($num_youtube > 1) {
      warn "Warning: More than one automatically embeded YouTube on the same slide: this is unlikely to look good.";
    }
  }
  
  return $html;
}