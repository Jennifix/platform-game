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
    y: canvasHeight - 30,
    width: 10,
    height: 30,
    speed: 2,
    velX: 0,
    velY: 0,
    friction: 0.8,
    gravity: 0.3,
    jumping: false
};

var keys = [];




function update() {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // creating arrow interactions
    //up
    if (keys[38]) {
        if (!player.jumping) {
            player.jumping = true;
            player.velY = -player.gravity*30;
        }
    }
    //right
    if (keys[39]) {
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    //left
    if (keys[37]) {
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= player.friction;

    player.velY += player.gravity;
    
    player.x += player.velX;
    player.y += player.velY;

    if (player.x >= canvasWidth - player.width) {
        player.x = canvasWidth - player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    if (player.y >= canvasHeight - player.height) {
        player.y = canvasHeight - player.height;
        player.jumping = false;}

    

    window.requestAnimationFrame(update);
};

window.addEventListener("load",function(){
    update();
});

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});