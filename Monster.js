class Monster{
    constructor(x,y,width, height){

        var options = {
            'restitution': 0,
            'density':0.1,
            'frictionAir': 0.1
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png");
        this.body = Bodies.rectangle(x,y, width, height,options);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;

        push();
        translate(this.x, this.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, width, height);
        pop();     
        
    }
}