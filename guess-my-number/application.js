$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
       	$("#submit").click(function(){
         //what did the user guess?
		var guess= $("input[name=user-guess]").val();
		
		//if guess is correct: fill #response with 'you are correct!'
		if(guess==random_num) {
			$("#response").fadeOut().html('You are correct').fadeIn();
		}
		//else if guess is too low: fill #response with 'too low, guess higher!'
		else if(guess<random_num) {
			$("#response").fadeOut().html('you are too low guess higher').fadeIn();
		}
		//else, fill #response with 'too high, guess lower'
		else{
			$("#response").fadeOut().html('You guessed to high, guess lower').fadeIn();
		}
		$("input[name=user-guess]").val(''); 
       });
	//create click event for clear button
        var random_num = Math.floor((Math.random()*100) + 1);
       	$("#clear").click(function(){
	if(guess==random_num) {
			$("#response").fadeOut().html('').fadeIn();
		}
		
		else if(guess<random_num) {
			$("#response").fadeOut().html('').fadeIn();
		}
		
		else{
			$("#response").fadeOut().html('').fadeIn();
		}
		$("input[name=user-guess]").val('');
});
