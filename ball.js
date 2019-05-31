function Ball(){
   this.x = width / 3;
   this.y = height / 2 + 160;
  this.radius = 20;
  this.vx = 6;
  this.vy = 4;
  
  this.show = function(){
    fill(255);
  ellipse(this.x,this.y,this.radius,this.radius);
  }  
    this.move = function(){
    this.x += this.vx;
    this.y += this.vy; 
    if(this.x > width || this.x < 0)
      this.vx = -this.vx;
    if(this.y > height)
      this.y = height/2 + 0;
    if(this.y > 599)
      playerScore = playerScore - 1;
      
      
    
      
      
    
    }
  
  this.collision = function(e){
   if(this.y <= e.y + e.h/2 && this.y >= e.y - e.h/2)
     if(this.x >= e.top && this .x <= e.bottom)
    return true;
    return false;
  }
  
  
  
}

