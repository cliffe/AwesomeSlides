/*
 * Copyright 2015 Z. Cliffe Schreuders 
 * http://z.cliffe.schreuders.org
 * 
 * This file is part of AwesomeSlides.
 * 
 * AwesomeSlides is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * AwesomeSlides is also licensed under a Creative Commons 
 * Attribution-ShareAlike v4.0 International License.
 * 
 * AwesomeSlides is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */


function awesomify( options ) {
	var fancy_outline_backgrounds = {
		all: ["outline_picture_frame2", "outline_picture_frame", "outline_dark", "outline_darker", "outline_dotted_red", "outline_stiched_red", "outline_stiched_dark", "outline_stiched_light", "outline_dark_color_dash"],
		arty: ["outline_dotted_red", "outline_stiched_red", "outline_stiched_dark", "outline_stiched_light", "outline_dark_color_dash"],
		dark: ["outline_darker","outline_stiched_dark", "outline_dark_color_dash"],
		dark_text: ["outline_dark_text"],
                over_image: ["outline_darker", "outline_text_shadow", "outline_text_shadow_clipped"],
	};

	var fancy_heading_style = {
		dark_text: ["heading_shadow"],
	};
	
	var fancy_backgrounds = {
		bg_sky: 
		{
		innerHTML:
		'<div class="bg_show_when_active"><div class="bg_sky_clouds_one"></div><div class="bg_sky_clouds_two"></div> <div class="bg_sky_clouds_three"></div></div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/montanaflynn/pen/orxwK/">CodePen</a> by <a href="http://codepen.io/montanaflynn/">Montana Flynn</a>\
		</div>',
		data_background: "#007fd5",
		data_state: "",
		outline_backgrounds: "",
		heading_style: "",
		}, 
		bg_wheel: 
		{
		innerHTML:
		'<div class="bg_show_when_active">\
		<div class="bg_wheel_view"><svg id="svg2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="1000" width="1000" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 744.09448819 1052.3622047"><g id="layer1"><path id="path3346" style="stroke-width:1px;fill:none" d="m400 300c-1.014 1.0706-1.9434-.83866-1.7794-1.6853.44448-2.2944 3.3558-2.7403 5.15-1.8734 3.2095 1.5507 3.6956 5.7906 1.9674 8.6147-2.5362 4.1444-8.2581 4.6781-12.079 2.0614-5.0931-3.4876-5.6722-10.737-2.1555-15.544 4.4254-6.0489 13.222-6.6722 19.009-2.2495 7.0088 5.3565 7.6757 15.709 2.3436 22.473-6.2837 7.9712-18.199 8.6813-25.938 2.4376-8.9352-7.2086-9.6884-20.69-2.5316-29.403 8.132-9.9003 23.181-10.696 32.867-2.6256 10.866 9.0542 11.705 25.674 2.7197 36.332-9.9757 11.833-28.167 12.715-39.797 2.8137-12.8-10.897-13.724-30.66-2.9078-43.261 11.817-13.767 33.153-14.735 46.726-3.0018 14.734 12.737 15.745 35.647 3.0958 50.191-13.657 15.702-38.141 16.756-53.655 3.1898-16.67-14.577-17.766-40.635-3.2839-57.12 15.496-17.638 43.13-18.777 60.585-3.3779 18.607 16.415 19.788 45.624 3.472 64.049-17.334 19.575-48.119 20.799-67.514 3.566-20.543-18.253-21.811-50.613-3.66-70.979 19.172-21.512 53.108-22.822 74.443-3.754 22.48 20.091 23.833 55.603 3.8481 77.908-21.01 23.449-58.097 24.845-81.373 3.9421-24.418-21.929-25.856-60.592-4.0361-84.837 22.847-25.387 63.087-26.868 88.302-4.1302 26.355 23.766 27.879 65.582 4.2242 91.767-24.685 27.324-68.077 28.891-95.231 4.3182-28.293-25.603-29.903-70.572-4.4123-98.696 26.522-29.262 73.067-30.914 102.16-4.5063 30.231 27.44 31.926 75.562 4.6003 105.63-28.359 31.2-78.057 32.938-109.09 4.6944-32.169-29.277-33.95-80.552-4.7884-112.55 30.195-33.138 83.047-34.961 116.02-4.8824 34.107 31.114 35.973 85.542 4.9765 119.48-32.032 35.076-88.038 36.985-122.95 5.0705-36.045-32.95-37.997-90.533-5.1645-126.41 33.869-37.014 93.028-39.009 129.88-5.2586 37.983 34.787 40.02 95.523 5.3526 133.34-35.705 38.952-98.018 41.032-136.81 5.4466-39.921-36.624-42.044-100.51-5.5407-140.27 37.542-40.89 103.01-43.056 143.74-5.6347 41.859 38.46 44.068 105.5 5.7287 147.2-39.378 42.828-108 45.08-150.67 5.8228-43.797-40.297-46.092-110.49-5.9168-154.13 41.215-44.766 112.99-47.104 157.6-6.0108 45.735 42.133 48.116 115.48 6.1049 161.06-43.051 46.704-117.98 49.127-164.52 6.1989-47.674-43.97-50.139-120.48-6.2929-167.99 44.888-48.643 122.97-51.151 171.45-6.387 49.612 45.806 52.163 125.47 6.481 174.92-46.724 50.581-127.96 53.175-178.38 6.575-51.55-47.642-54.187-130.46-6.6691-181.85 48.561-52.519 132.95-55.199 185.31-6.7631 53.488 49.479 56.211 135.45 6.8571 188.78-50.397 54.458-137.94 57.223-192.24 6.9512-55.427-51.315-58.235-140.44-7.0452-195.71 52.233-56.396 142.93-59.247 199.17-7.1392 57.365 53.151 60.259 145.43 7.2333 202.64-54.07 58.334-147.92 61.271-206.1 7.3273-59.304-54.988-62.283-150.42-7.4213-209.57 55.906-60.273 152.91-63.295 213.03-7.5154 61.242 56.824 64.307 155.41 7.6094 216.49-57.742 62.211-157.9 65.319-219.96 7.7034-63.18-58.66-66.331-160.4-7.7974-223.42 59.578-64.149 162.9-67.343 226.89-7.8915 65.119 60.497 68.355 165.39 7.9855 230.35-61.415 66.088-167.89 69.367-233.82 8.0796-67.057-62.333-70.379-170.38-8.1736-237.28 63.251-68.026 172.88-71.391 240.75-8.2676 68.995 64.169 72.403 175.37 8.3616 244.21-65.087 69.965-177.87 73.415-247.68 8.4557-70.934-66.005-74.427-180.36-8.5497-251.14 66.923-71.903 182.86-75.439 254.61-8.6438 72.872 67.842 76.451 185.35 8.7378 258.07-68.76 73.841-187.85 77.463-261.54 8.8318-74.811-69.678-78.475-190.34-8.9258-265 70.596-75.78 192.84-79.487 268.46-9.0199 76.749 71.514 80.499 195.33 9.1139 271.93-72.432 77.718-197.83 81.511-275.39 9.208-78.688-73.35-82.523-200.33-9.302-278.86 74.268-79.657 202.82-83.535 282.32-9.396 80.626 75.186 84.547 205.32 9.49 285.79-76.104 81.595-207.81 85.559-289.25 9.5841-82.564-77.023-86.571-210.31-9.6781-292.72 77.941-83.534 212.8-87.583 296.18-9.7721 84.503 78.859 88.595 215.3 9.8662 299.65-79.777 85.472-217.79 89.607-303.11 9.9602-86.441-80.695-90.619-220.29-10.054-306.58 81.613-87.411 222.78-91.631 310.04-10.148 88.38 82.531 92.643 225.28 10.242 313.51-83.449 89.349-227.77 93.656-316.97 10.336-90.318-84.367-94.668-230.27-10.43-320.44 85.285-91.288 232.76-95.68 323.9-10.524 92.257 86.204 96.692 235.26 10.618 327.36-87.122 93.226-237.76 97.704-330.83 10.712-94.195-88.04-98.716-240.25-10.807-334.29 88.958-95.164 242.75-99.728 337.76-10.901 96.134 89.876 100.74 245.24 10.995 341.22-90.794 97.103-247.74 101.75-344.69 11.089-98.069-91.71-102.76-250.23-11.18-348.15 92.63-99.04 252.73-103.77 351.62-11.28 100.01 93.55 104.79 255.23 11.37 355.09-94.47 100.98-257.72 105.8-358.55 11.46-101.95-95.38-106.81-260.21-11.56-362.01 96.31-102.92 262.71-107.82 365.48-11.65 103.89 97.22 108.83 265.2 11.75 368.94-98.14 104.85-267.7 109.85-372.41 11.84-105.83-99.06-110.86-270.2-11.93-375.87 99.97-106.8 272.69-111.87 379.33-12.03 107.76 100.89 112.88 275.19 12.12 382.8-101.81 108.73-277.68 113.9-386.26 12.22-109.7-102.73-114.91-280.18-12.31-389.73 19.847-21.192 43.031-39.221 68.455-53.242"/></g></svg></div>\
		</div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/T_Z/pen/yNQmwe/">CodePen</a> by <a href="http://codepen.io/T_Z/">Tim Zhong</a>\
		</div>',
		data_background: "#222",
		data_state: "",
		outline_backgrounds: fancy_outline_backgrounds['over_image'],
		heading_style: "",
		}, 
		bg_dodecahedron: 
		{
		innerHTML:
		'<div class="bg_show_when_active"><div class="bg_dodecahedron_view"><div class="bg_dodecahedron_plane bg_dodecahedron_main"><div class="bg_dodecahedron_circle"></div><div class="bg_dodecahedron_circle"></div><div class="bg_dodecahedron_circle"></div><div class="bg_dodecahedron_circle"></div><div class="bg_dodecahedron_circle"></div><div class="bg_dodecahedron_circle"></div></div></div></div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/wontem/pen/PqYXop/">CodePen</a> by <a href="http://codepen.io/wontem/">wontem</a>\
		</div>',
		data_background: "#222",
		data_state: "",
		outline_backgrounds: "",
		heading_style: "",
		}, 
		bg_planet_with_moon: 
		{
		innerHTML:
		'<div class="bg_show_when_active"><div class="bg_planet_with_moon_space"><div class="bg_planet_with_moon_planet"><div class="bg_planet_with_moon_planet_shadow"></div><div class="bg_planet_with_moon_crater1"></div><div class="bg_planet_with_moon_crater2"></div><div class="bg_planet_with_moon_crater3"></div><div class="bg_planet_with_moon_crater4"></div></div><div class="bg_planet_with_moon_moon"><div class="bg_planet_with_moon_crater2 moon_crater"></div><div class="bg_planet_with_moon_crater3 moon_crater"></div></div><div class="bg_planet_with_moon_ufo"><div class="bg_planet_with_moon_ufo_part2"></div><div class="bg_planet_with_moon_ufo_part1"></div><div class="bg_planet_with_moon_ufo_flame"></div></div></div></div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/rackha93/pen/NqeKpG">CodePen</a> by <a href="http://codepen.io/rackha93/">Christian</a>\
		</div>',
		data_background: "#455A64",
		data_state: "",
		outline_backgrounds: "",
		heading_style: "",
		}, 
		bg_mountains: 
		{
		innerHTML:
		'<div class="bg_show_when_active"><div class="bg_mountain"><div class="bg_mountain-top"><div class="bg_mountain-cap-1"></div><div class="bg_mountain-cap-2"></div><div class="bg_mountain-cap-3"></div></div></div><div class="bg_mountain-two"><div class="bg_mountain-top"><div class="bg_mountain-cap-1"></div><div class="bg_mountain-cap-2"></div><div class="bg_mountain-cap-3"></div></div></div><div class="bg_mountain-three"><div class="bg_mountain-top"><div class="bg_mountain-cap-1"></div><div class="bg_mountain-cap-2"></div><div class="bg_mountain-cap-3"></div></div></div><div class="bg_mountain-cloud"></div></div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/Christopherallen/pen/Clajw">CodePen</a> by <a href="http://codepen.io/Christopherallen/">Chris Allen</a>\
		</div>',
		data_background: "#b4ddf0",
		data_state: "",
		outline_backgrounds: fancy_outline_backgrounds['dark_text'],
		heading_style: "",
		}, 
		bg_minimal_orbits: 
		{
		innerHTML:
		'<div class="bg_show_when_active"><div class="galaxy"><div class="cog small"><div class="satellite small"><div class="shadow"></div><div class="face"><div class="edge"></div></div></div></div><div class="cog medium"><div class="satellite medium"><div class="shadow"></div><div class="face"><div class="edge"></div></div></div></div><div class="cog large"><div class="satellite large"><div class="shadow"></div><div class="face"><div class="edge"></div></div></div></div><div class="planet"><div class="shadow"></div><div class="face"><div class="edge"></div></div></div></div></div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/Oka/pen/eNZBme">CodePen</a> by <a href="http://codepen.io/Oka/">Colin Hall-Coates</a>\
		</div>',
		data_background: "#252525",
		data_state: "",
		outline_backgrounds: "",
		heading_style: "",
		},
		bg_stars: 
		{
		innerHTML:
		'<div class="bg_show_when_active"><div id="bg_stars_stars"></div><div id="bg_stars_stars2"></div><div id="bg_stars_stars3"></div></div>\
		<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/saransh/pen/BKJun">CodePen</a> by <a href="http://codepen.io/saransh/">Saransh Sinha</a>\
		</div>',
		data_background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
		outline_backgrounds: "",
		heading_style: "",
		data_state: "",
		}, 
// 		bg_screen: 
// 		{
// 		innerHTML:
// 		'<div class="bg_show_when_active"><div class="bg_screen_screen"></div></div>\
// 		<div class="attribution">\
// 			This slide CSS is based on MIT licensed <a href="http://codepen.io/hsu40000/pen/raOJjz">CodePen</a> by <a href="http://codepen.io/hsu40000/">Chih-Huan Hsu</a>\
// 		</div>',
// 		data_background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
// 		outline_backgrounds: "",
// 		heading_style: "",
// 		data_state: "",
// 		}, 
		// ******* Patterns *******
		bg_pattern_lines: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/0xc0defeed/pen/gBumd">CodePen</a> by <a href="http://codepen.io/0xc0defeed/">Szilágyi György</a>\
		</div>',
		data_background: "linear-gradient(135deg, rgba(0, 0, 0, 0) 84px, #d95b43 84px, #d95b43 100px, #ecd078 100px, #ecd078 106px, #c02942 106px, #c02942 120px, #ecd078 121px, #ecd078 127px, #542437 127px, #542437 142px, #ecd078 142px, #ecd078 148px, #53777a 148px, #53777a 163px, #ecd078 163px, #ecd078 168px, #d95b43 169px), linear-gradient(135deg, #d95b43 15px, #d95b43, #ecd078 15px, #ecd078 21px, #c02942 21px, #c02942 36px, #ecd078 36px, #ecd078 42px, #542437 42px, #542437 57.5px, #ecd078 57px, #ecd078 63px, #53777a 63px, #53777a 78px, #ecd078 78px, #ecd078 84px, rgba(0, 0, 0, 0) 84px, rgba(0, 0, 0, 0) 99px)",
		data_background_size: "120px 120px",
		data_background_color: "#e1ebbd",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_wavy_lines: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/jimhall/pen/coJFL">CodePen</a> by <a href="http://codepen.io/jimhall/">Jim Hall</a>\
		</div>',
		data_background: "linear-gradient(135deg, #1a242f 49%, transparent 49%), linear-gradient(225deg, #1a242f 49%, #12879B 49%, #12879B 51%, transparent 51%), linear-gradient(135deg, transparent 51%, #1a242f 51%)",
		data_background_size: "7px 7px",
		data_background_color: "#12879B",
		outline_backgrounds: fancy_outline_backgrounds['all'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_squares: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://codepen.io/joshnh/pen/ycBlJ">CodePen</a> by <a href="http://codepen.io/joshnh/">Joshua Hibbert</a>\
		</div>',
		data_background: "linear-gradient(30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%), linear-gradient(-30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%), linear-gradient(30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%), linear-gradient(-30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%), linear-gradient(30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%), linear-gradient(-30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%), linear-gradient(30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%), linear-gradient(-30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%), linear-gradient(45deg, #544 25%, transparent 25%, transparent 75%, #544 75%), linear-gradient(45deg, #544 25%, transparent 25%, transparent 75%, #544 75%)",
		data_background_size: "8em 4em, 8em 4em, 8em 4em, 8em 4em, 8em 4em, 8em 4em, 8em 4em, 8em 4em, 4em 4em, 4em 4em",
		data_background_position: "0em 2em, 0em 2em, 2em 4em, 2em 4em, 4em 2em, 4em 2em, 6em 4em, 6em 4em, 0em 0em, 2em 2em",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_arrows: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#arrows">CSS3 Patterns Gallery entry</a> by <a href="http://twitter.com/jroenf/">Jeroen Franse</a>\
		</div>',
		data_background: "linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px, linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px), linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px)",
		data_background_size: "128px 128px",
		data_background_color: "#e1ebbd",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_microbial_mat: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#microbial-mat">CSS3 Patterns Gallery entry</a> by <a href="http://logan.mcbroom.me/">Logan McBroom</a>\
		</div>',
		data_background: "radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px, radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px), #8a3",
		data_background_size: "20px 20px",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_stairs: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#stairs">CSS3 Patterns Gallery entry</a> by <a href="http://logan.mcbroom.me/">Logan McBroom</a>\
		</div>',
		data_background: "linear-gradient(63deg, #999 23%, transparent 23%) 7px 0, linear-gradient(63deg, transparent 74%, #999 78%), linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%)",
		data_background_size: "16px 48px",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_half_rombes: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#half-rombes">CSS3 Patterns Gallery entry</a> by <a href="http://agachi.name/">Valentin Agachi</a>\
		</div>',
		data_background: "linear-gradient(115deg, transparent 75%, rgba(255,255,255,.2) 75%) 0 0, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.2) 75%) 0 0, linear-gradient(115deg, transparent 75%, rgba(255,255,255,.2) 75%) 7px -15px, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.2) 75%) 7px -15px, #36c",
		data_background_size: "15px 30px",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
// 		bg_pattern_zig_zag: 
// 		{
// 		innerHTML:
// 		'<div class="attribution">\
// 			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#zig-zag">CSS3 Patterns Gallery entry</a> by <a href="http://twitter.com/ecsspert/">eCSSpert</a>\
// 		</div>',
// 		data_background: "linear-gradient(135deg, #EC173A 25%, transparent 25%) -50px 0, linear-gradient(225deg, #EC173A 25%, transparent 25%) -50px 0, linear-gradient(315deg, #EC173A 25%, transparent 25%), linear-gradient(45deg, #EC173A 25%, transparent 25%)",
// 		data_background_size: "100px 100px",
// 		data_background_color: "#ECEDDC",
// 		outline_backgrounds: fancy_outline_backgrounds['arty'],
//		heading_style: fancy_heading_style['dark_text'],
// 		data_state: "pattern_state",
// 		}, 
		bg_pattern_zig_zag_darker: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#zig-zag">CSS3 Patterns Gallery entry</a> by <a href="http://twitter.com/ecsspert/">eCSSpert</a>\
		</div>',
		data_background: "linear-gradient(135deg, #1a242f 25%, transparent 25%) -50px 0, linear-gradient(225deg, #1a242f 25%, transparent 25%) -50px 0, linear-gradient(315deg, #1a242f 25%, transparent 25%), linear-gradient(45deg, #1a242f 25%, transparent 25%)",
		data_background_size: "100px 100px",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_weave: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#weave">CSS3 Patterns Gallery entry</a> by <a href="http://twitter.com/jroenf/">Jeroen Franse</a>\
		</div>',
		data_background: "linear-gradient(135deg, #708090 22px, #1a242f 22px, #1a242f 24px, transparent 24px, transparent 67px, #1a242f 67px, #1a242f 69px, transparent 69px), linear-gradient(225deg, #708090 22px, #1a242f 22px, #1a242f 24px, transparent 24px, transparent 67px, #1a242f 67px, #1a242f 69px, transparent 69px)0 64px",
		data_background_size: "64px 128px",
		data_background_color: "#708090",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_upholstery: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#upholstery">CSS3 Patterns Gallery entry</a> by <a href="http://nateeagle.com/">Nate Eagle</a>\
		</div>',
		data_background: "radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0, radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px, radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0, radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px, radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0, radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px, radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0, radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px, linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0, linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0",
		data_background_size: "100px 100px",
		data_background_color: "#300",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: "",
		data_state: "pattern_state",
		}, 
		bg_pattern_starry_night: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#starry-night">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)",
		data_background_size: "550px 550px, 350px 350px, 250px 250px, 150px 150px",
		data_background_color: "#090a0f",
		background_position: "0 0, 40px 60px, 130px 270px, 70px 100px",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_rainbow_bokeh: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#rainbow-bokeh">CSS3 Patterns Gallery entry</a> by <a href="http://twitter.com/okke29/">Auke Zwart</a>\
		</div>',
		data_background: "radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%)",
		data_background_size: "470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%",
		data_background_color: "#840b2a",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_carbon: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#carbon">CSS3 Patterns Gallery entry</a> by <a href="http://www.zencocoon.com/">Atle Mo (design), Sébastien Grosjean (code)</a>\
		</div>',
		data_background: "linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)",
		data_background_size: "20px 20px",
		data_background_color: "#131313",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: "",
		data_state: "pattern_state",
		}, 
		bg_pattern_carbon_fibre: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#carbon-fibre">CSS3 Patterns Gallery entry</a> by <a href="http://subtlepatterns.com/#post-22">Atle Mo (design), Lea Verou (code)</a>\
		</div>',
		data_background: "radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px",
		data_background_size: "16px 16px",
		data_background_color: "#282828",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: "",
		data_state: "pattern_state",
		}, 
		bg_pattern_argyle: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#argyle">CSS3 Patterns Gallery entry</a> by <a href="http://annamation.ca/">Anna Kassner</a>\
		</div>',
		data_background: "repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px), linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)), linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))",
		data_background_size: "70px 120px",
		data_background_color: "#6d695c",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_waves: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#waves">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px",
		data_background_size: "75px 100px",
