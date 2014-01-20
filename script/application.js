
//--------------
// Initializers
//--------------

var LegoApplication = LegoApplication || {};

LegoApplication.router = new LegoApplication.Router();

LegoApplication.Application = {
    run: function () {
        Backbone.history.start();
    }
};