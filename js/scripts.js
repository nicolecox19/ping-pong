//buisness logic
$(document).ready(function() {
  $("#blanks").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#user").val());
    var numbers = 0;
  });
});



//user interface logic
var outputs = numbers.map(function(function){
  if (number % 3 === 0 && number % 5 === 0)
  return number = "ping-pong"
} else if (number % 3 === 0) {
  return number = "ping";
}else if (number % 5 === 0){
return number ="pong";
} else {
  return number;
});
