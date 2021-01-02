class Box{
  constructor(x,y,width,height){
      var options = {
          restitution:0.8,
          friction:1
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      this.color = Math.round(random(0,255))
      this.color1 = Math.round(random(0,255))
      this.color2 = Math.round(random(0,255))
      World.add(world,this.body)
  }
     display(){
         var angle = this.body.angle;
         if(this.body.speed>7){
            
         
             World.remove(world,this.body)
             push();
             this.Visibility = this.Visibility-5
             tint(255,this.Visibility)
             pop();
         }
         
         else{
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         rectMode(CENTER)
        
         //fill(this.color,this.color1,this.color2)
         rect(0,0,this.width,this.height)
         pop();
         }
     }
}