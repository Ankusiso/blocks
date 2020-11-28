var a,b;
function setup() {
  createCanvas(1200,800);
  a=createSprite(200, 200, 50, 50);
  b= createSprite(400,200,80,30);
  a.shapeColor="green";
  b.shapeColor="green";
}

function draw() {
  background(0);  
  console.log(a.x-b.x)
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x===a.width/2+b.width/2){
    a.shapeColor='red';
    b.shapeColor='red';
  }
  else{
    a.shapeColor='green';
    b.shapeColor='green';
  }
  drawSprites();
}