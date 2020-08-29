var bullet, wall;
var thicknesss
var speed, weight;


function setup() {
  createCanvas(1600, 400);
  
  //bullet
  bullet = createSprite(50, 200, 30, 30);
  
  //thickness
  thicknesss = random(22, 83);
  
  //Wall
  wall = createSprite(1200, 200, thicknesss, 400/2);
  wall.shapeColor = color(80, 80, 80);
  
  //Speed and Weight
  speed = random(223, 321);
  weight = random(30, 52); 

}

function draw() {
 
  //background
  background(255,255,255);  
  
  //Setting the velocity x of the bullet
  bullet.velocityX = speed;
  
  //The condition if the collision happens
  if(hasCollided(bullet, wall))
  {

    //Setting the velocity x of the bullet to zero 
    bullet.velocityX = 0;
    
    //damage
    var damage = 0.5 * weight * speed * speed/(thicknesss * thicknesss * thicknesss);
    
    //The condition if the damage is greater than 10
    if(damage > 10)
    {
        //Setting the Colour of wall
        wall.shapeColor = color(255, 0, 0);

    }
    
    //The condition if the damage is lesser than 10
    if(damage < 10)
    {
        //Setting the Colour of wall
        wall.shapeColor = color(0, 255, 0);

    }


  }
  
  //hasCollided function
  function hasCollided(lbullet, lwall)
  {

    //Setting the bulletRightEdge to the sum of lbullet.x and lbullet.width
    bulletRightEdge = lbullet.x + lbullet.width;

    //Setting the wallLeftEdge to lwall.x 
    wallLeftEdge = lwall.x;

    //The condition if the bulletRightEdge is greater than or equal towallLeftEdge 
    if(bulletRightEdge >= wallLeftEdge)
    {

      return true;

    }
    return false;

  }
  
  drawSprites();

  

}