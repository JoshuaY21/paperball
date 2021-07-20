const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


let left_wall;
let right_wall;
var cradle1,cradle2
var bottom_wall;
var top_wall;
var ball;

var button1, button2;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();

  world = engine.world;
  ball = new Ball(200,200,20)


 
  
bottom_wall = new Ground(500, 590, 1000, 20); 
  
top_wall = new Ground(500,10,1000,20)
left_wall = new Ground(10,300,20,600)
right_wall = new Ground(990,300,20,600)
cradle1  = new Ground(450,550,10,100)
cradle2  = new Ground(550,550,10,100)

}

function draw() 
{
  background("lightblue");
  Engine.update(engine);

  bottom_wall.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();
  cradle1.show();
  cradle2.show();

  ball.show();




}

function NvForce(){

  //body, initial force, force to be applied
  Matter.Body.applyForce(ball.body, {x:ball.body.position.x,y:ball.body.position.y}, {x:0,y:-0.05})
}


function hForce() {

  //body, initial force, force to be applied
  Matter.Body.applyForce(ball.body, {x:ball.body.position.x,y:ball.body.position.y}, {x:0.05,y:0})
}

function vForce() {

  //body, initial force, force to be applied
  Matter.Body.applyForce(ball.body, {x:ball.body.position.x,y:ball.body.position.y}, {x:0,y:0.05})
}

function NhForce() {

  //body, initial force, force to be applied
  Matter.Body.applyForce(ball.body, {x:ball.body.position.x,y:ball.body.position.y}, {x:-0.05,y:0})
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
    NvForce()
  }
  
  if (keyCode === DOWN_ARROW) {
    vForce()
  }
  
  if (keyCode === LEFT_ARROW) {
    NhForce()
  }
  
  if (keyCode === RIGHT_ARROW) {
    hForce()
  }
  
  }