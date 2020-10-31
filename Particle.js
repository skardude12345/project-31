class Particle{
    constructor(x, y, radius) {
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        this.color = color(random(0,255), random(0,255), random(0, 255));
        World.add(world, this.body);
      }

      display(){
        push();
          fill(this.color);
          ellipseMode(CENTER);
          ellipse(this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
        pop();
      }
}