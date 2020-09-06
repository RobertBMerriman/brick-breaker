class Ball {
  constructor(x, y, xVel, yVel) {
    this.radius = 10;
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
  }

  get left() {
    return this.x - this.radius;
  }

  get right() {
    return this.x + this.radius;
  }

  get top() {
    return this.y - this.radius;
  }

  get bottom() {
    return this.y + this.radius;
  }

  update(w, h, player) {
    if (this.left < 0 || this.right > w) {
      this.xVel = -this.xVel;
    }
    if (this.top < 0 || this.bottom > h) {
      this.yVel = -this.yVel;
    }

    if (this.right > player.left && this.left < player.right && this.bottom > player.top && this.top < player.bottom) {
      this.yVel = -this.yVel;
    }

    this.x += this.xVel;
    this.y += this.yVel;
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}
