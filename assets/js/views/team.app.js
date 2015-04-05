var team = team || {};

team.App = Backbone.View.extend({
	el: '#team',
	events: {
		'click .team-member' : 'popup'
	},
	popup: function(e) {
		console.log('Sup?');
	},
});

new team.App();

