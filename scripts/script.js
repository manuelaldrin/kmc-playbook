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

		$("#playbook-submit").click(function(){
			
			//Get value
			var playbookinput = $('#playbook-input').val();
			if(playbookinput == "KMCLEGENDARYDECADE"){
				location.href = "playbook-page-3.html";
			} else {
				alert('Invalid Code');
			}

			
		});
	});

	$(window).load(function () { 

	});

	$(window).resize(function () { 

	});
	
})(jQuery);


