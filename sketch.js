const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, table1, table2;

var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18;

var polygon, polygonImg;

var slingShot;

var score = 0;
function preload(){
  polygonImg = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(600, 590, 1200, 20);
  table1 = new Ground(500, 400, 220, 20);
  table2 = new Ground(900, 250, 220, 20);

  box1 = new Box(420,360);
  box2 = new Box(460,360);
  box3 = new Box(500,360);
  box4 = new Box(540,360);
  box5 = new Box(580,360);

  box6 = new Box(460,300);
  box7 = new Box(500,300);
  box8 = new Box(540,300);

  box9 = new Box(500,240);

  box10 = new Box(820,210);
  box11 = new Box(860,210);
  box12 = new Box(900,210);
  box13 = new Box(940,210);
  box14 = new Box(980,210);

  box15 = new Box(860,170);
  box16 = new Box(900,170);
  box17 = new Box(940,170);

  box18 = new Box(900,140);

  var polygon_options = {
    restitution:0.8,
    friction:1,
    density:1
  }
  polygon = Bodies.circle(50,200,25,polygon_options);
  World.add(world, polygon);

  slingShot = new Slingshot(polygon, {x:200,y:200});

}

function draw() {
  background("pink");  

  noStroke();
  fill("brown");
  ground.display();

  fill("green");
  table1.display();
  table2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box1.scoring();
  box2.scoring();
  box3.scoring();
  box4.scoring();
  box5.scoring();
  box6.scoring();
  box7.scoring();
  box8.scoring();
  box9.scoring();

  box10.scoring();
  box11.scoring();
  box12.scoring();
  box13.scoring();
  box14.scoring();
  box15.scoring();
  box16.scoring();
  box17.scoring();
  box18.scoring();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y,50,50);

  stroke("black");
  slingShot.display();

  text("SCORE: "+score, 750, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon);
  }
}