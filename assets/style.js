// Initialize font properties
const fontname = "Montserrat";
const fontweights = [300, 400];

// Color properties
const basecolor = "#ffffff";  // Changed to white
const accentcolor = "#0062cc";
const highlightcolor = "#ffffff";  // Changed to white

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";
const backgroundcolor = "#000000";  // Changed to black

// Link properties
const acolor = accentcolor;
const adecoration = "none";

// Menu properties
const menucolor = basecolor;
const menufontsize = "14pt";
const menudecoration = "none";

// Header properties
const headercolor = "#ffffff";  // Changed to white
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "23pt";

// Publication properties
const ptitlecolor = basecolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = 400;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = "#ffffff";  // Changed to white
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = highlightcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #ffffff;  // Changed to white
//         }
//   .years {
//             font - size: 11px;
//             color: #ffffff;  // Changed to white
//         }

$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".defaultauthor").css("color", authorcolor);
$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);
