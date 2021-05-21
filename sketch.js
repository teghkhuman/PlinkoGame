
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Events = Matter.Events

var ground
var plinkos = []
var particles = []
var division = []
var divisionHeight = 300

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
  for (var k = 0; k <= width; k = k + 80) {
    division.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }
}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();

  }
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10))
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();

  }
  for (var k = 0; k < division.length; k++) {
    division[k].display();

  }
}