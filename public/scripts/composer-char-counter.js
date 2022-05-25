// Solely responsible for the character counter


$(document).ready(function() {
  $("#tweet-text").on('input', function(){

   let remainingCharacters = 140 - $(this).val().length
   $(".counter").text(remainingCharacters)
   if (remainingCharacters < 0) {
     $(".counter").css("color", "red", "font-weight", "bold")
   } else {
    $(".counter").css("color", "black")
   }

  })
});