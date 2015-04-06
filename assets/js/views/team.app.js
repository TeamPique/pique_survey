var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	registerTpl: _.template($('#register-template').html()),
	modalTpl: _.template($('#modal-template').html()),
	initialize: function() {
		this.form();
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' 		 		: 'popup',
		'click #team-beta-btn' 		: 'beta',
		'click #team-logo'		 		: 'beta',
		'click #register-btn'  		: 'create',
		'keypress .register-form' : 'createOnEnter'
	},
	beta: function(e) {
		e.preventDefault();
		$('#team').hide();
		$('body').css('background', 'url(assets/img/bg2.jpg)');
		new beta.App()
		$('#beta').show();
	},
	form: function() {
		$('#team-register-form').html(this.registerTpl());
		$('#team-footer').append('<p class="title footer">Proudly made in NYC</p>');
		return this;
	},
	modal: function() {
    $('#team-thanks').html(this.modalTpl());
    return this;
  },
	create: function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		this.collection.create({name: name, email: email});
    this.modal();
	},
  createOnEnter: function(e) {
    if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
      return;
    }
    var name = $('#name').val();
    var email = $('#email').val();
    console.log(email);
    this.collection.create({name: name, email: email});
    this.modal();
  },
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('slow').mouseleave(function() {
			$('.team-desc').fadeOut('slow');
		}); 
	},
});