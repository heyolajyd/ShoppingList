// Shopping list function

$(document).ready(function() {

	// hide usertables
	// $('#userTables').hide();

	$("#userSelection").submit(function(event){



		$('#userSelection').validate();

		event.preventDefault();

		if ($.trim($('#item').val()).length < 3){
			// alert('Invalid Input! This field must be filled')
			$('#warning').append("<p>Seems You didn't input your stuff to shop</p>");
		}
		else{

		var userChoice = $('#item').val();

		// show usertables
		// $('#userTables').hide();

	   	$("#data").append("<tr>"+"<td>"+'<input type="checkbox" value="1" id="checkbox">Purchase</input>'+
	   		"</td>"+"<td>"+userChoice+ "</td>"+ "<td>"+'<button id="delete"><a>Remove</a></button>'+"</td>" + "</tr>");
   	}
  	 		userSelection.reset();
	});



	$("#userTables").on("change", "input[type=checkbox]", function(){
			if ($(this).is(':checked')){
				$(this).parent().parent().appendTo(".purchased");
			}
			else{
				$(this).parent().parent().appendTo(".selection");
			}
	});

	$("#userTables").on("click", "button", function(){
				
			var item = $(this).parent().next().text();
				$("#item").val(item);

			$(this).parent().parent().remove();

	});

});