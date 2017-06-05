//Trivia Game
$(document).ready(function() {

	// Welcome and start button
	$("#button-start").click(function(){
		$("#first-page").hide();
	});
	
	// Objects that hold each stem,
	// correct answer, and 3 distractors

	
		// var questionOne= {
 	// 	stem: "In 2007, which player was the overall top draft pick?",
 	// 	distractorOne: "Duncan Keith",
 	// 	distractorTwo: "Jonathan Toews",
 	// 	answer: "Patrick Kane",
		// distractorThree: "Marcus Kruger",
 	// }

 	// // This function displays the question 
 	// 	function question() {
 	// 		$("#stem").html(questionOne.stem);
 	// 		$("#distractorOne").html(distractorOne);
 	// 		$("#distractorTwo").html(distractorTwo);
 	// 		$("#answer").html(answer;
 	// 		$("#distratorFour").html(distratorFour);

 	// 	};
 	// 	question();
 	// 	console.log(question);
 	
 	// var questionTwo = {
 	// 	stem: "Who was injured during the 2015 regular season but returned for the post season, and the Stanley Cup?",
 	// 	distractorOne: "Duncan Keith",
 	// 	distractorTwo: "Jonathan Toews",
 	// 	answer: "Patrick Kane"
		// distractorThree: "Marcus Kruger",,
 	// }

 	// var questionThree = {
 	// 	stem: "Who was injured during the 2015 regular season but returned for the post season, and the Stanley Cup?",
 	// 	distractorOne: "Duncan Keith",
 	// 	distractorTwo: "Jonathan Toews",
 	// 	answer: "Patrick Kane"
		// distractorThree: "Marcus Kruger",
 	// }

 	// var questionFour= {
 	// 	stem: "Who assisted Patrick Kane in the cup winning goal in 2010?",
 	// 	distractorOne: "Brent Seabrook",
 	// 	distractorTwo: "Andrew Shaw",
 	// 	distractorThree: "Patrick Sharp",
		// answer: "Marian Campbell",
 	// }
 	
	// Timer - Sets the counter to a number
	var number = 30;
	
	// Timer - Holds the interval
	var intervalId;
	
	// The run function sets and interval that runs the decrement function once a second
		function run() {
			intervalId = setInterval(decrement,1000);
		};
		// The decrement function
		function decrement() {
			//Decrease number by one
			number--;
			//Show the number in the show number tag
			$("#show-number").html(":" + number);
			//Once the number hits 0
			if (number === 0) { 
			stop();
			}
		}
		// Stop function clears the interval
		function stop() {
			clearInterval(intervalId);
			}
		//Run function placed outside of other timer functions
		run();
		// Question objects:

	
//document.ready function ends
});