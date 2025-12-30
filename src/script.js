import * as Geometry from './geometry.js'

const DEFAULT_CIRCLE_COLOR = 'green';
// TODO 
// add hold to spawn
// add physics
// collision

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let num_particles = 0;

ctx.fillStyle = DEFAULT_CIRCLE_COLOR;
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

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

function addRectangle(x, y) {
    rectangles.push(new Geometry.Rectangle(x, y));
}

function addParticle(x, y) {
    circles.push(new Geometry.Circle(x, y));
    num_particles++;
}

function removeParticle(x, y) {
    for (const [idx, circle] of circles.entries()) {
        if (circle.contains(x, y)) {
            console.log(`Removing particle at ${x}, ${y}`);
            circles.splice(idx, 1);
            num_particles--;
            return;
        }
    }
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
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

const spawn = (event) => {
    const rect = canvas.getBoundingClientRect();
    console.log(`rect: ${rect.right}, ${rect.left} `)
    const actualX = event.clientX - rect.left;
    const actualY = event.clientY - rect.top;
    addParticle(actualX, actualY);
    console.log(`Adding circle: (${actualX}, ${actualY})`);
    const np = document.getElementById("particle-count");
    np.innerText = `Number of Particles: ${num_particles}`;
}

canvas.addEventListener("mousedown", spawn);

function update() {
    for (let circle of circles) {
        circle.x += 1;
        circle.y += 1;
    }
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
