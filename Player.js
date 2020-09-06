class Player {
  constructor(x, y, width, height, input) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.input = input;

    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
  }

  get left() {
    return this.x - this.halfWidth;
  }

  get right() {
    return this.x + this.halfWidth;
  }

  get top() {
    return this.y - this.halfHeight;
  }

  get bottom() {
    return this.y + this.halfHeight;
  }

  update(w) {
    this.x = clamp(0 + this.halfWidth, this.input.x, w - this.halfWidth);
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.left, this.top, this.width, this.height);
  }
}
