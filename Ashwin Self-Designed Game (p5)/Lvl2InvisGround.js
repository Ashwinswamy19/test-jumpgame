class Lvl2InvisGround{
    constructor(x,y,w,h)
    {
      this.xposition=x;    
      this.yPosition=y;
      this.width=w;
      this.height=h;
      this.invisground = createSprite(this.xposition,this.yPosition+15,this.width,this.height) 
      this.invisground.visible = false;
      this.shapeColor = "#f4cbaa";
      itemGroup.add(this.invisground);
    }  
    display()
    {
      player.collide(this.invisground);
    }  
    
  }
  