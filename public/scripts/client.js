/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const lengthError = "Please adhere to the 140 character limit";
  const inputError = "Please enter a tweet!"

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (tweetData) {

    let $tweet = `<article class="tweet">
  <div class="tweet-header">
    <h3><img src = ${tweetData.user.avatars} class="avatar"> ${tweetData.user.name} </h3>
    <p> ${tweetData.user.handle} </p>
  </div>

  <p> ${escape(tweetData.content.text)} </p>
  <hr></hr>

  <div class="tweet-footer">
  <p class = "date"> ${timeago.format(tweetData.created_at)} </p>
    <div class = icons>
      <i class="fa-solid fa-flag icon"></i>
      <i class="fa-solid fa-retweet icon"></i>
      <i class="fa-solid fa-heart icon"></i>
    </div>
  </div>
</article>
`
    $('.tweet-container').prepend($tweet);
  }

  const renderTweets = function (tweetArray) {
    for (tweet of tweetArray) {
      createTweetElement(tweet);
    }
  }


  $('form').on('submit', function (event) {
    event.preventDefault();

    if (!$('#tweet-text').val()) {
      return $('.alert').text("Please enter a tweet!").show();
    }
    if ($('#tweet-text').val().length > 140) {
      return;
    }
    $('.alert').hide();

    let serializedeUrl = $(this).serialize();

    $.ajax({
      url: 'http://localhost:8000/tweets',
      type: "POST",
      data: serializedeUrl,
      success: function (data) {
        loadTweets()
      }
    })

  })

  const loadTweets = function () {
    $.ajax({
      url: 'http://localhost:8000/tweets',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (data) {
        renderTweets(data);
      })
      .catch(function() {
        console.log(error);
      })

  }
});



