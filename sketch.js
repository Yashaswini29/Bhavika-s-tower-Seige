const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world

var polygonImg

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1000,400)
    engine = Engine.create()
    world = engine.world;
    var options = {
        density:0.2
    }
    polygon = Bodies.circle(100,200,25,options)
    World.add(world,polygon)
    ground = new Ground(500,height,1000,20);
    stand1 = new Ground(390,350,250,10);
    stand2 = new Ground(820,200,180,10);
    //top
    fill("grey")
    box1 = new Box(390,195,30,40)
    //2nd
    fill("blue")
    box2 = new Box(420,235,30,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(360,235,30,40)
    //3rd
    box5 = new Box(330,275,30,40)
    box6 = new Box(360,275,30,40)
    box7 = new Box(390,275,30,40)
    box8 = new Box(420,275,30,40)
    box9 = new Box(450,275,30,40)
    //4th
    box10 = new Box(480,315,30,40)
    box11 = new Box(450,315,30,40)
    box12 = new Box(420,315,30,40)
    box13 = new Box(390,315,30,40)
    box14 = new Box(360,315,30,40)
    box15 = new Box(330,315,30,40)
    box16 = new Box(300,315,30,40)

    //bottom
    box17 = new Box(760,190,30,40)
    box18 = new Box(790,190,30,40)
    box19 = new Box(820,190,30,40)
    box20 = new Box(850,190,30,40)
    box21 = new Box(880,190,30,40)

    //2nd
    box22 = new Box(790,150,30,40)
    box23 = new Box(820,150,30,40)
    box24 = new Box(850,150,30,40)

    box25 = new Box(820,110,30,40)

   
slingshot = new Slingshot(polygon,{x:100,y:200})


    

}

function draw(){
    background("brown")
    Engine.update(engine);
    ground.display();
    fill("blue")
    box1.display();
    fill("teal")
    box2.display();
    box3.display();
    box4.display();
    fill("pink");
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    fill("white")
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    fill("blue")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("white")
    box22.display();
    box23.display();
    box24.display();
    fill("grey")
    box25.display();
    stand1.display();
    stand2.display();

    slingshot.display();
    
    imageMode(CENTER);
    image(polygonImg,polygon.position.x, polygon.position.y,50,50)

}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}
function keyPressed(){
    if(keyCode === 32){
      
       slingshot.attach(polygon);
     
      
    }
}