

(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

// Canvas & context

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var canvasWidth = 1000;
var canvasHeight = 460;

var player = {
    x: canvasWidth - 990,
    y: canvasHeight - 150,
    width: 10,
    height: 30,
    speed: 3,
    friction: 1,
    velX: 0,
    velY: 0,
};

function draw(x, y, width, height, color) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height,);
    
}

function update() { 
    draw(player.x, player.y, player.width, player.height, "red");

    for (var i = 0; i < platforms.length; i++) {
        ctx.fillStyle = "white";
        ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height,);
    }
    
    window.addEventListener("keydown", downKey);
    window.addEventListener("keyup", upKey);
    //Checking keys and adding movement to player
    function downKey(e){
        //right arrow
        if (e.keyCode == "39") {
            if (player.velX < 5) { 
                player.velX += 0.5;
            }
        }
        //up arrow 
        if (e.keyCode == "38") {

        }
        //left arrow
        if (e.keyCode == "37") {
            if (player.velX > -5) { 
                player.velX -= 0.5;
            }
        }

    }

    function upKey(e) {
        //right arrow
        if (e.keyCode == "39"){
            if (player.velX > 0) {
                player.velX -= 0.5;
            }
        }
        //up arrow
        if (e.keyCode == "38") {

        }
        //left arrow
        if (e.keyCode == "37") {
            if (player.velX < 0) {
                player.velX += 0.5;
            }
        }
    }
    
    player.x += player.velX;
        player.velX * 0.9;
        
    requestAnimationFrame(update);
}

requestAnimationFrame(update);

