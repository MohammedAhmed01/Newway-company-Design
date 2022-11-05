var container = document.querySelectorAll(".container");
for (i = 0; i < container.length; i++) {
    container[i].style.width = "1170px";
    container[i].style.margin = "0 auto";
}


var header = document.querySelector("header");
header.style.padding = "30px 0px 30px 0px";

var logo = document.querySelector(".logo");
logo.style.float = "left";

var nav = document.querySelector("nav");
nav.style.float = "right";

var ul = document.querySelector("ul");
ul.style.listStyle = "none";

var li = document.querySelectorAll("li");
for (i = 0; i < li.length; i++) {
    li[i].style.display = "inline-block";
}

var a = document.querySelectorAll("a");

for (i = 0; i < a.length; i++) {
    a[i].style.textDecoration = "none";
    a[i].style.color = "#666699";
    a[i].style.marginLeft = "50px";
    a[i].style.fontFamily = "Source Sans Pro";
}
var hover = document.querySelector("#hover");
hover.style.color = "#cc6633";

hover1.addEventListener("mouseover", function () {
    hover1.style.color = "#cc6633";
}
);
hover1.addEventListener("mouseleave", function () {
    hover1.style.color = "#637f83";
}
);
hover2.addEventListener("mouseover", function () {
    hover2.style.color = "#cc6633";
}
);
hover2.addEventListener("mouseleave", function () {
    hover2.style.color = "#637f83";
}
);
hover3.addEventListener("mouseover", function () {
    hover3.style.color = "#cc6633";
}
);
hover3.addEventListener("mouseleave", function () {
    hover3.style.color = "#637f83";
}
);
hover4.addEventListener("mouseover", function () {
    hover4.style.color = "#cc6633";
}
);
hover4.addEventListener("mouseleave", function () {
    hover4.style.color = "#637f83";
}
);
hover5.addEventListener("mouseover", function () {
    hover5.style.color = "#cc6633";
}
);
hover5.addEventListener("mouseleave", function () {
    hover5.style.color = "#637f83";
}
);

var Bblock = document.querySelector(".block");
Bblock.style.height = "100px";
Bblock.style.backgroundColor = "#333333";

var banner = document.querySelector(".banner");
banner.style.backgroundImage = "url(images/design/image.jpg)";
banner.style.backgroundSize = "cover";
banner.style.textAlign = "center";
banner.style.padding = "25px 0px 125px 0px";

var b_heading = document.querySelector("#banner-heading");
b_heading.style.fontSize = "40px";
b_heading.style.lineHeight = "52px";
b_heading.style.color = "#ffffff";
b_heading.style.fontWeight = "lighter";
b_heading.style.textDecoration = "underline";
b_heading.style.letterSpacing = "8px";

var b_para = document.querySelector("#banner-para");
b_para.style.fontSize = "16px";
b_para.style.lineHeight = "26px";
b_para.style.color = "#ffffff";
b_para.style.letterSpacing = "5px";
b_para.style.textTransform = "uppercase";
b_para.style.margin = "35px 0px 40px 0px";
b_para.style.fontFamily = "'Lato'";

var block_content = document.querySelector(".block-content");
block_content.style.textAlign = "center";
block_content.style.padding = "40px 0px 45px 0px";

var block_heading = document.querySelector(".block-content h2");
block_heading.style.color = "#666699";
block_heading.style.fontSize = "34px";
block_heading.style.lineHeight = "auto";
block_heading.style.fontFamily = "Source Sans Pro'";

var block_para = document.querySelector(".block-content p");
block_para.style.fontSize = "24px";
block_para.style.lineHeight = "auto";
block_para.style.color = "#666699";
block_para.style.fontFamily = "Source Sans Prolight";

var main_block = document.querySelector(".main-block");
main_block.style.backgroundColor = "#f6f6f6";

var main_block_div = document.querySelectorAll("#main div");
for (i = 0; i < main_block_div.length; i++) {
    main_block_div[i].style.float = "left";
    main_block_div[i].style.width = "25%";
    main_block_div[i].style.textAlign = "center";
    main_block_div[i].style.borderRight = "1px solid #d5d5d5";
    main_block_div[i].style.padding = "60px 50px";
}
var main_block_div_lc = document.querySelector('#main div:last-child');
main_block_div_lc.style.borderRight = "none";


