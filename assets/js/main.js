var beta = beta || {};

var ENTER_KEY = 13

Backbone.sync = function(method, collection, options) {
        console.log(options)
        console.log(collection)
}

var collection = new beta.Users();
new beta.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

