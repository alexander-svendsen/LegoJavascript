var LegoApplication = LegoApplication || {};

LegoApplication.Router = Backbone.Router.extend({
    routes: {
        '*filter' : 'setFilter'
    },
    AppView: null,
    setFilter: function(params) {
        if (this.AppView == null){
            this.AppView = new LegoApplication.AppView();
        }
        console.log('app.router.params = ' + params);
        if (params == null){
            window.filter = '';
        }
        else{
            window.filter = params.trim() || '';  //strangly enough this gives me an error if params is null
        }
        LegoApplication.sensorCollection.trigger('reset');
    }
});