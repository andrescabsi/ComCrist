// Models (datos)

var User = Backbone.Model.extend({
    defaults: {
        "name": "Andres Al"
    }
});
var user = new User();












// Views (Lo que el usuario ve)

var View = Backbone.View.extend({
    events:{
        "click button": "save"
    },
    save: function(){
        user.set('name',$('input').val());
    	var filePath = '/_System/apps/INNOV-comcristiano/_config/user.json';
        var file = BCAPI.Models.FileSystem.Root.file(filePath);
        file.upload(JSON.stringify(user));
    },
    initialize: function(){
    	this.render();
        this.listenTo(user,'change',this.render);
		var filePath = '/_System/apps/INNOV-comcristiano/_config/user.json';
        var file = BCAPI.Models.FileSystem.Root.file(filePath);
        file.download().done(function(content){
        	var userData = JSON.parse(content);
            user.set('name',userData.name);
        });
    },
    el: $('#container-body'),
    render: function(){
        var template = _.template($('#user-template').html(),user.toJSON());
        this.$el.html(template);
    }
});
var view = new View();







// Routers (pasa las url --> función)

var Router = Backbone.Router.extend({
    routes: {
    "h": "host",
    "p": "participant"
    },
    host: function(){
    	user.set('name','Andres Cabrera');
    },
    participant: function(){
    	user.set('name','Esteban Silva');
    }
});
var router = new Router();
Backbone.history.start();