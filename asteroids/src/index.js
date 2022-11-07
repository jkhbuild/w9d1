console.log("Webpackin'");

const MovingObject = require("./moving_object");
window.MovingObject = MovingObject;

const canvasEl = document.getElementById("canvas");
canvasEl.width = 500;
canvasEl.height = 500;

const ctx = canvasEl.getContent("2d");

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00",
});

// mo.draw(ctx);

// create moving object instance
// invoke draw method - pass ctx as argument

// ctx.fillRect(0,0,500,500);

// ctx.beginPath();
// ctx.strokeStyle = "white";
// ctx.lineWidth = 30; // pixels
// ctx.arc(250,250,80,0,2*Math.PI,true;);
//   begin in center of canvas, r = 80;
// ctx.stroke();
// ctx.fillStyle = "blue";
// ctx.fill();
