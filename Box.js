class Box {
  constructor(x, y, width, height, angle) {

  var options = {
    isStatic: false,
      restitution:0.8,
      friction:1.0,
      density:1.0

  }
  this.Visibility=255
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
score(){
  if (this.visibility<0 && this.visibility >-105){
    score++
  }
}
display(){
  if (this.body.speed>3)
    {
      World.remove(world,this.body)
      push()
      this.Visibility=this.Visibility-5
      tint(255,this.Visibility)
      //rect (this.body.position.x,this.body.position.y,50,50)
      pop();
    }
    else{
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER);
  rect( 0,0, this.width, this.height);
  pop();
  }
}
}
