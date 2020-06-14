class chain{

constructor(bodyA,bodyB){
 var options = {
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.04,
     legnth:10

 }   
this.chain=Matter.Constraint.create (options)
World.add(world,this.chain)




}
display(){
    var pointB=this.chain.bodyB.position
    var pointA=this .chain.bodyA.position
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}



}
