var AppBody = Backbone.View.extend({
	el: '#view',
	surveyTemplate: _.template($('#survey-body-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.surveyTemplate());
		return this;
	},
});