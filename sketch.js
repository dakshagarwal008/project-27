
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject4;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,700,40); 


	bobDiameter=40;
	bobPosX=roof.width/2;

	bobObject1 = new bob(bobPosX-bobDiameter*2,400,bobDiameter);
	bobObject2 = new bob(bobPosX-bobDiameter,400,bobDiameter);
	bobObject3 = new bob(bobPosX,400,bobDiameter);
	bobObject4 = new bob(bobPosX+bobDiameter,400,bobDiameter);
	bobObject5 = new bob(bobPosX+bobDiameter*2,400,bobDiameter);
	


	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
   		
   		
}


	function keyPressed(){
		if(keyCode === UP_ARROW){
	
			Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	
		}
	}
	