class Like {
  constructor(props) {
    const { x = 0, y = 0, color, remove } = props;

    this.x = x;
    this.y = y;
    this.r = 0.3;
    this.velX = Math.random() > 0.5 ? -(Math.random()) : Math.random();
    this.velY = Math.ceil(Math.random() * 6) + 1;
    this.accX = 0.02;
    this.accY = 0.01;
    this.color = color;
    this.remove = remove;
  }

  update() {
    if (this.velX > 1 || this.velX < -1) {
      this.accX = -this.accX;
    }

    // if (this.velY > 3 || this.velY < -3) {
    //   this.accY = -this.accY;
    // }
    // this.velY += this.accY;
    this.velX += this.accX;
    

    this.x += this.velX;
    this.y -= this.velY;
  }

  draw() {
    this.update();

    ctx.save();
    ctx.beginPath();
    // draw heart
    this.drawHeart();
    //
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  checkBound() {
    if (this.y < 0) {
      return true;
    }
  }

  drawHeart() {
    ctx.moveTo(this.x, this.y);
    for (let a = 0; a < Math.PI * 2; a+=0.01) {
      const x = this.r * 16 * Math.pow(Math.sin(a), 3);
      const y = -1 * this.r * (13 * Math.cos(a) - 5 * Math.cos(2*a) - 2 * Math.cos(3*a) - Math.cos(4*a));
      ctx.lineTo(this.x + x, this.y + y);
    }
  }
  get name() {
    return 'I am a Like';
  }
}