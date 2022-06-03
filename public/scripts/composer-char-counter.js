// Solely responsible for the character counter


$(document).ready(function () {
  $(".alert").hide();

  $("#tweet-text").on('input', function () {
    let remainingCharacters = 140 - $(this).val().length;
    $(".counter").text(remainingCharacters);
    if (remainingCharacters < 0) {
      $(".counter").css("color", "red", "font-weight", "bold");
      $(".alert").show().text("Please adhere to the 140 character limit");

    } else {
      $(".counter").css("color", "black");
      $(".alert").hide();
    }

  });
});