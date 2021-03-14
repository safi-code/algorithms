var a,b;
function setup() {
  createCanvas(800,400);
  a= createSprite(200, 200, 50, 80);
  b= createSprite(400, 200, 80, 30);
  a.shapeColor="green";
  b.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;
  console.log(b.x-a.x);
if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && b.y-a.y<a.height/2+b.height/2 && a.y-b.y<b.height/2+a.height/2)
  {b.shapeColor="red";
  a.shapeColor="red";

}
else {b.shapeColor="green";
a.shapeColor="green";

}
  drawSprites();
}
