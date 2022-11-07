function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

module.exports = MovingObject;

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
  // take data from movingobject invoked upon
  // make drawing on ctx
};

MovingObject.prototype.move = function (ctx) {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};
