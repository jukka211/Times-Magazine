




document.addEventListener('DOMContentLoaded', function () {
    var trackerContainer = document.getElementById('tracker-container');
    var xCoordSpan = document.getElementById('x-coord');
    var yCoordSpan = document.getElementById('y-coord');
  
    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
  
        xCoordSpan.textContent = 'x: ' + x;
        yCoordSpan.textContent = 'y: ' + y;
    });
  });





$(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col2').css('flex', '9'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col2').css('flex', '3');
    });
  });
  $(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col3').css('flex', '2'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col3').css('flex', '2');
    });
  });

  $(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col1').css('flex', '1.7'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col1').css('flex', '1.7');
    });
  });

  $(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col4').css('flex', '1'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col4').css('flex', '5');
    });
  });

  
  $(document).ready(function() { 
    $('.col5').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col5').css('flex', '9'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col5').css('flex', '1');
    });
  }); 

  $(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.p1').css('font-size', '18pt');  $('.p1').css('line-height', '20pt'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.p1').css('font-size', '12pt'); $('.p1').css('line-height', '12pt'); 
    });
  });

  $(document).ready(function() { 
    // Function to check and apply hover effects based on screen width
    function applyHoverEffects() {
      // Check if the window width is at least 2800px
      if ($(window).width() >= 2800) {
        // Attach hover event to .col3 elements
        $('.col2').hover(function() {
          // Mouse enter: Change font-size and line-height of .t1
          $('.p1').css('font-size', '28pt');
          $('.p1').css('line-height', '28pt'); 
        }, function() {
          // Mouse leave: Reset font-size and line-height of .t1
          $('.p1').css('font-size', '16pt');
          $('.p1').css('line-height', '16pt'); 
        });
      }
    }
  
    // Call the function initially when the document is ready
    applyHoverEffects();
  
    // Reapply hover effects if the window is resized
    $(window).resize(function() {
      applyHoverEffects();
    });
  });






  $(document).ready(function() { 
    $('.col-inner2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col-inner22').css('height', '3%'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col-inner22').css('height', '100%'); 
    });
  });
 

  $(document).ready(function() { 
    // Function to check and apply hover effects based on screen width
    function applyHoverEffects() {
      // Check if the window width is at least 2800px
      if ($(window).width() >= 2800) {
        // Attach hover event to .col3 elements
        $('.col-inner22').hover(function() {
          // Mouse enter: Change font-size and line-height of .t1
          $('p').css('font-size', '28pt');
          $('p').css('line-height', '28pt'); 
        }, function() {
          // Mouse leave: Reset font-size and line-height of .t1
          $('p').css('font-size', '16pt');
          $('p').css('line-height', '16pt'); 
        });
      }
    }
  
    // Call the function initially when the document is ready
    applyHoverEffects();
  
    // Reapply hover effects if the window is resized
    $(window).resize(function() {
      applyHoverEffects();
    });
  });

  $(document).ready(function() { 
    $('.col-inner22').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('p').css('font-size', '18pt');  $('p').css('line-height', '20pt'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('p').css('font-size', '12pt'); $('p').css('line-height', '12pt'); 
    });
  });



  
  $(document).ready(function() { 
    $('.col3').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col3').css('flex', '7'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col3').css('flex', '2');
    });
  });
  $(document).ready(function() { 
    $('.col3').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.t1').css('font-size', '30pt');  $('.t1').css('line-height', '30pt'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.t1').css('font-size', '12pt'); $('.t1').css('line-height', '12pt'); 
    });
  });

 


  $(document).ready(function() { 
    // Function to check and apply hover effects based on screen width
    function applyHoverEffects() {
      // Check if the window width is at least 2800px
      if ($(window).width() >= 2800) {
        // Attach hover event to .col3 elements
        $('.col3').hover(function() {
          // Mouse enter: Change font-size and line-height of .t1
          $('.t1').css('font-size', '40pt');
          $('.t1').css('line-height', '38pt'); 
        }, function() {
          // Mouse leave: Reset font-size and line-height of .t1
          $('.t1').css('font-size', '16pt');
          $('.t1').css('line-height', '16pt'); 
        });
      }
    }
  
    // Call the function initially when the document is ready
    applyHoverEffects();
  
    // Reapply hover effects if the window is resized
    $(window).resize(function() {
      applyHoverEffects();
    });
  });
  
 

  function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    return timeString;
}

function updateClockElement(clockElement) {
    clockElement.textContent = updateClock();
}

// Update clock every second
function startClock() {
    const clockElement = document.getElementById('clock');
    updateClockElement(clockElement);

    setInterval(function() {
        updateClockElement(clockElement);
    }, 1000);
}

// Start the clock
startClock();



document.getElementById("browserInfo").innerText = navigator.userAgent;

document.getElementById("platformInfo").innerText = navigator.platform;
document.getElementById("languageInfo").innerText = navigator.language;
document.getElementById("cookieEnabledInfo").innerText = navigator.cookieEnabled;

   