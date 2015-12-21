$(document).ready(function(){

  // to update
  var resultsBoardAddress = 'http://127.0.0.1:8080';
  

  function displayCookie(data){
    $newVotingPanel = $('.cookie').last().clone();
    cookieSlug = data.cookieName.replace(/ /g, "_");


    oldCookieName = $newVotingPanel.data("cookie-name");
    $newVotingPanel.data("cookie-name", cookieSlug);

    $newVotingPanel.find(".panel-collapse").prop('id', "collapse_" + cookieSlug);
    $newVotingPanel.find(".panel-heading").prop('id', "header_" + cookieSlug)
      .find('a').prop('href', '#collapse_' + cookieSlug).text(data.cookieName);

    $newVotingPanel.find('select').each(function(key, elem){
      $(elem).prop('name', $(elem).prop('name').replace(oldCookieName, cookieSlug))
    });

    $('#accordion').append($newVotingPanel);
  }
  

  var primus = Primus.connect(resultsBoardAddress); 

  primus.on('open', function () {
    primus.send('voter join', function(){
      console.log("voter registered! \(^.^)/");
    });

    primus.on('cookie registered', function(data){
      console.log(data);
      displayCookie(data);
    });

  });


});