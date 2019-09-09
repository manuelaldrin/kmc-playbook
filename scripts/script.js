( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		}

	} 

	$(document).ready( function() {
		app.init();
	});

	$(window).load(function () { 
		app.contactFormPlaceholderFunction();
	});

	$(window).resize(function () { 

	});
	
})(jQuery);


