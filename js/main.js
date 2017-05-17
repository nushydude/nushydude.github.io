$(document).ready(function() {
  var fieldErrors = {
    name: true,
    email: true,
    message: true
  };

  // form input validation
  $("#frm-name").change(function() {
    validate($(this), isNotEmpty);
  });
  $("#frm-name").keypress(function() {
    validate($(this), isNotEmpty);
  });

  $("#frm-email").change(function() {
    validate($(this), isEmail);
  });
  $("#frm-email").keypress(function() {
    validate($(this), isEmail);
  });

  $("#frm-message").change(function() {
    validate($(this), isNotEmpty);
  });
  $("#frm-message").keypress(function() {
    validate($(this), isNotEmpty);
  });

  // check if the str is a valid email
  function isEmail(str) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str));
  }

  // check if the str is not empty
  function isNotEmpty(str) {
    return !!str;
  }

  // update the disabled attr of the submit button
  function updateSubmitButtonState() {
    var submit = $("#frm-submit");
    for (var key in fieldErrors) {
      if (fieldErrors.hasOwnProperty(key) && fieldErrors[key]) {
        return submit.attr('disabled', true);
      }
    }
    submit.attr('disabled', false);
  }



  function validate(field, validator) {
    // run the validator
    if (validator(field.val())) {
      // if no errors
      // if had errors before
      if (field.hasClass('error')) {
        // reset error
        field.removeClass('error');
      }
    } else {
      // set error
      field.addClass('error');
    }
    // set the state
    fieldErrors[field.attr('name')] = field.hasClass('error');
    // update submit button
    updateSubmitButtonState();
  }


  // auto collapse the hamburger menu after clicking on a link
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
      $(this).collapse('hide');
    }
  });



  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a, #navbar-brand, #contact a").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

});
