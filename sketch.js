var bg_img;
var prince_img;
var princess,princess_img;
var monster_img;
var play,play_img;
var bg2_img,bg3_img;
var start,start_img;
var playSound;
var prince,prince_img;
var monster,monster_img;
var coin_animation,coin_animation_img;
var gameOver;
var reset,reset_img;
var enemy;
var invisibleGround;
var invisibleScreen;
var invisiblebar;
var coin,points,coin_img;
var bg4;
var bg5;
var prince_won;
var win;
var jump_sounds,clap_sounds;
var won;
var bg1_s,bg3_s;
var gm_sound,coins_sound,won_sound,bg_sounds;
var score=0;
var jump=0;
var gameState=0;


function preload()
{
   // load sounds here
 
  
   playSound=loadSound("sounds/play_sound.mp3");
   jump_sounds=loadSound("sounds/jump_sound.mp3");
   gm_sound=loadSound("sounds/game over evil.mp3");
   coins_sound=loadSound("sounds/coin_sound.mp3");
   won_sound=loadSound("sounds/win_sound.mp3");

	//load images here
   bg_img=loadImage("images/bg.png");
   bg2_img=loadImage("images/bg2.png");
   bg3_img=loadImage("images/bg3.png");
   bg4=loadImage("images/gameover.png");
   bg5=loadImage("images/winner_bg.jpg");
   play_img=loadImage("images/play.png");
   start_img=loadImage("images/start_button.png");
   reset_img=loadImage("images/restart.png");
   coin_img=loadImage("images/coin1.png");
   princess_img=loadImage("images/princes.png");
   winner=loadImage("images/won.png");

   //load animations here
   prince_img=loadAnimation("images/p1.png" , "images/p2.png" , "images/p3.png");
   monster_img = loadAnimation("images/m1.png","images/m2.png","images/m3.png","images/m4.png","images/m5.png","images/m6.png","images/m7.png","images/m8.png")
   coin_animation_img = loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png");
   prince_jump = loadAnimation("images/p3.png");
   
}

function setup() {
createCanvas(windowWidth,windowHeight);

play=createSprite(windowWidth-1150,windowHeight-300);
play.addImage(play_img);
play.visible=false;
play.setCollider("rectangle",0,0,300,140)


start=createSprite(610,500);
start.addImage(start_img);
start.visible=false;
start.setCollider("rectangle",0,0,400,160)


prince = createSprite(150,470);
prince.addAnimation("running" , prince_img);
prince.addAnimation("prince_jump",prince_jump);
prince.scale=0.6;
prince.visible=false;

princess=createSprite(29000,470);
princess.addImage(princess_img);
princess.scale=0.3;

invisiblebar=createSprite(29000,470,10,windowHeight);
invisiblebar.visible=false; 



coin_animation = createSprite(prince.x-650,70);
coin_animation.addAnimation("stay", coin_animation_img);
coin_animation.scale=0.7;
coin_animation.visible=false;



invisibleGround=createSprite(prince.x,560,windowWidth*100,10);
invisibleGround.visible=false;

reset=createSprite(windowWidth-1000,windowHeight-300);
reset.addImage(reset_img);
reset.scale=0.4;
reset.visible=false;

//all groups
monsterGroup=new Group();
coinsGroup=new Group();

}


