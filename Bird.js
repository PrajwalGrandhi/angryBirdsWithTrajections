class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>300 && this.body.speed>5){
      var pos=[this.body.position.x,this.body.position.y]
    this.trajectory.push(pos);
    }
    for(var i=0;i<this.trajectory.length;i++){
   image(this.smoke,this.trajectory[i][0],this.trajectory[i][1],10,10);
    
    }
    super.display();
  }
}
