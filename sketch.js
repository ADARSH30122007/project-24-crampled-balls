var dustbin,paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);


	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	dustbin=new dustbin(720,300,100,10);
	paper=new paper(100,300,10);
	ground=Bodies.rectangle(width/2,400,width,100
		(
			isStatic=true,
		));
		World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  dustbin.display();
  paper.display();
  ground.display();

  drawSprites();



}
function keyPressed(){
if(keyCode ===UP_ARROW){ 
	Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85})
	
}
	
}
