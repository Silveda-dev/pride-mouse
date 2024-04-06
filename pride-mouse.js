//Pride mouse trail code
var mouse_x = 0, mouse_y = 0;
document.addEventListener("mousemove", update_mouse);

function update_mouse(e) {       
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    update_flags();
};

//Defining flag as an object
class Flag {
    constructor() {
        this.src = "lesbian.svg";
        this.x_pos = mouse_x - 10;
        this.y_pos = mouse_y - 10;
        this.flaggy;
        this.height = "24px";
        this.width = "36px";
        this.print();
        console.log(this.x_pos, this.y_pos);
    };
    print() {
        this.flaggy = document.createElement("img");
        this.flaggy.src = this.src;
        this.flaggy.style.height = this.height;
        this.flaggy.style.width = this.width;
        this.flaggy.style.position = "absolute";
        this.flaggy.style.left = this.x_pos + "px";
        this.flaggy.style.top = this.y_pos + "px";
        document.getElementsByTagName("body")[0].appendChild(this.flaggy); 
    }
    update() {
        this.x_pos += ((mouse_x - 10 - this.x_pos)/5);
        this.y_pos += ((mouse_y - 10 - this.y_pos)/5);
        this.flaggy.parentNode.removeChild(this.flaggy);
        this.print();
    }
};


flag_list = [];

function update_flags() {
    console.log(flag_list.length);
    if (flag_list.length < 5) {
        flag_list.push(new Flag);
    } else {
        console.log(flag_list[0].flaggy);
        flag_list[0].flaggy.parentNode.removeChild(flag_list[0].flaggy);
        flag_list.splice(0,1);
    }
    for (let i = 0; i < flag_list.length; i++) {
        flag_list[i].update();
    };
}
