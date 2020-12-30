class Dustbin{
constructor(x,y,width,height){
var options={
	'isStatic':true
}
this.bodyb=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.bodyb);
this.bodyb.width=width
this.bodyb.height=height

}
display(){
fill("white");
rect(this.bodyb.position.x,this.bodyb.postion.y,this.bodyb.width,this.bodyb.height);
rect((this.bodyb.position.x-(this.bodyb.width/2)),this.bodyb.position.y-(this.bodyb.height/2));	
}
}