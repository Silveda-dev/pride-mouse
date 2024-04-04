//Pride mouse trail code

//Initialising image
document.body.id = "bod";
var flag = document.createElement("img");
flag.src = "lesbian.svg";
flag.style.height = "36px";
flag.style.width = "24px";
flag.style.position = "absolute";

//Track mouse coordinates
document.addEventListener("mousemove", update_mouse);
var mouse_x, mouse_y;

function update_mouse(e) {       
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    console.log("Mouse position: ", mouse_x, mouse_y);
    flag.style.left = mouse_x + "px";
    flag.style.top = mouse_y + "px";
    document.getElementById("bod").appendChild(flag);
};