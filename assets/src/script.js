import { getCurrentMousePosition } from './utils.js'
import * as Geometry from './geometry.js'

// TODO 
// - delete mechanic
// - physics on objects
// - click and hold to spawn 
// - clean up the main script and organize
// - web gl, or pixi, or fuckin neithere honestly

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "green";

let mouseX, mouseY;

canvas.addEventListener('mousemove', (event) => {
    let log = document.getElementById("log");
    log.innerText = `
    Mouse X/Y Pos: = (${event.clientX}, ${event.clientY})`
    mouseX = event.clientX;
    mouseY = event.clientY;
});

let circles = [];

canvas.onclick = (event) => {
    const rect =  canvas.getBoundingClientRect();
    console.log(`rect: ${rect.right}, ${rect.left} `)
    const actualX = event.clientX - rect.left;
    const actualY = event.clientY - rect.top;
        
    Geometry.addCircle(circles, actualX, actualY);
    console.log(`Adding circle: (${actualX}, ${actualY}) #${circles.length}`);
}

canvas.onauxclick = (event) => {
    let ret = checkCircleLocations(circles, mouseX, mouseY);
    if (ret !== -1) {
        circles.remove[ret];
    }
}

function update() {

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < circles.length; i++) {
        circles[i].render(ctx)
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
