class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //to make the pig completely visible
    this.Visibility=255;
  }
  display(){
   if(this.body.speed<3){
     //to inherit properties of the parent class(the parent class is (BaseClass))
     super.display();
   }
   else{
     //to not leak the memory in the world we are making it disapear
     World.remove(world,this.body)
     push();
     //to reduce visibility
     this.Visibility = this.Visibility - 5
     //to make the pig disappear slowly
     tint(255,this.Visibility)
     //so that the tint function only applies on the pig and not on everything
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     pop();
    }
    
  }
};