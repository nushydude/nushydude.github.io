$(document).ready(function() {
    var fieldErrors = {
        name: true,
        email: true,
        message: true
    };

    // check if the str is a valid email    
    function isEmail(str) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
            return true;
        }
        return false;
    }

    // check if the str is not empty
    function isNotEmpty(str) {
        if (!str) {
            return false;
        }
        return true;
    }
    
    // update the disabled attr of the submit button
    function updateSubmit() {
        var $submit = $("#frm-submit");
        for (var key in fieldErrors) {
            if (fieldErrors.hasOwnProperty(key) && fieldErrors[key] == true) {
                $submit.attr('disabled', true);
                return;
            }
        }
        $submit.attr('disabled', false);
    }

    $("#frm-name").keyup(function(e) {
        validate($(this), isNotEmpty);
    });

    $("#frm-email").keyup(function(e) {
        validate($(this), isEmail);
    });

    $("#frm-message").keyup(function(e) {
        validate($(this), isNotEmpty);
    });

    function validate($obj, validateFunc) {
        var $val = $obj.val();
        var $field = $obj.attr('name');

        if (validateFunc($val)) {
            if ($obj.hasClass('error')) {
                $obj.removeClass('error');
            }
        } else {
            $obj.addClass('error');
        }
        fieldErrors[$field] = $obj.hasClass('error');
        updateSubmit();
    }
    
    
    // auto collapse the hamburger menu after clicking on a link
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
    
    
    
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(e) {
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
