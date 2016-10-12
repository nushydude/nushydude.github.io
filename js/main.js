$(document).ready(function() {
  var fieldErrors = {
    name: false,
    email: false,
    message: false
  };

  function isEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  function updateSubmit() {
    console.log('field errors:');
    console.log(fieldErrors);

    var $submit = $("#frm-submit");
    for (var key in fieldErrors) {
      if (fieldErrors.hasOwnProperty(key)) {
        if (fieldErrors[key] == true) {
          $submit.attr('disabled', true);
          return;
        }
      }
    }
    $submit.attr('disabled', false);
  }

  console.log("loaded");

  $("#frm-name").keyup(function(e) {
    var $val = e.target.value;
    var $err = $("#err-name");
    //if empty, then display error
    if (!$val) {
      $err.removeClass('hide');
      fieldErrors['name'] = true;
    } else {
      if (!$err.hasClass('hide')) {
        $err.addClass('hide');
        fieldErrors['name']= false;
      }
    }
    updateSubmit();
  });

  $("#frm-email").keyup(function(e) {
    var $val = e.target.value;
    var $err = $("#err-email");
    //if empty, then display error
    if (!isEmail($val)) {
      $err.removeClass('hide');
      fieldErrors['email'] = true;
    } else {
      if (!$err.hasClass('hide')) {
        $err.addClass('hide');
        fieldErrors['email'] = false;
      }
    }
    updateSubmit();
  });

  $("#frm-message").keyup(function(e) {
    var $val = e.target.value;
    var $err = $("#err-message");
    //if empty, then display error
    if (!($val)) {
      $err.removeClass('hide');
      fieldErrors['message'] = true;
    } else {
      if (!$err.hasClass('hide')) {
        $err.addClass('hide');
        fieldErrors['message'] = false;
      }
    }
    updateSubmit();
  });
});
