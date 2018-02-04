# AwesomeSlides (with LibreOffice to Reveal.js slides converter)

AwesomeSlides makes awesome HTML5/CSS slides (based on Reveal.js) by converting slides made with LibreOffice.

A script "convert-to-awesome.pl" can convert from libreoffice slides (you can simply save Powerpoint slides to .odp first), to AwesomeSlides (based on Reveal.js), great looking HTML5-based slides.

- Supports attribution in slides (for styles, and also for images on the slide)
- Supports multiple images on a slide, and has CSS styles depending on the number of images on a slide
- Detects when an image is stretched to be a background to a slide

Features that AwesomeSlides adds to Reveal:

- New great style/theme
- Randomised elements of styling for slides (for example, borders, colours, etc)
- Automatically adds a feature slide (every X slides) with extra fancy CSS (for example, star feilds, or moving clouds)
- Resizes text to fit on slides

[You can view example output slides here.](http://z.cliffe.schreuders.org/presentations/slides_out_examples/)

# How to use
## 1) Create your slides in LibreOffice

Most formatting will be ignored.

Put your text in the outline text box rather than by inserting text via a text box; text will be ignored unless it is outline text or detected as being attribution text.

If you want an image to be used for a background, simply enlarge it.

If you want programming code on slides to be highlighted, include on your slide "code:", "html_code:", or "css_code", followed by the code.

If you start a line with > it will be considered a command line example.

If you want to include attribution text, then follow examples in my slides.

If you start slides with the same heading the generated slides will stack vertically, you can use headings such as "thingy: an introduction" and "thingy: a conclusion", all slides between these will be grouped to stack vertically rather than horizontally (affecting animations between slides).

## 2) Convert your slides to AwesomeSlides/Reveal.js

Ensure Perl is installed, then install the CPAN modules. Run:
```bash
sudo cpan Archive::Extract XML::LibXML Term::ANSIColor URI::Encode
```

Convert your slides, run:
```bash
perl convert-to-awesome.pl [ODP FILEs]
```

For example, to convert all the example slides:
```bash
cd /home/user/bin/awesomeslides/

perl convert-to-awesome.pl input_slides_examples/Modules\ 1718/*/Lectures/*
```

## 3) View your slides

The generated slides are found in `slides_out`

Simply open the html file in your browser (Chrome/Chromium is strongly recommended).

Enjoy!

## Customising your HTML slides
You can force a specific fancy background for a slide:
```html
<section data-fancy-background="bg_sky">
```
Set how often the slides are based on exciting CSS templates:
```html
  awesomify({
    step: 5, // awesomify roughly every 5th background
  });
```
Other things can be done manually, please refer to the source code or outputs for examples.