var main_block_h3 = document.querySelectorAll('#main div h3');
for (i = 0; i < main_block_h3.length; i++) {
    main_block_h3[i].style.color = "#637f83";
    main_block_h3[i].style.fontSize = "22px";
    main_block_h3[i].style.lineHeight = "auto";
    main_block_h3[i].style.fontFamily = "'Source Sans Pro'";
    main_block_h3[i].style.padding = "30px 0px";
}

var main_block_p = document.querySelectorAll('#main div p');
for (i = 0; i < main_block_p.length; i++) {
    main_block_p[i].style.color = "#637f83";
    main_block_p[i].style.fontSize = "13px";
    main_block_p[i].style.lineHeight = "20px";
    main_block_p[i].style.fontFamily = "'Source Sans Proregular'";
    main_block_p[i].style.paddingBottom = "25px";
}

var main_block_a = document.querySelectorAll('#main div a');
for (i = 0; i < main_block_a.length; i++) {
    main_block_a[i].style.color = "#ffffff";
    main_block_a[i].style.fontSize = "16px";
    main_block_a[i].style.lineHeight = "20px";
    main_block_a[i].style.fontFamily = "'Source Sans Problack'";
    main_block_a[i].style.backgroundColor = "#637f83";
    main_block_a[i].style.padding = "10px 20px";
    main_block_a[i].style.borderRadius = "5px";
    main_block_a[i].style.textDecoration = "none";
    main_block_a[i].style.margin = "0";
}

var block_content_two = document.querySelector('.block-content-two');
block_content_two.style.textAlign = "center";
block_content_two.style.padding = "40px 0px 45px 0px";

var block_content_two_heading = document.querySelector(".block-content-two h2");
block_content_two_heading.style.color = "#666699";
block_content_two_heading.style.fontSize = "34px";
block_content_two_heading.style.lineHeight = "auto";
block_content_two_heading.style.fontFamily = "Source Sans Pro'";

var block_content_two_para = document.querySelector(".block-content-two p");
block_content_two_para.style.fontSize = "24px";
block_content_two_para.style.lineHeight = "auto";
block_content_two_para.style.color = "#666699";
block_content_two_para.style.fontFamily = "Source Sans Prolight";

var gallery = document.querySelectorAll('.gallery img');
for (i = 0; i < gallery.length; i++) {
    gallery[i].style.marginRight = "26px";
}
var last_img = document.querySelector('.gallery img:last-child');
last_img.style.marginRight = "0";

var btn = document.querySelector('.button');
btn.style.textAlign = "center";
btn.style.padding = "40px 0px 120px 0px";

var btn_a = document.querySelector('.button a');
btn_a.style.color = "#ffffff"
btn_a.style.backgroundColor = "#e4551d";
btn_a.style.fontSize = "18px";
btn_a.style.lineHeight = "auto";
btn_a.style.padding = "15px";
btn_a.style.borderRadius = "6px";

var contentLeft = document.querySelector('.content-left');
contentLeft.style.width = "50%";
contentLeft.style.float = "left";

var contentLeftimage = document.querySelectorAll('.content-left-image');
for (i = 0; i < contentLeftimage.length; i++) {
    contentLeftimage[i].style.display = "inline-block";
    contentLeftimage[i].style.verticalAlign = "top";
    contentLeftimage[i].style.margin = "5px 0 30px 0";
    contentLeftimage[i].style.width = "20%";
}

var contentLeftData = document.querySelectorAll('.content-left-data');
for (i = 0; i < contentLeftData.length; i++) {
    contentLeftData[i].style.width = "78%";
    contentLeftData[i].style.display = "inline-block";
    contentLeftData[i].style.marginBottom = "30px";
}

var contentLeftH4 = document.querySelectorAll('.content-left-data h4');
for (i = 0; i < contentLeftH4.length; i++) {
    contentLeftH4[i].style.fontSize = "22px";
    contentLeftH4[i].style.lineHeight = "auto";
    contentLeftH4[i].style.color = "#789094";
    contentLeftH4[i].style.fontFamily = "'Source Sans Pro'";
    contentLeftH4[i].style.marginBottom = "7px";
}

