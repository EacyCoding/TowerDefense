game.enemies =
{
    create: function(level)
    {
        var entity = game.mapEntities.create(0,0,level, 'rgb(205,0,0)');
        entity.type = 'enemy';
        entity.speed = 1;
        entity.level = level;
        entity.velocity = {x:entity.speed, y:entity.speed};
        entity.update = function()
        {
            this.x += entity.velocity.x;
            this.y += entity.velocity.y;
        }
    },
};