var beta = beta || {};

var ENTER_KEY = 13

Backbone.sync = function(method, collection, options) {
        console.log(method, collection options)
}

var collection = new beta.Users();
new beta.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

