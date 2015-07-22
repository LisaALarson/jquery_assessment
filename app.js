console.log("hello");
var numberOfClicks = 1;


function newDiv(){
	$(".secondDiv").children().remove();
	$(".clickMeDiv").append("<div class='secondDiv'><p>Here are the number of clicks: </p>"+numberOfClicks+"<p></p><button class=changeColor>Change color</button><button class=remove>Remove</button></div>");
	// $(".clickMeDiv").append("<p>Hello</p>");
	// $(".clickMeDiv").append("<button class=changeColor>Change color</button>");
	// $(".clickMeDiv").append("<button class=remove>Remove</button>");
}

function incrementClicks(){
	numberOfClicks = numberOfClicks + 1;
	//return numberOfClicks;
	console.log("number of clicks" + numberOfClicks);
}




$(document).ready(function(){
	$("body").on('click', '.clickMeButton', function(){
		newDiv();
		//incrementClicks;
		numberOfClicks+=1;
		console.log("number of clicks" + numberOfClicks);
	});

	$("body").on('click', '.changeColor', function(){
		$('.changeColor').css('background-color', 'red');
	});

	$("body").on('click', '.remove', function(){
		$(this).parent().remove();
	});

});//end document ready