// Program to compute and display the side length of a cube with volume 1000 mm³

const volume: number = 1000;
const side: number = Math.cbrt(volume);
const sideDisplay = Number.isInteger(side) ? side.toString() : side.toFixed(2);

console.log(`The length and width and height of a cube with a volume of ${volume} mm³ is ${sideDisplay} mm.`);
console.log("Done.");