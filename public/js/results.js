$(document).ready(function(){

  function displayCookie(data){
    //TODO accommodate existing scores
    $newResult = $('.result').first().clone();
    cookieSlug = data.cookieName.replace(/ /g, "_");

    $newResult.prop('id', cookieSlug)
      .find('h3').text(data.cookieName);
    $('.main').append($newResult);
  }

  var primus = Primus.connect('http://localhost:8080');

  primus.on('open', function () {
    primus.send('results board join', function(){
      console.log('results board registered');
    });

    primus.on('cookie registered', function(data){
      console.log(data);
      displayCookie(data);
    });

    primus.on('load results', function(data){
      console.log("load results")
      for(cookie in data){
        displayCookie(data[cookie]);
      }
    })

  });
});