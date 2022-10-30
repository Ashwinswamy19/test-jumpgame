var gameState = "PLAY";
var spike1, spike_animation, player_jump, saw, door;
var player, player_run, player_idle, player_die, g1, ig1, g2, ig2, ig3, g3, ig4, g4, g5, ig5, g6, ig6, g7, ig7, g8, ig8, g9, ig9, g10, ig10, g11, ig11, g12, ig12;
var gameover, itemGroup;

function preload() {
  spike_animation = loadAnimation("long_wood/long_wood_spike_01.png", "long_wood/long_wood_spike_02.png", "long_wood/long_wood_spike_03.png", "long_wood/long_wood_spike_04.png", "long_wood/long_wood_spike_05.png");
  player_run = loadAnimation("Stickman Run/tile000.png",
  "Stickman Run/tile001.png",
  "Stickman Run/tile002.png",
  "Stickman Run/tile003.png",
  "Stickman Run/tile004.png",
  "Stickman Run/tile005.png",
  "Stickman Run/tile006.png",
  "Stickman Run/tile007.png",
  "Stickman Run/tile008.png",
  "Stickman Run/tile009.png",
  "Stickman Run/tile010.png",
  "Stickman Run/tile011.png",
  "Stickman Run/tile012.png",
  "Stickman Run/tile013.png",
  "Stickman Run/tile014.png",
  "Stickman Run/tile015.png");

  player_jump = loadAnimation("Stickman Jump/tile000.png",
  "Stickman Jump/tile001.png",
  "Stickman Jump/tile002.png",
  "Stickman Jump/tile003.png",
  "Stickman Jump/tile004.png",
  "Stickman Jump/tile005.png",
  "Stickman Jump/tile006.png",
  "Stickman Jump/tile007.png",
  "Stickman Jump/tile008.png",
  "Stickman Jump/tile009.png",
  "Stickman Jump/tile010.png",
  "Stickman Jump/tile011.png",
  "Stickman Jump/tile012.png",
  "Stickman Jump/tile013.png",
  "Stickman Jump/tile014.png",
  "Stickman Jump/tile015.png");

  player_idle = loadAnimation("Stickman Idle/tile000.png",
  "Stickman Idle/tile001.png",
  "Stickman Idle/tile002.png",
  "Stickman Idle/tile003.png",
  "Stickman Idle/tile004.png",
  "Stickman Idle/tile005.png",
  "Stickman Idle/tile006.png",
  "Stickman Idle/tile007.png",
  "Stickman Idle/tile008.png",
  "Stickman Idle/tile009.png",
  "Stickman Idle/tile010.png",
  "Stickman Idle/tile011.png",
  "Stickman Idle/tile012.png",
  "Stickman Idle/tile013.png",
  "Stickman Idle/tile014.png",
  "Stickman Idle/tile015.png");

  player_die = loadAnimation("Stickman Die/tile000.png",
  "Stickman Die/tile001.png",
  "Stickman Die/tile002.png",
  "Stickman Die/tile003.png",
  "Stickman Die/tile004.png",
  "Stickman Die/tile005.png",
  "Stickman Die/tile006.png",
  "Stickman Die/tile007.png",
  "Stickman Die/tile008.png",
  "Stickman Die/tile009.png",
  "Stickman Die/tile010.png",
  "Stickman Die/tile011.png",
  "Stickman Die/tile012.png",
  "Stickman Die/tile013.png",
  "Stickman Die/tile014.png",
  "Stickman Die/tile015.png");

  saw = loadAnimation("saw_amimation/rotating_saw_01.png",
  "saw_amimation/rotating_saw_02.png",
  "saw_amimation/rotating_saw_03.png",
  "saw_amimation/rotating_saw_04.png",
  "saw_amimation/rotating_saw_05.png",
  "saw_amimation/rotating_saw_06.png", )

  //player_run = loadAnimation("Stickman Run")

  door = loadImage("dor.png")

  gameover = loadImage("gameover.jpeg");

}

