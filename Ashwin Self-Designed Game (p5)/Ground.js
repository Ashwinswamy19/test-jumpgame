class Ground{
    constructor(x,y,w,h)
    {
      this.xposition=x;    
      this.yPosition=y;
      this.width=w;
      this.height=h;
      this.ground = createSprite(this.xposition,this.yPosition,this.width,this.height) 
      this.image = loadImage("dark_wood_long.png");
      this.ground.addImage(this.image);
      itemGroup.add(this.ground);
    }  
    display()
    {
    }  
    
  }
  