var contentLeftP = document.querySelectorAll('.content-left-data p');
for (i = 0; i < contentLeftP.length; i++) {
    contentLeftP[i].style.fontSize = "14px";
    contentLeftP[i].style.lineHeight = "24px";
    contentLeftP[i].style.color = "#959494";
    contentLeftP[i].style.fontFamily = "'Source Sans Proregular'";
}

var contentRight = document.querySelector('.content-right');
contentRight.style.width = "50%";
contentRight.style.float = "right";

var contentRightimage = document.querySelectorAll('.content-right-image');
for (i = 0; i < contentRightimage.length; i++) {
    contentRightimage[i].style.display = "inline-block";
    contentRightimage[i].style.verticalAlign = "top";
    contentRightimage[i].style.margin = "5px 0 30px 0";
    contentRightimage[i].style.width = "20%";
}

var contentRightData = document.querySelectorAll('.content-right-data');
for (i = 0; i < contentRightData.length; i++) {
    contentRightData[i].style.width = "78%";
    contentRightData[i].style.display = "inline-block";
    contentRightData[i].style.marginBottom = "30px";
}

var contentRightH4 = document.querySelectorAll('.content-right-data h4');
for (i = 0; i < contentRightH4.length; i++) {
    contentRightH4[i].style.fontSize = "22px";
    contentRightH4[i].style.lineHeight = "auto";
    contentRightH4[i].style.color = "#789094";
    contentRightH4[i].style.fontFamily = "'Source Sans Pro'";
    contentRightH4[i].style.marginBottom = "7px";
}

var contentRightP = document.querySelectorAll('.content-right-data p');
for (i = 0; i < contentRightP.length; i++) {
    contentRightP[i].style.fontSize = "14px";
    contentRightP[i].style.lineHeight = "24px";
    contentRightP[i].style.color = "#959494";
    contentRightP[i].style.fontFamily = "'Source Sans Proregular'";
}

var bottomBlockMain = document.querySelector('.bottom-block-main');
bottomBlockMain.style.backgroundColor = "#637f83";

var bottomBlockHead = document.querySelector('.bottom-block-head');
bottomBlockHead.style.padding = "50px 0px 40px 0px";

var bottomBlockHeadH5 = document.querySelector('.bottom-block-head h5');
bottomBlockHeadH5.style.fontSize = "34px";
bottomBlockHeadH5.style.lineHeight = "auto";
bottomBlockHeadH5.style.textAlign = "center";
bottomBlockHeadH5.style.fontFamily = "'Source Sans Pro'";
bottomBlockHeadH5.style.color = "white";

var bottomBlockHeadP = document.querySelector('.bottom-block-head p');
bottomBlockHeadP.style.fontSize = "24px";
bottomBlockHeadP.style.lineHeight = "auto";
bottomBlockHeadP.style.textAlign = "center";
bottomBlockHeadP.style.fontFamily = "'Source Sans Prolight'";
bottomBlockHeadP.style.color = "white";

var hr = document.querySelector('hr');
hr.style.backgroundColor = "#597275";
hr.style.height = "2px";
hr.style.border = "none";

var bottomBlockMainLeft = document.querySelector('.bottom-block-main-left');
bottomBlockMainLeft.style.display = "inline-block";
bottomBlockMainLeft.style.padding = "45px 0px 30px 0px";
bottomBlockMainLeft.style.width = "50%";
bottomBlockMainLeft.style.float = "left";


var bottomBlockMainLeftContent = document.querySelector('.bottom-block-main-left-content');
bottomBlockMainLeftContent.style.display = "inline-block";

var bottomBlockMainLeftContenth6 = document.querySelector('.bottom-block-main-left-content h6');
bottomBlockMainLeftContenth6.style.fontSize = "18px";
bottomBlockMainLeftContenth6.style.lineHeight = "auto";
bottomBlockMainLeftContenth6.style.color = "#ffffff";
bottomBlockMainLeftContenth6.style.fontFamily = "'Source Sans Pro'";

var bottomBlockMainLeftContentp = document.querySelector('.bottom-block-main-left-content p');
bottomBlockMainLeftContentp.style.fontSize = "14px";
bottomBlockMainLeftContentp.style.lineHeight = "auto";
bottomBlockMainLeftContentp.style.color = "#ffffff";
bottomBlockMainLeftContentp.style.marginBottom = "30px";
bottomBlockMainLeftContentp.style.fontFamily = "'Source Sans Proregular'";

