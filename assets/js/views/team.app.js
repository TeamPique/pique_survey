var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	modalElem: $('#modal-success'),
	initialize: function() {
		this.render();
		this.form();
	},
	events: {
		'click .team-nav'	 				: 'beta',
		'click #register-btn'  		: 'createOnClick',
		'keypress .register-form' : 'createOnEnter',
		'click .team-arrow-anchor': 'scroll'
	},
	render: function() {
    this.$el.html(this.teamTpl());
    this.form();
    return this;
  },
	beta: function(e) {
		router.navigate('', {trigger: true});
	},
	form: function() {
		$('#team-register-form').html(this.registerTpl());
		$('#team-footer').append('<p class="title footer">Proudly made in NYC</p>');
		return this;
	},
	scroll: function() {
		$.fn.fullpage.moveSectionDown()
	},
});