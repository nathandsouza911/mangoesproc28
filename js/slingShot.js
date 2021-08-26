class slingShot  {
    constructor(bodyA,pointB){
        var options = {
            stiffness: 0.004,
            length: 1,
            bodyA:bodyA,
            pointB:pointB
        
        }
        this.pointB=pointB;
        this.sling=Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }

    }

    
}