var LegoApplication = LegoApplication || {};

LegoApplication.SensorCollection = Backbone.Collection.extend({
    model: LegoApplication.SensorModel,
    localStorage: new Store("sensor-mockups") //Todo: remove when there is a backend
//    url: "stops"
});