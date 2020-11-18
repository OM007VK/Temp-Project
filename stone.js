class stone{

    constructor(posX,posY,R){
    var options= {restitution:.3,
                   friction:0, 
                   density:0.8}
    this.body=Bodies.circle(posX,posY,R/2,options);
    this.radius=R;
    World.add(world,this.body)
     }
    
     display(){
    
        var pos=this.body.position;
        push()
             translate(pos.x,pos.y)
             fill (100);
        pop()
     }
    }