//Pride mouse trail code
document.body.id = "bod";
var mouse_x = 0, mouse_y = 0;
document.addEventListener("mousemove", update_mouse);

function update_mouse(e) {       
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    tester.update();
};

//Defining flag as an object
class Flag {
    constructor() {
        this.src = "lesbian.svg";
        this.x_pos = mouse_x - 10;
        this.y_pos = mouse_y - 10;
        this.i = 0;
        this.flaggy;
        this.height = "24px";
        this.width = "36px";
        this.print();
        console.log(this.x_pos, this.y_pos);
    };
    update() {
        this.x_pos = this.x_pos + (mouse_x - this.x_pos)/2;
        this.y_pos = this.y_pos + (mouse_y - this.y_pos)/2;
        console.log(this.x_pos, this.y_pos);
        this.i++;
        this.print();
    };
    print() {
        this.flaggy = document.createElement("img");
        this.flaggy.src = this.src;
        this.flaggy.style.height = this.height;
        this.flaggy.style.width = this.width;
        this.flaggy.style.position = "absolute";
        this.flaggy.style.left = this.x_pos + "px";
        this.flaggy.style.top = this.y_pos + "px";
        document.getElementById("bod").appendChild(this.flaggy); 
    }
};

tester = new Flag();