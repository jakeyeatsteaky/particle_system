const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasStyle = getComputedStyle(canvas);

ctx.fillStyle = "green";
const GLOBAL_RECT_WIDTH = 50;
const GLOBAL_RECT_HEIGHT = 30;

let mouseEvent = new MouseEvent("click");


canvas.addEventListener('mousemove', (event) => {
    let log = document.getElementById("log");
    log.innerText = `
    Mouse X/Y Pos: = (${event.clientX}, ${event.clientY})
    `
});

class Rectangle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = GLOBAL_RECT_WIDTH;
        this.height = GLOBAL_RECT_HEIGHT;
    }
}

let rectangles = [];

function addRectangle(x,y) {
   rectangles.push(new Rectangle(x,y)); 
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
