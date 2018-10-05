//buisness logic
$(document).ready(function(){
  $("#blanks").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#user").val());
    var numbers = [];
    for (var i = 1; i <= userInput; i+++){
      numbers.push(i);
     });
    });
  });


//user interface logic
var outputs = numbers.forEach(function(number){
    if (number % 3 === 0 && number % 5 === 0){
    return number = "ping-pong";
  } else if (number % 3 === 0){
    return number = "ping";
  }else if (number % 5 === 0){
  return number ="pong";
  } else  {
    return number = "please enter a number";
    }
  });


outputs.forEach(function(output){
     $("ul").append("<li>" + output + "</li>");
   });
