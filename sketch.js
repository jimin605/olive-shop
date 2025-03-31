let img_banner;
let img_add;
let img_product;
let img_bar;
let img_icon;
let img_green;
let img_answer;

let state = 0;

function preload(){
  img_banner = loadImage('01_banner.png');
  img_add = loadImage('02_add.png');
  img_product = loadImage('03_product.png');
  img_bar = loadImage('04_bar.png');
  img_icon = loadImage('05_icon.png');
  img_green = loadImage('06_green.png');
  img_answer = loadImage('07_answer.png');
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(225);
  if (state==0){
  image(img_banner,0,0,393,128);
  image(img_add,0,128,393,284);
  image(img_product,0,412,393,440);
  image(img_bar,0,764,393,88);
  image(img_icon,320,688,60,60);
  }else if(state==1){
  image(img_banner,0,0,393,128);
  image(img_add,0,128,393,284);
  image(img_product,0,412,393,440);
  image(img_green,0,612,393,152);
  image(img_bar,0,764,393,88);
  image(img_icon,320,688,60,60);
  }
}

function mouseClicked(){
  if(mouseX>=320 && mouseX<=380){
    if(mouseY>=688 && mouseY<= 748){
      if(state == 0){
        state =1
      }else if (state == 1){
        state = 0;
      }
    }
  }
}