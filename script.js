  document.addEventListener('DOMContentLoaded', function() {
	      var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://ucilnica.pgdzgsiska.si");

    document.head.appendChild(meta);
	  var imageUrl = 'https://fireapp.eu/webPage/images/fireapplogo2.png';
            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    // Save the Blob as a file using FileSaver.js
                    saveAs(blob, 'testt.png');
                });
    var div = document.getElementById('ma');
    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
