class Game{
   
    constructor(){}

    start(){
        sun = createSprite(displayWidth/2+300,100,10,10);
        sun.addImage(sunImg);
        console.log(sun.x);
        sun.scale = 0.09;
        
        trex = createSprite(50,displayHeight-190,15,50);
        trex.addAnimation("running", trex_running);
        trex.addAnimation("collided", trex_collided);
        trex.scale = 1.4;
        trex.setCollider("rectangle",0,-5,65,60);
        
        gameOver = createSprite(displayWidth/2-200,300);
        gameOver.addImage(gameOverImg);
        
        restart = createSprite(displayWidth/2-200,displayHeight/3);
        restart.addImage(restartImg);
          
        gameOver.scale = 0.8;
        restart.scale = 0.7;
      
        gameOver.visible = false;
        restart.visible = false;
        
        invisibleGround = createSprite(displayWidth/2,displayHeight-140,displayWidth*500,50);
       // invisibleGround.addImage(groundImage);
        invisibleGround.visible = false;

        objects = new Objects();
        cloudsGroup = new Group();
        obstaclesGroup = new Group();  
        
    }
    plays(){
        // score = score + Math.round(getFrameRate()/60);
        //ground.velocityX = -6;
        
        if((touches.length > 0 || keyDown("space")) && trex.y >= 545
        
        
        ) {
            trex.velocityY = -13;
            jumpSound.play();
            touches = [];  
        }
        
        trex.velocityY = trex.velocityY + 0.9;
        
        trex.collide(invisibleGround);
        objects.createObstacle();
        objects.createClouds();

        if(obstaclesGroup.isTouching(trex)){
            collideSound.play();
            gameState = END;
        }
                
         camera.position.x=trex.x+400;
         camera.position.y=displayHeight/2-55;
    }

    ends() {
        gameOver.visible = true;
        restart.visible = true;
        
        //set velcity of each game object to 0
        trex.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        cloudsGroup.setVelocityXEach(0);
        
        //change the trex animation
        trex.changeAnimation("collided",trex_collided);
        
        obstaclesGroup.setLifetimeEach(-1);
        cloudsGroup.setLifetimeEach(-1);
        
      }
    restart() {
        gameState = PLAY;
        gameOver.visible = false;
        restart.visible = false;
        
        obstaclesGroup.destroyEach();
       cloudsGroup.destroyEach();
        
        trex.changeAnimation("running",trex_running);
        
        if(localStorage[0] < score){
            localStorage[0] = score;
        }
        touches = [];
        score = 0;
    }


};