var NavView = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		home = new Home();
		this.render();
	},
	events: {
		'click #survey' 	: 'renderSurvey',
		'click #register' : 'renderRegister'
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	renderSurvey: function(e) {
		e.preventDefault();
		home.survey();
	}
});