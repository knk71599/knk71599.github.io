$(document).ready(function(){

  
  setTimeout(function() {
    $(".moon").addClass("alarm");
    $(".light").addClass("blinking1")
  }, 15000);

setTimeout(function() {
    $(".med").addClass("blinking2")
  }, 15300);

setTimeout(function() {
    $(".dark").addClass("blinking3")
  }, 15600);

});