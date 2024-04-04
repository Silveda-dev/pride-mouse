//Pride mouse trail code

//Testing tracking mouse coordinates

document.onmousemove = (event) => {
    const {
        clientX,
        clientY
    } = event;
    console.log("Mouse position: ", clientX, clientY);
};