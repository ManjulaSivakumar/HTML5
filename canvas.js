var canvasref = document.getElementById("myfirstcanvas")

var ctx = canvasref.getContext("2d")

//draw the line
ctx.moveTo(0,0)
ctx.lineTo(300,300)
ctx.stroke()

//draw the text
ctx.font = "44px serif"
ctx.strokeText("Hello World" , 50 , 250)

//fill the rectangle
ctx.fillStyle = "rgba(200 , 0, 0 , 0.5)"
ctx.fillRect(50,50,100,100)


ctx.fillStyle = "rgba(0 , 200, 0 , 0.5)"
ctx.fillRect(75,75,100,150)


ctx.beginPath()
ctx.lineWidth = "2"
ctx.strokeStyle = "orange"
ctx.arc(100,150,50,0,2*Math.PI,false)
ctx.stroke()

window.requestAnimationFrame(animateText)

var x = 10;
var y = 10;

var animateText = function(){
    ctx.font="44px serif"
    ctx.strokeText("Hello Canvas", x, y)
    y++
    ctx.restore();
    window.requestAnimationFrame(animateText)
}