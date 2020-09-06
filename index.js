DEBUG = true;

const game = () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  const input = new Input(canvas);

  const player = new Player(w / 2, h * 0.9, 80, 20, input);
  const ball = new Ball(w / 2, h / 2, randomInt(-3, 3), randomInt(-3, 3));

  const update = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);

    if (DEBUG) {
      ctx.fillStyle = "white";
      ctx.fillText(`X: ${input.x}`, 5, 10);
      ctx.fillText(`Y: ${input.y}`, 5, 20);
      ctx.fillRect(input.x, 0, 1, h);
      ctx.fillRect(0, input.y, w, 1);
      ctx.strokeStyle = "red";
      ctx.strokeRect(input.x - 6, input.y - 6, 13, 13);
    }

    ball.update(w, h, player);
    ball.draw(ctx);

    player.update(w);
    player.draw(ctx);

    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

game();
