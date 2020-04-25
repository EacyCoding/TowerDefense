game.towers =
{
    create function(x,y)
    {
        var entity = game.mapEntities.create(x,y, 20, 'rgb(0,0,250)');
        entity.type = 'tower';
        entity.update = function(){};
        return entity;
    },
};
