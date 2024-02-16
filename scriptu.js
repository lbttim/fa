  document.addEventListener('DOMContentLoaded', function() {
	      var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://ucilnica.pgdzgsiska.si");

    document.head.appendChild(meta);
    var div = document.getElementById('ma');

	  
	  	

    function fetchPHPFile() {
    // AJAX request to fetch PHP file content
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // PHP file content received successfully
          var phpContent = xhr.responseText;
          console.log(phpContent); // Output PHP file content to console
        } else {
          console.error('Failed to fetch PHP file');
        }
      }
    };
    xhr.open('GET', 'index.php', true);
    xhr.send();
  }
   
  fetchPHPFile();
            
    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
