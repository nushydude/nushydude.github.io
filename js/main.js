$(document).ready(function() {
  var fieldErrors = {
    name: false,
    _replyto: false,
    message: false
  };

  function isEmail(str) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
      return true;
    }
    return false;
  }

  function isNotEmpty(str) {
    if (!str) {
      return false;
    }
    return true;
  }

  function updateSubmit() {
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
    
    /*
    // animate to section
    var $links = $("nav li");
    for (var i = 0; i < $links.length; i++) {
        //console.log($links[i]);
        $links[i].addEventListener("click", navigate);
    }
    
    function navigate(e) {
        //e.preventDefault();
        
        //var 
        
        //href="#about-me"
        
        //var section = $(this).first();
        
        //console.log(section);
        
        //console.log(this);
        //var sectionTop = $(this).offset().top;
        //var docTop = document.documentElement.scrollTop;
        
        //console.log("SectionTop", sectionTop);
        //console.log("DocTop", docTop);
        
        //$("html body").animate({ scrollTop: 1000 }, 1000);
    }
    
    
    */
    
    
    
    
    

});
