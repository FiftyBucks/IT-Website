/* External javascript for alert Message */

function validateForm() {                                                  /* calling the function */
	var first_name = document.forms["contact_form"]["first_name"].value;   /*  Fetching the value */
	var email = document.forms["contact_form"]["Email"].value;
    var phone = document.forms["contact_form"]["Phone"].value;
	var message = document.forms["contact_form"]["Message"].value;
    
	if (first_name == "" || email == "" || message == "" || phone == "" ){   /* Using The if else conditional statements */

		alert("Empty fields found. Please fill all the fields.");            /*  The message to be displayed */
	}
	else {
		
		alert("Thank you for contacting me.");
	}
}