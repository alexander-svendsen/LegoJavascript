define([
    'jquery',
    'underscore',
    'backbone',
    'views/appview'
], function($, _, Backbone, AppView){
    var LegoRouter = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute"
        },
        appView : null  // store the views in the route as to not reinitialize them when entering the same view
    });

    var initialize = function(){
        var router = new LegoRouter;
        router.on('route:defaultRoute', function(actions){
            console.log('Route:', actions);
            if (router.appView == null){
                router.appView = new AppView();
            }
            router.appView.render();
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});