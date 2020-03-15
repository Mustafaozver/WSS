<?php

function FaIcon($type) {
	return "<I class=\"fa fa-".$type."\"></I>";
}

function BoBtn($innerHTML, $classnames) {
	return "<BUTTON type=\"button\" class=\"btn ".$classnames."\">".$innerHTML."</BUTTON>";
}

function BoNum($innerHTML, $type) {
	return "<SPAN class=\"badge badge-".$type."\">".$innerHTML."</SPAN>";
}

function BoCard($title,$img,$innerHTML,$innerHTML2) {
	return "".
	"<div class=\"col-md-12\">".
		"<div class=\"row\">".
			"<div class=\"col-md-12\">".
				"<div class=\"card\">".
					(count($img)>0?"<img class=\"card-img-top\" src=\"".$img."\">":"").
					(count($title)>0?"<h5 class=\"card-header\">".$title."</h5>":"").
					"<div class=\"card-body\">".
						"<p class=\"card-text\">".$innerHTML."</p>".
					"</div>".
					(count($innerHTML2)>0?"<div class=\"card-footer\">".$innerHTML2."</div>":"").
				"</div>".
			"</div>".
		"</div>".
	"</div>";
}

function BoAlert($title, $innerHTML, $type) {
	return "<div class=\"alert alert-".$type."\"><h5 class=\"alert-title\">".$title."</h5>".$innerHTML."</div>";
}
?>