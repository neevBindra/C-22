//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
//namespace
var engine,world,ground, ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create(); //created our own engine
  world = engine.world;     //created our own world
  var option = {
    isStatic :true
  }
  ground = Bodies.rectangle (200,380,400,10,option); // cretaed bodies inside our own world
  World.add (world,ground);
  
var op1 = {
  restitution :0.8
}

  ball = Bodies.circle (200,10,10,op1);
  World.add(world,ball);

  

}

function draw() {
  background(0);  
  Engine.update ( engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10);
}