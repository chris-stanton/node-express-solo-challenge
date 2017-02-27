$(document).ready(function() {

  $("#jokeInput").on("click", sendJoke);
    getJokes();

  function appendJokes(jokes) {
    var $jokeDiv = $("#jokes");
    $jokeDiv.empty();

    jokes.forEach(function(joke) {
      var $joke = $('<div class="row"></div>');
      $joke.append('<h2>' + joke.whoseJoke + '</h2>');
      $joke.append('<p class="setUp">' + joke.jokeQuestion + '</p>');
      $joke.append('<p class="punchLine">' + joke.punchLine + '</p>')

      $jokeDiv.append($joke);
    });
  }

  function sendJoke(event) {
    event.preventDefault();
    var jokeInput = {};
    $.each($(this).serializeArray(), function(i, obj) {
      jokeInput[obj.name] = obj.value;
    });

    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: jokeInput,
      success: function(res) {
        getJokes();
      },
      error: function() {
        console.log("error");
      }
    });//end of ajax
  }//end of sendJoke()

  function getJokes() {
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function (jokes) {
        appendJokes(jokes);
      },
        error: function () {
        console.log("error");
      }
    });//end of ajax
  }//end of getJokes()
});//end of doc.ready
