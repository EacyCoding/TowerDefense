game.mapEntities =
{
    list: {},
    idCounter: 0,
    init: function(){},
    create: function(x,y,r,color)
    {
        var entity =
        {
            id: ++this.idCounter,
            x:x,
            y:y,
            r:r,
            color:color,
            update: function()
            {
                this.x++;
                this.y++;
            },
            draw: function()
            {
                game.drawCircle(this.x, this.y, this.r, this.color);
            },
        };
        this.list[entity.id] = entity;
        return entity;
    },
    update: function()
    {
        for(i in this.list) this.list[i].update();
    },
    draw: function()
    {
        for(i in this.list) this.list[i].draw();
    },
};
