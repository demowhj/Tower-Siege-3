class Box{
    constructor(x, y){
        var options = {
            restitution:0.8,
            friction:1,
            density:1
        }

        this.body = Bodies.rectangle(x, y, 40, 60, options);
        World.add(world, this.body);

        this.width = 40;
        this.height = 60;
        this.Visiblity = 255;

        this.image = loadImage("Box.png");
    }

    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle); 
            imageMode(CENTER);
            image(this.image, 0, 0, 40, 60);
            pop();
        }

        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 40, 60);
            pop();
        }
    }

    scoring(){
        if(this.Visiblity < 0 && this.Visiblity >-105){
            score++;
        }
    }
}