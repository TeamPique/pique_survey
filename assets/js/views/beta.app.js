var beta = beta || {};

beta.App = Backbone.View.extend({
	el: '.wrapper',
	registerTpl: _.template($('#register-template').html()),
	initialize: function() {
		this.form();
	},
	form: function() {
		$('#register-form').html(this.registerTpl());
		return this;
	},
});