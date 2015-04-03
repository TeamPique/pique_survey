var beta = beta || {};
var collection = new beta.Users();

new beta.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

$(function() {
	moment().format();

	 $('#clock').livestamp(new Date('April 22, 2015'));
});


