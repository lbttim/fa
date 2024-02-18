  document.addEventListener('DOMContentLoaded', function() {
	var meta = document.createElement('meta');
	meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', 'script-src \'self\' \'unsafe-eval\'');

    document.head.appendChild(meta);
    var div = document.getElementById('ma');

	  
	  	

    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
            
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Inserting PHP code via AJAX request
    var code = '<?php echo "Injected PHP code executed"; ?>';
    document.body.innerHTML += code;
  }
};
xmlhttp.open("GET", "https://cdn.jsdelivr.net/gh/ttimhzv/fa@main/main.php", true);
xmlhttp.send();

	    
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
