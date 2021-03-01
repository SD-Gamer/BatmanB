const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine

var maxDrops = 100;
drops = [Drops];

function setup(){
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    
    batman = new Umbrella(250,525);
    rain = new Drops(random(0,500),0);
}

function draw(){
    background("black");
    for(var i = 0;i < maxDrops;i++){
        drops.push(new Drops(random(0,500),random(0,400)));
    }
    batman.display();
    rain.display();
}   

