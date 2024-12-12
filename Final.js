let colors = [
[255, 0, 0],
[0, 255, 0],  
[0, 0, 255],  
[255, 255, 0], 
[255, 0, 255]  
];

let movingText;

function setup() {
createCanvas(400, 400); 
background(0); 
 movingText = new MovingText(200, 200, 3, 2, "this is my final"); 
}

function draw() {
movingText.update();  
movingText.display();
}
