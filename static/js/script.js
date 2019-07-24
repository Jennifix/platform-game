

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
    speed: 2,
    velX: 0,
    velY: 0,
};

function draw(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height,);
}

function update() { 
    draw(player.x, player.y, player.width, player.height, "red");

    for (var i = 0; i < platforms.length; i++) {
        draw(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height, "white");
        }
    

    requestAnimationFrame(update);
}

update();

