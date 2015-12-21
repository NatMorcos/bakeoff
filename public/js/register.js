$(document).ready(function(){

  // to update
  var resultsBoardAddress = 'http://127.0.0.1:8080';
  
  function registerCookie($form){
    primus.send('register cookie', {
      cookieName: $form.find('[name="cookieName"]').val(),
      bakerName: $form.find('[name="bakerName"]').val()
    });
  }

  function newForm(){
    //TODO: ew
    return '<form class="form-inline registration registration-open"> \
          <div class="form-group"> \
            <input type="text" name="cookieName" class="form-control" placeholder="Cookie Name"> \
          </div> \
          <div class="form-group"> \
            <input type="text" name="bakerName" class="form-control" placeholder="Baker Name"> \
          </div> \
          <button type="submit" class="btn btn-default"> \
            <span class="register">Register</span> \
            <span class="success hidden"> \
              <i class="glyphicon glyphicon-check"></i> \
              Added! \
            </span> \
          </button> \
        </form>'
  }

  function progressRegistration($form){
    $form.removeClass("registration-open")
      .find('input, button').prop("disabled", true);
    $form.find('.register').addClass("hidden");
    $form.find('.success').removeClass("hidden");

    $('.main').append(newForm());
  }


  var primus = Primus.connect(resultsBoardAddress); 

  primus.on('open', function () {
    primus.send('registrar join', function(){
      console.log("ready to register cookies! \(^.^)/");
    });
  });


  $('.main').on("submit", 'form.registration-open', function(e){
    e.preventDefault();
    var $form = $(e.target);

    registerCookie($form);
    progressRegistration($form);
  });


});