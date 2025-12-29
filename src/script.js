import * as Geometry from './geometry.js'

const DEFAULT_CIRCLE_COLOR = 'green';
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

const colorWheelEvent = (event) => {
    console.log("test", event.target.value);
    canvas.style.background = event.target.value;
}

const colorWheel = document.getElementById('colorwheel');
colorWheel.addEventListener('input', colorWheelEvent);

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
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2, false);
        ctx.fillStyle = DEFAULT_CIRCLE_COLOR;
        ctx.fill();
        ctx.closePath();
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
