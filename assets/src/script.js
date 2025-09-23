import { someFunction } from './utils.js'
import * as Geometry from './geometry.js'

// TODO 
// - make particle class (replace sphere)
// - delete mechanic
// - click and hold t ospawn 
// - clean up the main script and organize
// - web gl, or pixi, or fuckin neithere honestly

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "green";

canvas.addEventListener('mousemove', (event) => {
    let log = document.getElementById("log");
    log.innerText = `
    Mouse X/Y Pos: = (${event.clientX}, ${event.clientY})
    `
});

let rectangles = [];
let circles = [];

function addRectangle(x,y) {
   rectangles.push(new Geometry.Rectangle(x,y)); 
}

function addCircle(x,y) {
    circles.push(new Geometry.Circle(x,y));
}

function renderRectangles() {
    for (let i = 0; i < rectangles.length; i++) {
        let rect = rectangles[i];
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
}

function renderCircles() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        ctx.arc(circle.x, circle.y, circle.radius, 0,180,false);
    }
}

canvas.onclick = (event) => {
    const rect =  canvas.getBoundingClientRect();
    console.log(`rect: ${rect.right}, ${rect.left} `)
    const actualX = event.clientX - rect.left;
    const actualY = event.clientY - rect.top;
        
    addCircle(actualX, actualY);
    console.log(`Adding circle: (${actualX}, ${actualY})`);
}

function update() {

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderCircles();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
