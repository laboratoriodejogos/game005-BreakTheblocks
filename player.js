function Player(){
    this.x = width/2;
    this.y = height -20;
    this.w = 180;
    this.h = 20;
    this.v = 7;
  
    this.show = function(){
    rectMode(CENTER);
      fill(0,105,132);
      if(b.collision(player))
        fill(0,150,160)
    rect(this.x,this.y,this.w,this.h);  
    }
  
   this.move = function(){
   if(keyIsDown(RIGHT_ARROW) )
     this.x += this.v;
     else if(keyIsDown(LEFT_ARROW))
       this.x -= this.v;
     
    
     
     this.top = this.x - this.w/2;
     this.bottom = this.x + this.w/2;
     
   
   }
}