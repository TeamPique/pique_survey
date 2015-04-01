var Home = Backbone.View.extend({
	el: '#header',
	surveyHeaderTemplate: _.template($('#survey-header-template').html()),
	registerTemplate: _.template($('#register-template').html()),
	initialize: function() {
		this.register();
	},
	survey: function() {
		this.$el.html(this.surveyTemplate());
		return this;
	},
	register: function() {
		this.$el.html(this.registerTemplate());
		return this;
	},
});