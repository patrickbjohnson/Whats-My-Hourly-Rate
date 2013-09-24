$(document).ready(function() {
	$('form').submit(function(e){
		e.preventDefault();
		var salary = $('.salary-input').val().replace(/[,$]/g, '');
		var salaryCalc = (parseInt(salary) / 52) / 40;
		var hourlyRate = salaryCalc.toFixed(2);
		
		if ($.isNumeric(salary)) {
			$('.error-message').css({ 'display' : 'none' })
			$('.hourly-rate').html(hourlyRate);
			$('.result').fadeIn(300);
		} else {
			if ($('.hourly-rate').is(':visible')) {
				$('.salary-input').val('');
				$('.result').css({ 'display' : 'none'});
			}
			$('.error-message').css({ 'display': 'block'});
		}
	});
});