var bottomBlockMainLeftContentimg = document.querySelector('.bottom-block-main-left img');
bottomBlockMainLeftContentimg.style.margin = "0px 20px 0px 0px";

var btn1 = document.querySelector('.bottom-block-main-left .btn1');
btn1.style.backgroundColor = "#597275";
btn1.style.border = "none";
btn1.style.padding = "7px 20px";
btn1.style.borderRadius = "7px";
btn1.style.marginLeft = "10px";
btn1.style.fontFamily = "'Source Sans Problack'";
btn1.style.color = "#ffffff";
btn1.style.fontSize = "18px";
btn1.style.lineHeight = "25.6px";

var signIn = document.querySelector('.bottom-block-main-left #sign-in');
signIn.style.border = "none";
signIn.style.width = "460px";
signIn.style.height = "40px";
signIn.style.borderRadius = "5px";
signIn.style.marginBottom = "50px";

var bottomBlockMainRight = document.querySelector('.bottom-block-main-right');
bottomBlockMainRight.style.backgroundColor = "#597275";
bottomBlockMainRight.style.padding = "25px 25px 30px 30px";
bottomBlockMainRight.style.borderRadius = "5px";
bottomBlockMainRight.style.width = "50%";
bottomBlockMainRight.style.float = "right";
bottomBlockMainRight.style.marginTop = "35px";

var bottomBlockMainRightimg = document.querySelector('.bottom-block-main-right img');
bottomBlockMainRightimg.style.marginRight = "30px";

var bottomBlockMainRightp = document.querySelector('.bottom-block-main-right p');
bottomBlockMainRightp.style.display = "inline-block";
bottomBlockMainRightp.style.fontSize = "14px";
bottomBlockMainRightp.style.lineHeight = "22px";
bottomBlockMainRightp.style.fontFamily = "'Source Sans Proregular'";
bottomBlockMainRightp.style.color = "#b5c7c9";

var bottomBlockMainRightpa = document.querySelector('.bottom-block-main-right p a');
bottomBlockMainRightpa.style.color = "white";
bottomBlockMainRightpa.style.margin = "0";

var placehoder = document.querySelector('input');
placehoder.style.backgroundColor = "#597275";

var socailMedia = document.querySelectorAll('.social-media');
for (i = 0; i < socailMedia.length; i++) {
    socailMedia[i].style.width = "33%";
    socailMedia[i].style.float = "left";

}

var socailMediaContent = document.querySelectorAll('.social-media-content');
for (i = 0; i < socailMediaContent.length; i++) {
    socailMediaContent[i].style.display = "inline-block";
    socailMediaContent[i].style.verticalAlign = "middle";
}

var socailMediaImg = document.querySelectorAll('.social-media img');
for (i = 0; i < socailMedia.length; i++) {
    socailMediaImg[i].style.verticalAlign = "middle";
    socailMediaImg[i].style.paddingRight = "20px";
    socailMediaImg[i].style.padding = "30px 20px 30px 0";
}

var socailMediaContentH4 = document.querySelectorAll('.social-media-content h4');
for (i = 0; i < socailMediaContentH4.length; i++) {
    socailMediaContentH4[i].style.fontSize = "18px";
    socailMediaContentH4[i].style.lineHeight = "auto";
    socailMediaContentH4[i].style.color = "#637f83";
    socailMediaContentH4[i].style.fontFamily = "'Source Sans Pro'";
}

var socailMediaContentp = document.querySelectorAll('.social-media-content p');
for (i = 0; i < socailMediaContentp.length; i++) {
    socailMediaContentp[i].style.fontSize = "14px";
    socailMediaContentp[i].style.lineHeight = "auto";
    socailMediaContentp[i].style.color = "#c0cfd1";
    socailMediaContentp[i].style.fontFamily = "'Source Sans Proregular'";
}

var footer = document.querySelector('footer');
footer.style.backgroundColor = "#637f83";

var footerContent = document.querySelector('.footer-content');
footerContent.style.fontSize = "14px";
footerContent.style.lineHeight = "24px";
footerContent.style.fontFamily = "'Source Sans Proregular'";
footerContent.style.color = "#ffffff";
footerContent.style.textAlign = "center";
footerContent.style.padding = "40px 0px 35px 0px";