// 					data_background_color: "slategray",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_cross: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#cross">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent) 50px 50px, linear-gradient(#A8B1BB 8px, transparent 8px) 0 -4px, linear-gradient(90deg, #A8B1BB 8px, transparent 8px) -4px 0",
		data_background_size: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
		data_background_color: "slategray",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: "",
		data_state: "pattern_state",
		}, 
		bg_pattern_stars: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#stars">CSS3 Patterns Gallery entry</a> by <a href="http://nicolasgallagher.com/">Nicolas Gallagher</a>\
		</div>',
		data_background: "linear-gradient(324deg, #232927 4%,   transparent 4%) -70px 43px, linear-gradient( 36deg, #232927 4%,   transparent 4%) 30px 43px, linear-gradient( 72deg, black 8.5%, transparent 8.5%) 30px 43px, linear-gradient(288deg, black 8.5%, transparent 8.5%) -70px 43px, linear-gradient(216deg, black 7.5%, transparent 7.5%) -70px 23px, linear-gradient(144deg, black 7.5%, transparent 7.5%) 30px 23px, linear-gradient(324deg, #232927 4%,   transparent 4%) -20px 93px, linear-gradient( 36deg, #232927 4%,   transparent 4%) 80px 93px, linear-gradient( 72deg, black 8.5%, transparent 8.5%) 80px 93px, linear-gradient(288deg, black 8.5%, transparent 8.5%) -20px 93px, linear-gradient(216deg, black 7.5%, transparent 7.5%) -20px 73px, linear-gradient(144deg, black 7.5%, transparent 7.5%) 80px 73px",
		data_background_size: "100px 100px",
		data_background_color: "#232927",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
