class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }
  
  //create a shoot function
  shoot(archerAngle) {
    archerAngle += 90
    this.velocity = p5.Vector.fromAngle(archerAngle * (3.14 / 180))

    this.velocity.mult(0.5)

    Matter.Body.setVelocity(this.body, {
      x: this.velocity.x * (180 / 3.14),
      y: this.velocity.y * (180 / 3.14)
    });

    Matter.Body.setStatic(this.body, false)
    if(keyIsDown(RIGHT_ARROW)){
      playerArrows.shoot(playerArcher.body.angle)
    }
  }
 

  display() {
  
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
