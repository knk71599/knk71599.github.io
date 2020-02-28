$(document).ready(function(){

	$("audio")[0].play();
  
  setTimeout(function() {
    $(".moon").addClass("alarm");
    $(".light").addClass("blinking1")
    $(".med").addClass("blinking2")
    $(".dark").addClass("blinking3")
  }, 6000);


});