function draw() { 
 

 //if the gamestate is 0 what will hapen
 if(gameState === 0){
  image(bg_img,windowWidth-1368,windowHeight-667,windowWidth, windowHeight+20);
    
    play.visible=true;

  if(mousePressedOver(play) && gameState === 0){
    playSound.play();
    gameState=1;
  }
 
  textSize(60);
  fill("red")
  textFont("Bold")
  text("RUN AT LAST",windowWidth-1320,windowHeight-500);

   
}

 if(gameState===1){
    play.destroy();
   
    camera.position.x=null;
    image(bg2_img,windowWidth-2068,windowHeight-667,windowWidth+100, windowHeight+20);

    //text
    fill("black");
    textSize(40);
    text("ʏᴏᴜ ᴀʀᴇ ᴘʀɪɴᴄᴇ ᴀɴᴅ ʏᴏᴜʀ ᴘʀɪɴᴄᴇss ɪs ᴋɪᴅɴᴀᴘᴘᴇᴅ" ,windowWidth-1800,windowHeight-600);
    text("ʏᴏᴜ ʜᴀᴠᴇ ᴛᴏ ᴇsᴄᴀᴘᴇ ᴛʜᴇ ᴘʀɪɴᴄᴇss ғʀᴏᴍ ᴛʜᴇ ᴄᴀsᴛʟᴇ " , windowWidth-1810,windowHeight-500);
    text("ɢᴏ ɢᴏ ɢᴏ ʏᴏᴜ ʜᴀᴠᴇ ᴛᴏ ᴅᴏ ɪᴛ " , windowWidth-1600,windowHeight-400);
    text("ᴄʟɪᴄᴋ 'sᴛᴀʀᴛ' ᴛᴏ sᴀᴠᴇ ᴛʜᴇ ᴘʀɪɴᴄᴇss"  , windowWidth-1670,windowHeight-300);

    //start button
    start.visible=true;
    start.x=windowWidth-1400;
    start.y=windowHeight-130;
  }
  if(mousePressedOver(start) && gameState === 1){
    playSound.play();
    gameState=2;

 }
  

  if(gameState===2){
    background("yellow") 
    image(bg3_img,windowWidth-1898,windowHeight-667,windowWidth*22, windowHeight+20);
       
      fill("red");
      textSize(70);
      textFont("Bold");
      text("= " +score,prince.x-600,100);

      start.visible=false;
   
      prince.visible=true;
    //  prince.x=
  //    prince.x=windowWidth-1800;
      coin_animation.visible=true;
      coin_animation.x=prince.x-650;
      //all functions
      enemy();
      points();
      screen();
     
      prince.collide(invisibleGround);
      prince.setCollider("rectangle",0,0,120,200)
   
    prince.velocityX=10;
    camera.position.x=prince.x;

   

 
   if(mousePressedOver(invisibleScreen)&& prince.y>469){
    
      prince.changeAnimation("prince_jump",prince_jump);
      prince.velocityY=-15;
      jump=jump+1;
    }else if(prince.y>490){
  prince.changeAnimation("running",prince_img);
  }

    if(mousePressedOver(invisibleScreen)&& prince.y>469 &&jump>0){
      jump_sounds.play();
    }

 
  prince.velocityY= prince.velocityY+0.9;

  if(prince.isTouching(princess) || prince.isTouching(invisiblebar)){
    gameState=4;
    won_sound.play();
   }
 
  if(coinsGroup.isTouching(prince)){
   coinsGroup.destroyEach();
   score=score+1;
   coins_sound.play();
  }

  if(monsterGroup.isTouching(prince)){
    gm_sound.play();
    gameState=3;
   }

  
  }
  if(gameState===3){
    camera.position.x=null;
    image(bg4,windowWidth-2068,windowHeight-667,windowWidth+100, windowHeight+20);
    
  //  gameState=5;

    prince.visible=false;
    prince.velocityX=0;
    prince.velocityY=0;
    reset.visible=true;
    coin_animation.visible=false;
    monsterGroup.destroyEach();
    coinsGroup.destroyEach();

   
  
  }


 
  if(gameState===4){
    camera.position.x=null;
    image(bg5,windowWidth-2080,windowHeight-667,windowWidth+20, windowHeight);
   
 
    fill("black");
    textSize(50);
    text("ƈօռɢʀǟȶʊʟǟȶɨօռֆ ʏօʊ ɛֆƈǟքɛɖ ʏօʊʀ քʀɨռƈɛֆֆ" , windowWidth-1800,windowHeight-600);

    prince.destroy();
    console.log(gameState);
    princess.destroy();
    coin_animation.destroy();
    coinsGroup.destroyEach();
    monsterGroup.destroyEach();
  
    
 
  //  prince_won.visible=true;

    
  
   
  }
  
  
  if(mousePressedOver(reset)&& gameState===3){
    camera.position.x=null;
    console.log("gameover");
    reset.visible=false;
    gameState=1;
    score=0;
   // start.visible=true;
  

  }

  

drawSprites();  
}

function enemy() {
 
  if (frameCount % 60 === 0) {
    monster = createSprite(prince.x+1000,482);
    monster.scale=1.2;
    monster.x=Math.round(random(prince.x+500,prince.x+1000))
    monster.velocityX = -7;
    monster.addAnimation("kill",monster_img);
    monster.setCollider("rectangle",0,0,80,120)
    monsterGroup.add(monster);
  }
  
}



function screen(){
  invisibleScreen=createSprite(windowWidth-1898,windowHeight-337,windowWidth*66, windowHeight+20)
  invisibleScreen.visible=false;
}

function points(){
if(frameCount % 150 === 0){
coin1=createSprite(prince.x+900,460);
coin1.addImage(coin_img);
coin1.scale=0.5;
coin1.velocityX=-9;

coinsGroup.add(coin1);
}

}

function restart(){
  reset=createSprite(290,400);
  reset.addImage(reset_img);
  reset.scale=0.4;

  if(mousePressedOver(reset)&& gameState===5){
    camera.position.x=null;
    console.log("gameover");
    reset.visible=false;
    gameState=1;
    score=0;
  

  }

}

  



