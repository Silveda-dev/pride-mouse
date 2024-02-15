let x = 0;
let y = 0;

addEventListener("mousemove", (event) => {
    x = event.offsetX;
    y = event.offsetY;
    console.log(x);
    console.log(y);
});