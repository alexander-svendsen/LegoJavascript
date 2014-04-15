
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/sensor',
    'text!templates/app.html',
    'bootstrap'
], function($, _, Backbone, SensorCollection, template, bootstrap){
    var AppView = Backbone.View.extend({
        el: '#app',

        //Set up the bindings and such here
        initialize: function () {
//            LegoApplication.sensorCollection = new LegoApplication.SensorCollection();
//            LegoApplication.sensorCollection.on('add', this.addOne, this);
//            LegoApplication.sensorCollection.on('reset', this.addAll, this);
//            LegoApplication.sensorCollection.fetch(); // Loads data from the server
            this.collection = new SensorCollection();
            this.collection.add({ name: "EV3UltraSonic?"});
            this.collection.add({ name: "EV3Color"});
            this.render();
        },
        events: {

        },
        render: function(){
            console.log(this.collection.models[0].toJSON());
            var compiledTemplate = _.template( template, { sensors: this.collection.models } );
            this.$el.html(compiledTemplate);
            return this; //Enable chained calls
        }
    });

    return AppView;
});
