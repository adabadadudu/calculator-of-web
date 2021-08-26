<?php
$expr = $_REQUEST['expr'];
$expr = str_replace('x','*',$expr);
$expr = str_replace(' ','+',$expr);
?>
<center>
	<span style="font-size: 15em;">
		<?php
			eval('echo '.$expr.';');
		?>
	</span>

	<p>
		<a href="/calc/"><button style="background-color: red; font-size: 25px;">Return to back!</button></a>
	</p>
</center>
