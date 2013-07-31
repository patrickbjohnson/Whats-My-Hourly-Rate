$(document).ready(function() {
				
	// hide all responses on load
	// $('.responses').hide();
	// empty out the val input 
	$('span.hourly-rate').empty();

	


	// form submittal and validation
	$('form').submit(function(e){
		e.preventDefault();

		// set variables for salary input
		var userSalary = $('.salary-input').val();
		var salary = userSalary.replace('$','').replace(',','');

		$('input').find('salary-input').empty();


		if (regNum(userSalary)) {
			var salaryValue = (parseInt(salary) / 52 ) / 40;
			var newNumber = salaryValue.toFixed(2);

			$('.hourly-rate').html(newNumber);
			$('.result').fadeIn(500);
		} else {
			if ( $('.hourly-rate').is(':visible')) {
				$('.result').css("display", "none");
			}

			$('.salary-input').val('');
			$('.error-message').css({"display":"block"}).fadeOut(2200);
		}

	}); 

	// strips $ and commas from user salary input 

	function regNum(fData)	{
    		var reg = new RegExp("^[\$]?[-]?[0-9]+[\,]?[0-9]+(\.[0-9]{1,2})?$");
    		return reg.test(fData)
	}


});
	
