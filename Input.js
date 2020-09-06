class Input {
  constructor(element) {
    this.x = 0;
    this.y = 0;

    element.addEventListener("pointermove", (event) => {
      this.x = event.offsetX;
      this.y = event.offsetY;
    });
  }
}
