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
  validate: function(email) {
    var regEx = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return regEx.test(email);
  },
  create: function() {
    var name = $('#name').val();
    var email = $('#email').val();

    if (email !== "") {
      if (!this.validate(email)) {
        $('#email-error').text('Please enter a valid email address');
        $('#email-error').css({color: 'red'});
        $('#email').focus();
        return false;  
      }
    } 

    this.collection.create({
        name: name,
        email: email
      });

    this.modal()
    
  },
	createOnClick: function(e) {
		e.preventDefault();
    this.create();
	},
  createOnEnter: function(e) {
    if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
      return;
    }
    this.create();
  },
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('slow').mouseleave(function() {
			$('.team-desc').fadeOut('slow');
		}); 
	},
});