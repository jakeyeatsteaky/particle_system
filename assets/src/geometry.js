
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
  
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}


export function addRectangle(rectangles, x, y) {
   rectangles.push(new Rectangle(x,y)); 
}

export function addCircle(circles, x,y) {
    circles.push(new Circle(x,y));
}

export function renderRectangles() {
    for (let i = 0; i < rectangles.length; i++) {
        let rect = rectangles[i];
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
}

