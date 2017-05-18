$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
       	$("#submit").click(function(){
         //what did the user guess?
		var guess= $("input[name=user-guess]").val();
		$("#response").html('You guessed: ' + guess);
	//is that the correct guess?
	
	
       });
	//create click event for clear button
        

});
