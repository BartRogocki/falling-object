let a;
function setup() {
    createCanvas(400, 400);
    background(0);
    a = new ball(0, 0, 2, 0);
    createSlider(0, 10, 1, 1);
}

function draw() {
    //background(0);
    translate(0, 400);
    fill(random(255),random(255),random(255));
    for(let i = 0;i < 400;i++){
    a.drawBall();
    
    }
}
function ball(x, y, a, b) {
    this.x = x;
    this.y = y;
    this.b = b;
    this.a = a;



    this.drawBall = function () {
        this.y = ((this.x * (-1 * this.a)) - this.b);
        console.log(this.y);
        ellipse(this.x, this.y, 20, 20);
        this.x++;
        if (this.y < -400 || this.x > 400) {
            this.y = 0;
            this.x = 0;
            this.a = random(0, 7);
        }
    };
}