$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
       	$("#submit").click(function(){
         //what did the user guess?
		var guess= $("input[name=user-guess]").val();
		
		//if guess is correct: fill #response with 'you are correct!'
		if(guess==random_num) {
			$("#response").html('You are correct');
		}
		//else if guess is too low: fill #response with 'too low, guess higher!'
		else if(guess<random_num) {
			$("#response").html('you are too low guess higher');
		}
		//else, fill #response with 'too high, guess lower'
		else{
			$("#response").html('You guessed to high, guess lower');
		}
       });
	//create click event for clear button
        

});
