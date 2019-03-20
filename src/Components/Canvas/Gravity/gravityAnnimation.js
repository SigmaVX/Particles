let canvas = null;
let c = null;

// Set Initial Canvas
export const setCanvas = (canvasImport, cImport) => {
    canvas = canvasImport;
    c = cImport;

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight - 40;
    canvas.style.background = "#eee";
}


// Global Vars
const colors = ['#FFF2C4', '#6000E8', '#5B83FF', '#4000E8', "#9800FF"];
let gravity = .8;
let friction = 0.80;
let sideFriction = 0.5;
let ball = null;
let ballsArray = [];

// Utilities
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

// Event Listeners
export const newDrop = () =>{
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight - 40;
    init()
}

// Objects
class Ball {
    constructor (x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = color;
        this.strokeIndex = randomIntFromRange(0, colors.length);
    
        this.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.strokeStyle = colors[this.strokeIndex];
            c.stroke();
            c.closePath()
        }

        this.update = function() {
            // Reverse DY Velocity If Bottom Reached
            // Bounce Back Slowed By Friction Var
            // DY Added To Prevent Crossing Height
            if(this.y + this.radius + this.dy > canvas.height){
                this.dy = -this.dy * friction;
            } else {
                // Accelerate Velocity As Dropping
                // Forces A Negative Value To Slow Upwards
                // Triggers DY Back To Downward As Neg Turns Pos
                this.dy += gravity;   
            }

            if((this.x + this.radius + this.dx > canvas.width) || (this.x - this.radius < 0)){
                this.dx = -this.dx;
            } 

            // Change X Once On Floor & Slow It Over Time
            if(Math.round(this.y + this.radius) === canvas.height){
                // console.log("hit");
                this.x += this.dx * sideFriction;
            }

            // Increment Velocity
            this.y += this.dy;
            this.draw()
        }
    }
}

// Implementation
export const init = () => {
    ballsArray = [];
    for (let i = 0; i < 100; i++) {
        let radius = randomIntFromRange(5, 20);
        // Deduct Radius To Prevent Spawn Into Bottom Of Screen
        let y = randomIntFromRange(-500, 0 - radius);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let dy = randomIntFromRange(-2, 2);
        let dx = randomIntFromRange(-2, 2);
        let colorIndex = randomIntFromRange(0, colors.length);
        ball = new Ball(x, y, dx, dy, radius, colors[colorIndex]);
        ballsArray.push(ball)
    }
}

// Animation Loop
export const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < ballsArray.length; i++){
        ballsArray[i].update();
    }
}
