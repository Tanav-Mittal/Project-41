class Drop
{

    constructor(x,y)
    {

        var options = {
            'friction' : 0.1,
            'restitution' : 0.1
        }

        this.body  = Bodies.circle(x,y,5,options)
        //this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    display()
    {
        fill('blue')
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }

    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)});
        }
    }
}