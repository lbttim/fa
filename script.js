  document.addEventListener('DOMContentLoaded', function() {
	      var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://ucilnica.pgdzgsiska.si");

    document.head.appendChild(meta);
	  var div = document.getElementById('ma');
	  	

	  function saveImageToLocalStorage() {
    var imageUrl = 'https://fireapp.eu/webPage/images/fireapplogo2.png';
    // Create a new image element
    var img = new Image();
    
    // Set the src attribute to the URL provided by the user
    img.src = imageUrl;
    
    // When the image is loaded, save it to local storage
    img.onload = function() {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      var imageDataURL = canvas.toDataURL("image/png");
      try {
        localStorage.setItem("savedImage", imageDataURL);
        alert("Image saved to local storage!");
      } catch (e) {
        alert("Failed to save image to local storage!");
      }
    };
    
    // If there's an error loading the image, display an error message
    img.onerror = function() {
      alert("Error loading image. Please check the URL and try again.");
    };
  }
            
    saveImageToLocalStorage();
    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
