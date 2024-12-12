
class MovingText {
constructor(x, y, speedX, speedY, textContent)
 {
this.x = x;
 this.y = y;
this.speedX = speedX;
this.speedY = speedY;
this.textContent = textContent;
    }

update() {
    this.x += this.speedX;
    this.y += this.speedY;

if (this.x > width || this.x < 0) {
            this.speedX *= -1;
        }
if (this.y > height || this.y < 0) {
            this.speedY *= -1;
        }
    }

display() {
let randomColor = random(colors);

textSize(32);
textAlign(CENTER, CENTER);
fill(...randomColor); 
text(this.textContent, this.x, this.y);
    }
}
