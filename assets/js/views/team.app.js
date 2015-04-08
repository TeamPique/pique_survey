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
		'click #team-nav-img'	 		: 'beta',
		'click #register-btn'  		: 'createOnClick',
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
  send: function() {
    ref.on("value", function(snapshot) {
      console.log('Firebase Collection', snapshot.val());
      }.bind(this), function (errorObject) {
          console.log("The read failed: " + errorObject.code);
    });
  },
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('slow').mouseleave(function() {
			$('.team-desc').fadeOut('slow');
		}); 
	},
});