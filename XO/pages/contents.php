<?php

function setCONTENTTag($innerHTML, $classnames) {
	$_body = "<DIV id=\"content\" class=\"".$classnames."\">";
	$_body .= "<DIV id=\"content\" class=\"container-fluid\">";
	
	for ($i=0;$i<count($innerHTML);$i++) {
		$_body .= "<DIV class=\"row\">".$innerHTML[$i]."</DIV>";
	}
	$_body .= "</DIV></DIV>";
	return $_body;
}

?>