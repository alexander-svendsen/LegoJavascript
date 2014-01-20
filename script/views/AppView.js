var LegoApplication = LegoApplication || {};

LegoApplication.AppView = Backbone.View.extend({
    el: '#app',

    //Set up the bindings and such here
    initialize: function () {
        LegoApplication.sensorCollection = new LegoApplication.SensorCollection();
        LegoApplication.sensorCollection.on('add', this.addOne, this);
        LegoApplication.sensorCollection.on('reset', this.addAll, this);
        LegoApplication.sensorCollection.fetch(); // Loads data from the server
        this.render();
    },
    events: {

    },
    render: function(){
        this.$el.html("No Lego robots connected");
        return this; //Enable chained calls
    },

    addOne: function(todo){

    },
    addAll: function(){
        console.log("WOOOT trigger event happened");
    }
});

