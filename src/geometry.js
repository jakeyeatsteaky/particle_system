
// Export a class
export class Sphere {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    this.x += 1;
    this.y += 1;
  }
}

export class Rectangle {
  static WIDTH = 50;
  static HEIGHT = 30;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = Rectangle.WIDTH;
    this.height = Rectangle.HEIGHT;
  }
}

export class Circle {
  static RADIUS = 10;

  constructor(centerX, centerY) {
    this.x = centerX;
    this.y = centerY;
    this.radius = Circle.RADIUS;
  };

  contains(x, y) {
    const dx = x - this.x;
    const dy = y - this.y;
    return Math.hypot(dx, dy) <= this.radius;
  }
}