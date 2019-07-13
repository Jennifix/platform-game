var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var player = {
    x: 0,
    y: 0,
    width: 10,
    height: 30
};

var platforms = [];

ctx.fillStyle = "red";
ctx.fillRect(player.x, player.y, player.width, player.height);

function update() {

    for (i = player.y; i < 460; i++) {
        player.y++;
    }
    

    requestAnimationFrame(update);
};

update();