/**
 * 
 */

let obj = {
    this: "might",
    not: {
        be: "a",
        very: "complex"
    },
    object: "but",
    I: "am",
    trying: 42
};

console.log(obj);
console.log(JSON.stringify(obj));

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Particle System Prototype</title>
  <style>
    canvas { background: #8d29da; display: block; margin: 0 auto; }
  </style>
</head>
<body>
<canvas id="canvas" width="800" height="600"></canvas>
<p id="log"></p>
<script type="module" src="src/script.js"></script>
</body>
</html>
`;

console.log(JSON.toJSON(html));