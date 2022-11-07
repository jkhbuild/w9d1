function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

module.exports = MovingObject;

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  // take data from movingobject invoked upon
  // make drawing on ctx
};
