
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/sensor',
    'text!templates/app.html',
    'text!templates/header.html',
    'bootstrap'
], function($, _, Backbone, SensorCollection, template, HeaderTemplate, bootstrap){
    var AppView = Backbone.View.extend({
        el: '#app',

        header_template : _.template(HeaderTemplate),

        //Set up the bindings and such here
        initialize: function () {
            this.$el.append(this.header_template); //render header

            this.available_bricks = $('#available_bricks');
            console.log( $('#connect_form'));
            this.available_bricks.append(new Option('wooossw', 'value'));
            this.available_bricks.append(new Option('wooo2w', 'value'));
            this.available_bricks.append(new Option('wooo3w', 'value'));
            //TODO: jsonrpc, get available bricks and append them to the list

            this.collection = new SensorCollection();
            this.collection.add({ name: "EV3UltraSonic?"});
            this.collection.add({ name: "EV3Color"});
            this.json_ajax_request('/brick_manager', 'get_bricks').done(function(response){
                console.log(response);
            });  //review: test fail

        },
        events: {
            "submit #connect_form" : "subscribe_on_brick"

        },
        subscribe_on_brick: function(){
            console.log("WOOO?");
        },
        render: function(){
//            console.log(this.collection.models[0].toJSON());
//            var compiledTemplate = _.template( template, { sensors: this.collection.models } );
//            this.$el.html(compiledTemplate);
            return this; //Enable chained calls
        },

        json_ajax_request : function(object, method){
            var args = [].slice.apply(arguments);
            args = args.slice(2);

            var data = {
                'method' : method,
                'params' : args,
                'id' : 0
            };

             var request = {
                url: object,
                type: 'POST',
                contentType: "application/json",
                accepts: "application/json",
                cache: false,
                dataType: 'json',
                data: JSON.stringify(data)
            };
            return $.ajax(request);
        }

    });

    return AppView;
});
