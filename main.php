<?php
$output = shell_exec('ls'); 

echo "<pre>$output</pre>"; 
print_r(get_defined_vars());
?>
