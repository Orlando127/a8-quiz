$(function() {
  //All JS goes within these brackets

  console.log("this is where all the fancy stuff goes");

  $(":button").click(function(){


  var correct = $(this).hasClass('correct') ;

	console.log( 'correct : ' + correct ) ;

	if ( correct == true ) {

$(this).css( 'background-color', 'green') ;

	}
	


  });

});
