class Objects{
   
    constructor(){}

    createObstacle (){
        if(frameCount % 70 === 0) {
            var obsX = random(displayWidth/3+100,displayWidth);
            
            var obstacle = createSprite(obsX,displayHeight-175,10,40);
            //obstacle.debug = true;
            obstacle.velocityX = -6;
            
            obstacle.scale = displayHeight/600;
            //generate random obstacles
            var rand = Math.round(random(1,2));
        // console.log(rand);
            switch(rand) {
            case 1: obstacle.addImage(obstacle1);
                    obstacle.scale = 0.8;
                    break;
            case 2: obstacle.addImage(obstacle2);
                    break;
            case 3: obstacle.addImage(obstacle3);
                    break;
            case 4: obstacle.addImage(obstacle4);
                    break;
            case 5: obstacle.addImage(obstacle5);
                    break;
            
            default: break;
            }
            
            //assign scale and lifetime to the obstacle           
            
            obstacle.lifetime = 600;
            //add each obstacle to the group
            obstaclesGroup.add(obstacle)

        }
    }
    createClouds (){
        if (frameCount % 80 === 0) {
                var cldX = random(displayWidth/3,displayWidth*2);
                var cloud = createSprite(cldX,displayHeight/3,40,10);
                cloud.y = Math.round(random(displayHeight/2,displayHeight/10));
                cloud.addImage(cloudImage);
                cloud.scale = random(1,2);
                cloud.velocityX = -3;
                
                 //assign lifetime to the variable
                cloud.lifetime = 500;
                
                //adjust the depth
                cloud.depth = trex.depth;
                trex.depth = trex.depth + 1;
                
                cloud.depth = gameOver.depth;
                gameOver.depth = gameOver.depth+1;
                
                //add each cloud to the group
                cloudsGroup.add(cloud);
              } 

    }

};