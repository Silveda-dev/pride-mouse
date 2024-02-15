let x = 0;
let y = 0;
let flags = [];

addEventListener("mousemove", (event) => {
    x = event.offsetX;
    y = event.offsetY;
    console.log(x);
    console.log(y);
    spawnFlag(x,y);
});

function spawnFlag(mouse_x,mouse_y) {
    let flag = new Image(20,10);
    flag.src = "lesbian-48.svg";
    flag.top = 5 + mouse_y + "px";
    flag.left = 2 + mouse_x + "px";
    flags.push(flag);
    document.body.appendChild(flag);
}