// 		bg_pattern_seigaiha: 
// 		{
// 		innerHTML:
// 		'<div class="attribution">\
// 			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#seigaiha">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
// 		</div>',
// 		data_background: "radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0    150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent), radial-gradient(circle at 0    50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent)",
// 		data_background_size: "100px 50px",
// 		data_background_color: "silver",
// 		outline_backgrounds: fancy_outline_backgrounds['arty'],
//		heading_style: fancy_heading_style['dark_text'],
// 		data_state: "pattern_state",
// 		}, 
		bg_pattern_japanese_cube: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#japanese-cube">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a)",
		data_background_size: "80px 140px",
		data_background_color: "#556",
		data_background_position: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_brady_bunch: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#brady-bunch">CSS3 Patterns Gallery entry</a> by <a href="http://www.standardista.com/">Estelle Weyl</a>\
		</div>',
		data_background: "radial-gradient(closest-side, transparent 0%, transparent 75%, #9ab1c7 76%, #9ab1c7 85%, #687786 86%, #687786 94%, #8195A7 95%, #8195A7 103%, #8FA5B9 104%, #8FA5B9 112%, #54616D 113%, #54616D 121%, #8195A7 122%, #8195A7 130%, #687786 131%, #687786 140%), radial-gradient(closest-side, transparent 0%, transparent 75%, #9ab1c7 76%, #9ab1c7 85%, #687786 86%, #687786 94%, #8195A7 95%, #8195A7 103%, #8FA5B9 104%, #8FA5B9 112%, #54616D 113%, #54616D 121%, #8195A7 122%, #8195A7 130%, #687786 131%, #687786 140%)",
		data_background_size: "110px 110px",
		data_background_color: "#C8D3A7",
		data_background_position: "0 0, 55px 55px",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_shippo_darker: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#shippo">CSS3 Patterns Gallery entry</a> by <a href="URL">Author</a>\
		</div>',
		data_background: "radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%), radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%)",
		data_background_size: "80px 80px",
		// data_background_color: "#def",
		data_background_position: "0 0, 40px 40px",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
