




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
      $('.col2').css('flex', '1');
    });
  });
  $(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col3').css('flex', '2'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col3').css('flex', '1');
    });
  });

  $(document).ready(function() { 
    $('.col2').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col1').css('flex', '1.23'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col1').css('flex', '1.32');
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
   
      $('.p1').css('font-size', '16pt');  $('.p1').css('line-height', '20pt'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.p1').css('font-size', '12pt'); $('.p1').css('line-height', '14pt'); 
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
    $('.col3').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.col3').css('flex', '7'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.col3').css('flex', '1');
    });
  });
  $(document).ready(function() { 
    $('.col3').hover(function() {
      // When the mouse enters the .hover-element, change the opacity of .change-element
   
      $('.t1').css('font-size', '28pt');  $('.t1').css('line-height', '30pt'); 
    }, function() {
      // When the mouse leaves the .hover-element, reset the opacity of .change-element
      $('.t1').css('font-size', '12pt'); $('.t1').css('line-height', '14pt'); 
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

   