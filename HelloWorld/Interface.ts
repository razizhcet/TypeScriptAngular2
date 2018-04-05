interface RectangleOptions{
    width: number;
    length: number;
    height?: number;     //optional
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
    if(options.height){
        let height = options.height;
        // Draw a 3D rectangle
    }

    // Draw logic
}

drawRectangle({
    width: 100,
    length: 50,
    //height: 40
});