// 		bg_pattern_polka_dot: 
// 		{
// 		innerHTML:
// 		'<div class="attribution">\
// 			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#polka-dot">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
// 		</div>',
// 		data_background: "radial-gradient(white 15%, transparent 16%), radial-gradient(white 15%, transparent 16%)",
// 		data_background_size: "60px 60px",
// 		data_background_color: "#001",
// 		data_background_position: "0 0, 30px 30px",
// 		outline_backgrounds: fancy_outline_backgrounds['arty'],
//		heading_style: fancy_heading_style['dark_text'],
// 		data_state: "pattern_state",
// 		}, 
		bg_pattern_polka_dot_grey: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#polka-dot">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "radial-gradient(#9ab1c7 15%, transparent 16%), radial-gradient(#9ab1c7 15%, transparent 16%)",
		data_background_size: "60px 60px",
		//data_background_color: "#001",
		data_background_position: "0 0, 30px 30px",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
// 		bg_pattern_polka_dot_purple: 
// 		{
// 		innerHTML:
// 		'<div class="attribution">\
// 			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#polka-dot">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
// 		</div>',
// 		data_background: "radial-gradient(#EAC117 15%, transparent 16%), radial-gradient(#EAC117 15%, transparent 16%)",
// 		data_background_size: "60px 60px",
// 		data_background_color: "#5E5A80",
// 		data_background_position: "0 0, 30px 30px",
// 		outline_backgrounds: fancy_outline_backgrounds['arty'],
// 		data_state: "pattern_state",
// 		}, 
		bg_pattern_diagonal_checkerboard_dark: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#diagonal-checkerboard">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "linear-gradient(45deg, #1a242f 25%, transparent 25%, transparent 75%, #1a242f 75%, #1a242f), linear-gradient(-45deg, #1a242f 25%, transparent 25%, transparent 75%, #1a242f 75%, #1a242f)",
		data_background_size: "60px 60px",
		data_background_color: "",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_madras: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#blueprint-grid">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "linear-gradient(LightSteelBlue 2px, transparent 2px), linear-gradient(90deg, LightSteelBlue  2px, transparent 2px), linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
		data_background_size: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
		data_background_color: "#269",
		data_background_position: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
