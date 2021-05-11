class Particle{
    constructor(x, y, r) {
        var options={
            'restitution': 1.0,
            'density': 1.2,
            'friction':0.5,
            'isStatic': false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r, options);
        this.color = this.color(random(0, 255), random(0, 255), random(0, 255));
	    World.add(world, this.body);
    }
    display(){
        var particlepos = this.body.position;
        push();
        translate(particlepos.x,particlwpos.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}