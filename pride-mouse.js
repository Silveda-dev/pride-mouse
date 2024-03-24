let x = 0;
let y = 0;
let flags = [];

addEventListener("mousemove", (event) => {
    deleteFlags();
    x = event.offsetX;
    y = event.offsetY;
    console.log(x);
    console.log(y);
    spawnFlag(x,y);
});

function spawnFlag(mouse_x,mouse_y) {
    let flag = new Image(20,10);
    flag.src = "lesbian-48.svg";
    flag.style.top = 5 + mouse_y + "px";
    flag.style.left = 2 + mouse_x + "px";
    console.log(flag.top);
    console.log(flag.left);
    flags.push(flag);
    document.body.appendChild(flag);
    console.log(flags);
};

function deleteFlags() {
    if (flags.length > 2) {
        console.log(flags[0]);
        document.body.removeChild(flags[0]);
        flags.slice(1);
    }
}