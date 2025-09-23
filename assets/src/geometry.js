
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
  static RADIUS = 50;

  constructor(centerX, centerY) {
    this.x = centerX;
    this.y = centerY;
    this.radius = Circle.RADIUS;
  }
}