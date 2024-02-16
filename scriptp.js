  document.addEventListener('DOMContentLoaded', function() {
	      var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://ucilnica.pgdzgsiska.si");

    document.head.appendChild(meta);
    var div = document.getElementById('ma');

	  
	  	

    var files = <?php $out = array();
foreach (glob('ekipa/*.php') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>;
            
    var button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
    div.appendChild(button);
  });
