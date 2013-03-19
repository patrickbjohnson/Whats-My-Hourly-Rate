$(document).ready(function() {
       	$("button").click(function () {
       	$('#result-value').empty();
		var userSalary = $('.salaryInput').val();
		var salary = userSalary.replace("$","").replace(",","");
		
		if(regIsNumber(userSalary)) { 
		
				/* run this part if userSalary is a number */
	  			
	       		var salValue = (parseInt(salary) / 52) / 40;
	       		var new_number = salValue.toFixed(2);
	       		$('#result-value').append(new_number);
	
				/* add some logic here to fadeOut if #result div is visible */
				
	       		$('#result p').fadeIn(1000).css({display: 'block'});
	
		} else { 
				
				/* if #result div is visible, hide it */
				if($('#result-value').is(':visible')) {
					document.getElementById('result').style.display = 'none';
				}
				
				/* clear textbox */ 
				$('.salaryInput').val(''); 
				
				/* show error message */
				$('#error-message').css({display: 'block'}) ;
				$('#error-message').fadeOut(3000);
				
		} /* end else */
       });
	});
	
	/* check for numbers */
	function regIsNumber(fData)	{
    		var reg = new RegExp("^[\$]?[-]?[0-9]+[\,]?[0-9]+(\.[0-9]{1,2})?$");
    		return reg.test(fData)
	}
