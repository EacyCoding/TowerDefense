var game =
{
    canvas: false,
    ctx: false,
    init: function()
    {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        game.enemies.create(10);
        game.towers.create(200,100);

        setInterval(game.update, 1000/30);

        window.requestAnimationFrame(game.draw);
    },
    update: function()
    {
        game.mapEntities.update();
    },
    draw: function()
    {
        game.ctx.clearRect(0,0,game.canvas.width, game.canvas.height)
        //game.drawCircle(100,100, 5, 'rgb(250,0,0)');
        //game.drawCircle(200,100, 20, 'rgb(0,0,250)');
        game.mapEntities.draw();

        window.requestAnimationFrame(game.draw);
    },
    drawCircle: function(x,y,r,color)
    {
        game.ctx.beginPath();
        game.ctx.arc(x,y,r,0,2*Math.PI);
        game.ctx.fillStyle = color;
        game.ctx.fill();
    },
};


