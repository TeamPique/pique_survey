var App = Backbone.View.extend({
	el: '#header',
	registerTemplate: _.template($('#register-template').html()),
	initialize: function() {
		this.form();
	},
	form: function() {
		$('#view').empty();
		this.$el.html(this.registerTemplate());
		return this;
	},
});