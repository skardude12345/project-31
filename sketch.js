const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, height - 7, width, 20);

  for (let i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
    
  }
  
  for (let i = 40; i <= width; i=i+50) {
    plinkos.push(new Plinko(i, 75));
  }
  
  for (let i = 15; i <= width; i=i+50) {
    plinkos.push(new Plinko(i, 175));
  }
  
  for (let i = 40; i <= width; i=i+50) {
    plinkos.push(new Plinko(i, 275));
  }
  
  for (let i = 15; i <= width; i=i+50) {
    plinkos.push(new Plinko(i, 375));
  }
  
  console.log(divisions);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 +10), 10, 10));
  }



  ground.display()
  
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (let i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}