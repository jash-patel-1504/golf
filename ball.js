class ball{
constructor(x,y)
{
    var options={
        isStatic:true,
        restitution:0.4,
        friction:0,
        density:1.3
    }
    this.image=loadImage("golfball.png")
    this.body=Bodies.circle(x,y,50,options)
    World.add(world,this.body)
}
display(){
push() 
translate (this.body.position.x,this.body.position.y)
imageMode(CENTER)
image(this.image,0,0,50,30)
pop()
}


}