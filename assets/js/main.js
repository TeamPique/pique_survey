var beta = beta || {};

var ENTER_KEY = 13
var FIREBASE_URL  = new Firebase('https://pique.firebaseio.com');

var collection = new beta.Users();
new beta.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

