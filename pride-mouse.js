let x = 0;
let y = 0;
let flags = [];

addEventListener("mousemove", (event) => {
    x = event.offsetX;
    y = event.offsetY;
    console.log(x);
    console.log(y);
    spawnFlag(x,y);
    deleteFlags(flags);
});

function spawnFlag(mouse_x,mouse_y) {
    let i = flags.length
    let flag = new Image(20,10);
    flag.src = "lesbian-48.svg";
    flag.top = 5 + mouse_y + "px";
    flag.left = 2 + mouse_x + "px";
    console.log(flag.top);
    console.log(flag.left);
    flags.push(flag);
    document.body.appendChild(flag);
    console.log(flags);
};

function deleteFlags(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i].top < (y - 10) || flags[i].top > (y + 10)) {
            flags[i].remove();
            console.log("Removed!");
        } else if (flags[i].left < (x - 10) || flags[i].left > (x + 10)) {
            flags[i].remove();
            console.log("Removed!");
        }
    }
}