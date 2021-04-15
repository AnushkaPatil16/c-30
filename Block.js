class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visible = 225;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
   
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      }
      else{
        push();
        World.remove(world,this.body);
        this.Visible = this.Visible-5
        tint(225,this.Visible);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
      }
    
    }
}