define([
    'jquery',
    'underscore',
    'backbone',
    'views/appview'
], function($, _, Backbone, AppView){
    var LegoRouter = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute"
        }
    });
    var initialize = function(){
        var router = new LegoRouter;
        router.on('route:defaultRoute', function(actions){
            console.log('Route:', actions);
            var appView = new AppView();
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});