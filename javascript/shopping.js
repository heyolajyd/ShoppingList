// Shopping list function


var shoppingManager= {

	onInit: function() {
				
				$('#add').click(shoppingManager.addToCart);
				$('#userTables').on("change", "input[type='checkbox']", shoppingManager.checkItem);
				$('#userTables').on("click", "button", shoppingManager.removeItem);
			},

	// verify user input
	validateInput: function() {

				if(shoppingItem.length > 0 && shoppingItem !==" ")
					{
						return true;
					}
				else{
						return false;
					}
			},

	// Accept input and append it to the body of my table
		addToCart: function(){
					shoppingItem = $('#item').val();
					rowElement = "<tr>";
					cell1= "<td>"+'<input type="checkbox" value="1" id="checkbox">Purchase</input>'+"</td>";
					cell2 = "<td>"+shoppingItem+ "</td>";
					cell3 = "<td>"+'<button id="delete">Remove</button>'+"</td>";

					// confirm if user imput is valid
						if(shoppingManager.validateInput()){
							$('#data').append(rowElement+cell1+cell2+cell3+"</tr>");
							$('#item').val("");
							$("#warning").text("");
						}
						else{
							$("#warning").text("Seems you didn't type in your desired item")
						}
			},

	//Handle checkbox in the event of checking and unchecking on usertables
		checkItem: function(event){
					if ($(this).is(':checked')){
							$(this).parent().parent().appendTo(".purchased");
					}
					else{
							$(this).parent().parent().appendTo(".selection");
					}
			},

		removeItem: function(event){

					var item = $(this).parent().next().text();
					$("#item").val(item);

					$(this).parent().parent().remove();
			},

}


/*********************************************************
					Action Delegation
**********************************************************/
//resets the list
$(document).ready(shoppingManager.onInit);

//prevents enter key from submitting form before user input is passed to handler
$("#item").keypress(function(event){
	if (event.which==13)
	{
		event.preventDefault();
		shoppingManager.addToCart();
	}
});


	