// 		bg_pattern_tablecloth: 
// 		{
// 		innerHTML:
// 		'<div class="attribution">\
// 			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#tablecloth">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
// 		</div>',
// 		data_background: "linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%), linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%)",
// 		data_background_size: "50px 50px",
// 		data_background_color: "white",
// 		outline_backgrounds: fancy_outline_backgrounds['arty'],
// 		data_state: "pattern_state",
// 		}, 
		bg_pattern_cicada_stripes: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#cicada-stripes">CSS3 Patterns Gallery entry</a> by <a href="http://forthedeveloper.com/">Randy Merrill</a>\
		</div>',
		data_background: "linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%), linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%)",
		data_background_size: "13px, 29px, 37px, 53px",
		data_background_color: "#026873",
		outline_backgrounds: fancy_outline_backgrounds['arty'],
		heading_style: "",
		data_state: "pattern_state",
		}, 
		bg_pattern_vertical_stripes: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#vertical-stripes">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "linear-gradient(90deg, transparent 50%, rgba(255,255,255,.5) 50%)",
		data_background_size: "50px 50px",
		data_background_color: "gray",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
		bg_pattern_horizontal_stripes: 
		{
		innerHTML:
		'<div class="attribution">\
			This slide CSS is based on MIT licensed <a href="http://lea.verou.me/css3patterns/#horizontal-stripes">CSS3 Patterns Gallery entry</a> by <a href="http://lea.verou.me/">Lea Verou</a>\
		</div>',
		data_background: "linear-gradient(transparent 50%, rgba(255,255,255,.5) 50%)",
		data_background_size: "50px 50px",
		data_background_color: "gray",
		outline_backgrounds: fancy_outline_backgrounds['dark'],
		heading_style: fancy_heading_style['dark_text'],
		data_state: "pattern_state",
		}, 
	};
	
        // load config options
	var section_step = 1;
	if(options['step']) {
		section_step = options['step'];
	}
	
	// add caption div for attribution text
	var reveals = document.getElementsByClassName('reveal');
	var i;
	for (i = 0; i < reveals.length; i++) {
		reveals[i].innerHTML += '<div id="caption"></div>';
	}
	
	// label li with commands as such
	// iterate through list items
	var lis = document.querySelectorAll('p,li');
        var i;
        for (i = 0; i < lis.length; i++) {
          // detect command prompts and format prompt and content separately
          var new_li = lis[i].innerHTML.replace(/^([#$]|msf>|&gt;) (.*)/gi, "<span class='commandprompt'>$1</span> $2");
          if(new_li != lis[i].innerHTML) {
            lis[i].innerHTML = new_li;
            lis[i].classList.add("commandline");
          }
          // detect code and format
          var new_li = lis[i].innerHTML.replace(/^html_code:(.*)/gi, "<pre><code class='html'>$1</code></pre>");
          var new_li = new_li.replace(/^css_code:(.*)/gi, "<pre><code class='css'>$1</code></pre>");
          var new_li = new_li.replace(/^js_code:(.*)/gi, "<pre><code class='javascript'>$1</code></pre>");
          var new_li = new_li.replace(/^code:(.*)/gi, "<pre><code>$1</code></pre>");
          if(new_li != lis[i].innerHTML) {
            var new_li = new_li.replace(/<br\>/gi, "\n");
            lis[i].innerHTML = new_li;
          }
  
          // monospace any line starting with "| " (and remove that prefix)
          var new_li_mono = lis[i].innerHTML.replace(/^\| (.*)/gi, "<span class='monospace'>$1</span>");
          if(new_li_mono != lis[i].innerHTML) {
            lis[i].innerHTML = new_li_mono;
          }
        }

        // monospace code found in a ul with no li
        var uls = document.getElementsByTagName('ul');
        var i;
        for (i = 0; i < uls.length; i++) {
          var new_ul_mono = uls[i].innerHTML.replace(/^\s*#!(.*)/gi, "<span class='monospace'>$1</span>");
          if(new_ul_mono != uls[i].innerHTML) {
            uls[i].innerHTML = new_ul_mono;
          }
        }
        
	// an array of backgrounds
	var keys = Object.keys(fancy_backgrounds);
        
        // iterate through sections
	var sections = document.getElementsByTagName('section');
	var i;
	for (i = 0; i < sections.length; i++) {
		var bg_to_use = 'bg_pattern_stairs';
                
		// if this is a super-section, label as such (expands to fix display, and used elsewhere)
		if(sections[i].getElementsByTagName('section').length) {
			sections[i].classList.add("supersection");
		}
		// if this is a title page, label as such
		if(sections[i].getElementsByTagName('h1').length) {
                  sections[i].classList.add("titlepage");
                }
                
		// add outline div, around text content
		add_outline_div(sections[i]);
		
		// add transition effects for images, based on the number of images on slide (excl attribution images)
		add_image_effects(sections[i]);
                
                // if attempting to print, remove background images and don't apply any other processing
                if(window.location.search.match( /print-pdf/gi) ) {
                  if(sections[i].getAttribute("data-background")) {
                    sections[i].setAttribute("data-background", "");;
                  }
                  continue;
                }
                
                
		// set outline background for slides with outlines or backgrounds set -- then continue onto next section
		if(sections[i].getAttribute("data-fancy-outline-background")) {
			add_outline_background([ sections[i].getAttribute("data-fancy-outline-background") ], sections[i], false);
			continue;
		} else if(sections[i].getAttribute("data-background")) {
			add_outline_background(fancy_outline_backgrounds['over_image'], sections[i], true);
			add_heading_style(fancy_heading_style['dark_text'], sections[i]);
			continue;
		}
		// only consider setting background fx for top level sections
		if(sections[i].parentElement.getAttribute("class") != "slides") {
			continue;
		}
		
		// detect hard coded fancy_backgrounds (data-fancy-background="bg_sky")
		var hardcoded_bg_choice = sections[i].getAttribute("data-fancy-background");
		if(hardcoded_bg_choice) {
			bg_to_use = hardcoded_bg_choice;
		} else {
                        // skip processing some slides based on section_step (for example, every second one)
                        if(i % section_step == 0) {
				// select a background at random
				bg_to_use = keys[Math.floor(Math.random() * keys.length)];
                        } else {
				continue;
			}
		}
		// debug: select and discard the last fx
		// bg_to_use = keys.pop();
		// debug: select and discard the first fx
		// bg_to_use = keys.shift();

		// debug: reload key array when depleted
		// if(keys.length == 0) {
		// 	keys = Object.keys(fancy_backgrounds);
		// }

		
		// assign background fx to slide
		sections[i].innerHTML += fancy_backgrounds[bg_to_use]['innerHTML'];
		sections[i].setAttribute("data-background", fancy_backgrounds[bg_to_use]['data_background']);
		if(fancy_backgrounds[bg_to_use]['data_background_size']) {
			sections[i].setAttribute("data-background-size", fancy_backgrounds[bg_to_use]['data_background_size']);
		}
		if(fancy_backgrounds[bg_to_use]['data_background_color']) {
			sections[i].setAttribute("data-background-color", fancy_backgrounds[bg_to_use]['data_background_color']);
		}
		if(fancy_backgrounds[bg_to_use]['data_state']) {
			sections[i].setAttribute("data-state", fancy_backgrounds[bg_to_use]['data_state']);
		}
		if(fancy_backgrounds[bg_to_use]['data_background_position']) {
			sections[i].setAttribute("data-background-position", fancy_backgrounds[bg_to_use]['data_background_position']);
		}
		
		var outline_bg_classes = fancy_backgrounds[bg_to_use]['outline_backgrounds'];
		if(outline_bg_classes) {
			add_outline_background(outline_bg_classes, sections[i], false);
		}
		
		var heading_style_classes = fancy_backgrounds[bg_to_use]['heading_style'];
		if(heading_style_classes) {
			add_heading_style(heading_style_classes, sections[i]);
		}
	}
}

// add heading styles
function add_heading_style (heading_style_classes, section) {
	// select a compatible style to use at random
	var heading_style_to_use = heading_style_classes[Math.floor(Math.random() * heading_style_classes.length)];
	
	var headings = section.getElementsByTagName('h2');
	for (i = 0; i < headings.length; i++) {
		headings[i].classList.add(heading_style_to_use);
	}
	/*
	if(sections[i].getElementsByTagName('h1').length) {
		sections[i].classList.add("titlepage");
	}*/
// 	// also set for all subsections
// 	var subsections = section.getElementsByTagName('section');
// 	var i;
// 	for (i = 0; i < subsections.length; i++) {
// 		var headings = subsections[i].getElementsByTagName('h2');
// 		
// 	}
}

// insert underlay for text readability
function add_outline_background (outline_bg_classes, section, clear_class_list) {
	// select a compatible outline background to use at random
	var outline_bg_to_use = outline_bg_classes[Math.floor(Math.random() * outline_bg_classes.length)];
	
	// set outline background
	var outlines = section.getElementsByClassName('outline');
	var x;
	for (x = 0; x < outlines.length; x++) {
		if(clear_class_list) {
			// clear any other classes added by section group
			outlines[x].className = "outline";
		}
		outlines[x].classList.add(outline_bg_to_use);
	}
	
	// also set an attribute for all subsections, defining the outline to use
	var subsections = section.getElementsByTagName('section');
	var i;
	for (i = 0; i < subsections.length; i++) {
	  subsections[i].setAttribute("data-fancy-outline-background", outline_bg_to_use);
	}
}

function add_image_effects (section) {
  	// stop processing this sections images if this is a super-section (contains another section)
	if(section.classList.contains("supersection")) {
		return;
	}

	// identify images to be affected
	var images = section.getElementsByTagName('img');
	var imagesToFx = [];
	var x;
	for (x = 0; x < images.length; x++) {
		if(!images[x].classList.contains("attribution_image")) {
			imagesToFx.push(images[x]);
		}
	}
	// debug: label the images with how many there were
	//add_class_to_elements(imagesToFx, "numimgs".concat(images.length) );
	
	// add effects
	if(imagesToFx.length == 2) {
		add_class_to_elements(imagesToFx, "flipin");
	} else {
		add_class_to_elements(imagesToFx, "zoomandcropin");
	}
	
	// add layout classes
	// if an embedded youtube is included on the slide, make all images tiny (they are quite likely screenshots)
	if(section.getElementsByClassName('youtube-player').length) {
		add_class_to_elements(imagesToFx, "tiny_image");
	// otherwise assign a size based on the number of images on the slide
	} else if(imagesToFx.length > 5) {
		add_class_to_elements(imagesToFx, "tiny_image");
	} else if(imagesToFx.length > 2) {
		add_class_to_elements(imagesToFx, "small_image");
	} else if(imagesToFx.length > 1) {
		add_class_to_elements(imagesToFx, "dual_image");
	} else if(imagesToFx.length == 1) {
		// if there is no text on slide, then make the image full screen
		if(section.getElementsByClassName('outline').length == 0) {
			add_class_to_elements(imagesToFx, "fullscreen_max_image");
                        add_class_to_elements(section.getElementsByClassName('slide_license'), "slide_licence_to_side");
		} else {
			add_class_to_elements(imagesToFx, "side_image", "wide_image");
		}
	}
}

function add_outline_div (section) {
        // if not already set manually
	if(section.getElementsByClassName('outline').length) {
		return;
	}
	
	// identify text to enclose in an outline div
	var re = /([^]*?)((?:<p>|<ul>)[^]*(?:<\/p>|<\/ul>))([^]*?)/;
	var content = section.innerHTML;
        
        // edit the html to insert an outline div around the text
	var content_new = content.replace(re, "$1<div class='outline'>$2</div>$3");
	
	section.innerHTML = content_new;
	
	// Hackish removal of wrongly placed outlines, within attribution div
	var attrs = section.getElementsByClassName("attribution");
	var x;
	for (x = 0; x < attrs.length; x++) {
	  var rouge_outlines = attrs[x].getElementsByClassName("outline");
	  var i;
	  for (i = 0; i < rouge_outlines.length; i++) {
	    rouge_outlines[i].outerHTML = rouge_outlines[i].innerHTML;
	  }
	}
}

// resize text to fit on screen
// iterates over outlines and if they extend too far down,
// then resize fonts smaller until it fits on the screen
function resize_text_to_fit () {
  var sections = document.getElementsByTagName('section');
  var i;
  for (i = 0; i < sections.length; i++) {
    var outlines = sections[i].getElementsByClassName('outline');
    var x;
    for (x = 0; x < outlines.length; x++) {
      var size = 100;
      while ((outlines[x].offsetHeight + outlines[x].offsetTop) > 710 && size > 20) {
        size -= 5;
        outlines[x].style.fontSize = size + "%";
      }
    }
  }
}

// the third argument is optional, to specify a class for when the image is very wide
function add_class_to_elements (array_of_elements, class_to_add, class_to_add_if_wide) {
	var x;
	for (x = 0; x < array_of_elements.length; x++) {
		// wide image
		if(class_to_add_if_wide && array_of_elements[x].naturalWidth > array_of_elements[x].naturalHeight * 2.5) {
			array_of_elements[x].classList.add(class_to_add_if_wide);
		} else {
			array_of_elements[x].classList.add(class_to_add);
		}
	}
}

function purge_classes (array_of_elements) {
	var x;
	for (x = 0; x < array_of_elements.length; x++) {
		array_of_elements[x].className = "";
	}
}

Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	updateCaption(event.currentSlide);
        resize_text_to_fit ();
} );

Reveal.addEventListener( 'ready', function( event ) {
	updateCaption(event.currentSlide);
        resize_text_to_fit ();
} );

function updateCaption( currentSlide ) {
	// search the slide for attribution divs and display in the main slide caption
	var attributions = currentSlide.getElementsByClassName('attribution');
	var captionDiv = document.getElementById('caption');
	var caption = "";
	var i;
	for (i = 0; i < attributions.length; i++) {
		caption = caption + attributions[i].innerHTML;
	}
	caption = caption + '<p>Slides styled using AwesomeSlides by <a href="http://z.cliffe.schreuders.org/">Z. Cliffe Schreuders</a> (based on <a href="http://lab.hakim.se/reveal-js">Reveal.js</a> by <a href="http://hakim.se">Hakim El Hattab</a>)</p>';
	captionDiv.innerHTML = caption;
}