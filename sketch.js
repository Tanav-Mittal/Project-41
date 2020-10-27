const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops  = 100;
var thunder;
var drops = [];


function preload()
{
    thunderIMG_1 = loadImage("thunderbolt/1.png")
    thunderIMG_2 = loadImage("thunderbolt/2.png")
    thunderIMG_3 = loadImage("thunderbolt/3.png")
    thunderIMG_4 = loadImage("thunderbolt/4.png")
}

function setup()
{
    createCanvas(600,600)
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(300,500); 

    for(var i = 0;i<maxDrops;i++)
    {
        drops.push(new Drop(random(0,400),random(0,400)))
    }
    
    
}

function draw()
{
    Engine.update(engine);
    background("black")
    umbrella.display();
   
    for(var i = 0; i<maxDrops; i++)
    {
        drops[i].display();
        drops[i].update()
    }
        

        if (frameCount %  80 === 0) 
        {
            thunder = createSprite(random(0,600), 0, 100, 100);
            var rand = Math.round(random(1,4));
            var thunderCreatedFrame=frameCount;
            switch(rand)
            {
                case 1: thunder.addImage("thunder",thunderIMG_1);
                thunder.scale = random(0.3,0.6)
                break;
                case 2: thunder.addImage("thunder",thunderIMG_2);
                thunder.scale = random(0.3,0.6)
                break;
                case 3: thunder.addImage("thunder",thunderIMG_3);
                thunder.scale = random(0.3,0.6)
                break;
                case 4: thunder.addImage("thunder",thunderIMG_4);
                thunder.scale = random(0.3,0.6) 
                break;
            }
            thunder.lifetime = 15;
        }   

        
            
        
drawSprites();
}
