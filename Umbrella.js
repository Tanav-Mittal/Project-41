class Umbrella
{

    constructor(x,y)
    {
        var options = 
        {
            isStatic : true
        }
      this.body  = Bodies.circle(x,y,75,options)
      this.image = loadImage("WalkingFrame/walking_1.png");
      //this.radius = radius
      this.x = x;
      this.y = y;
      World.add(world,this.body);
    }

    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,200,200)
    }

    


}