function setup() {
  createCanvas(displayWidth*2,displayHeight*2);

  itemGroup = new Group();

  door1 = createSprite(2450, height-1500, 150, 50);
  door1.addImage(door);
  door.scale = 0.1;
  
  spike1 = createSprite(550,height-109,100,100);
  spike1.addAnimation("spike", spike_animation);

  spike2 = createSprite(2100,height-670,100,100);
  spike2.addAnimation("spike", spike_animation);

  player = createSprite(100, height-250, 100,100);
  player.addAnimation("idle", player_idle);
  player.addAnimation("run", player_run);
  player.addAnimation("jump", player_jump); 
  player.addAnimation("die", player_die);
  player.scale = 0.4;
  player.velocityY = 0;

  saw1 = createSprite(1650, height-119, 350,350);
  saw1.addAnimation("saww", saw);
  
  itemGroup.add(spike1);
  itemGroup.add(spike2);
  itemGroup.add(saw1);

  gameoversprite = createSprite(player.x + 500 ,player.y, 100,100);
  gameoversprite.scale = 2;
  gameoversprite.addImage(gameover);

  gameState = "PLAY";

// level 1


  g1 = new Ground(350,height-50,450,50);
  ig1 = new InvisGround(350, height-50,450,50);

  g2 = new Ground(1250,height-50,450,50);
  ig2 = new InvisGround(1250, height-50,450,50);

  g3 = new Ground(1750,height-50,450,50);
  ig3 = new InvisGround(1750, height-50,450,50);

  g4 = new Ground(2350,height-50,450,50);
  ig4 = new InvisGround(2350, height-50,450,50);

  g5 = new Ground(2350,height-600,450,50);
  ig5 = new InvisGround(2350, height-600,450,50);

  g6 = new Ground(2350,height-1200,450,50);
  ig6 = new InvisGround(2350, height-1200,450,50);

 



// level 2

  

} 

function draw() {
  background(255,255,255);  
 

  if (gameState === "PLAY") {
    gameoversprite.visible = false;
    camera.x = player.x;
    camera.y = player.y - 500;

    if(keyDown("SPACE")) {
      player.velocityY = -25;
      player.changeAnimation("jump");
    }
    else if(keyDown("D")) {
      player.x = player.x + 10;
      player.changeAnimation("run")
    }
    else if(keyDown("A")) {
      player.x = player.x - 10;
      player.changeAnimation("run")
    }
    else{
      player.changeAnimation("idle");
    }
  
    player.velocityY = player.velocityY + 3
    ig1.display();
    ig2.display();
    ig3.display();
    ig4.display();
    ig5.display();
    ig6.display();
  
    
    if(player.isTouching(door1)) {
      gameState = "LVL2";
    }

    if(player.isTouching(spike1) || player.isTouching(spike2) || player.isTouching(saw1) ||  (player.y > displayHeight * 2)) {
      gameState = "END";
    }
  }
  else if (gameState === "LVL2") {

    g7 = new Lvl2Ground(350,height-50,450,50);
    ig7 = new Lvl2InvisGround(350, height-50,450,50);

    player.x = 100;
    player.y = height-250;

    gameoversprite.visible = false;
    camera.x = player.x;
    camera.y = player.y - 500;

    itemGroup.destroyEach();

    if(keyDown("SPACE")) {
      player.velocityY = -25;
      player.changeAnimation("jump");
    }
    else if(keyDown("D")) {
      player.x = player.x + 10;
      player.changeAnimation("run")
    }
    else if(keyDown("A")) {
      player.x = player.x - 10;
      player.changeAnimation("run")
    }
    else{
      player.changeAnimation("idle"); 
    }
  
    player.velocityY = player.velocityY + 3

    ig7.display();

  }
  else if (gameState === "END") {
    background(0);
    player.velocityY = 0;
    player.velocityX = 0;
    player.changeAnimation("die");
    gameoversprite.visible = true;
    setTimeout(ded, 500);
    itemGroup.destroyEach();
  }
  

  drawSprites();
}

function ded() {
  player.visible = false;
  
}