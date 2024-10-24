  document.querySelector('.burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });

  $(document).ready(function(){
    $("#contactme").validate({
        rules:{
          name:{
            required: true,
            minlength: 2
          },
          email:{
            required: true,
            email: true
          },
          phone:{
            required: true,
            number: true,
            minlength: 10
    
          },
          message:{
            required:true,
            maximumLength: 100
          }
      },

         messages:{
          name:{
            required:"Please enter a name",
            required:"Enter a full name"
          },
          email:{
            required:"Please enter a valid email address",
          },
          phone:{
            required:"Please enter a valid phone number",
            minlength:"Phone number must be 10 digits long",
            number:"Please enter a valid phone number"
          },
          message:{
            required:"Please enter a message"
          },
          maximumLength:{
            required:"Please enter a message with maximum length of 100 characters"
          }
      }
    });

  
});
  