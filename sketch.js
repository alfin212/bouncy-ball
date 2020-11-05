const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ball2_options={
        restitution: 0.7
    }

    ball2 = Bodies.circle(300,20,40,ground_options);
    World.add(world,ball2);

    var ball3_options={
    restitution: 1.5
    }
    ball3 = Bodies.rectangle(100,40,20,20,ball3_options);
    World.add(world,ball3)

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y, 50, 50);

    rectMode(RADIUS);
    rect(ball3.position.x,ball3.position.y, 20, 20);
}