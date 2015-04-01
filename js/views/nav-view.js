var NavView = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		var home = new Home();
		this.render();
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
});