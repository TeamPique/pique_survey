var beta = beta || {};

new beta.App();

new WOW(
    { offset: 120 }
).init();

$(function() {
	moment().format();

	 $('#clock').livestamp(new Date('April 22, 2015'));
});