var beta = beta || {};

beta.App = Backbone.View.extend({
	el: '.wrapper',
	registerTpl: _.template($('#register-template').html()),
	initialize: function() {
		this.form();
	},
	events: {
		'click #register-btn' : 'create'
	},
	form: function() {
		$('#register-form').html(this.registerTpl());
		return this;
	},
	create: function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		console.log(email);
		this.collection.create({name: name, email: email});
	},
});



