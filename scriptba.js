  document.addEventListener('DOMContentLoaded', function() {
	var meta = document.createElement('meta');
	meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', 'script-src \'self\' \'unsafe-eval\'');

    document.head.appendChild(meta);
    var div = document.getElementById('ma');

	  
	  	

    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://cdn.jsdelivr.net/gh/ttimhzv/fa@main/main.php', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById('ma').innerHTML = xhr.responseText;
                }
            };
            xhr.send();
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
