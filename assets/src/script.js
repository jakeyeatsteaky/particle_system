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

let s = new Geometry.Sphere(10,10);
let ss = someFunction();

ctx.fillStyle = "green";
const GLOBAL_RECT_WIDTH = 50;
const GLOBAL_RECT_HEIGHT = 30;

canvas.addEventListener('mousemove', (event) => {
    let log = document.getElementById("log");
    log.innerText = `
    Mouse X/Y Pos: = (${event.clientX}, ${event.clientY})
    `
});



let rectangles = [];

function addRectangle(x,y) {
   rectangles.push(new Geometry.Rectangle(x,y)); 
}

function renderRectangles() {
    for (let i = 0; i < rectangles.length; i++) {
        let rect = rectangles[i];
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
}

canvas.onclick = (event) => {
    const rect =  canvas.getBoundingClientRect();
    console.log(`rect: ${rect.right}, ${rect.left} `)
    const actualX = event.clientX - rect.left;
    const actualY = event.clientY - rect.top;
    addRectangle(actualX, actualY);
    console.log(`Adding rect: (${actualX}, ${actualY})`);
}

function update() {

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderRectangles();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
