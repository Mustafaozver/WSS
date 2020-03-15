<?php

	/*
	$obj = simplexml_load_string("<x></x>");
	$obj2 = $obj->addChild("x2");
	$obj2 = "lll";
	$obj2->->addAttribute("param","value");
	<x>
	 <x2 param="value">lll</x2>
	</x>
	*/

function setNAVIGATIONTag($innerHTML, $classnames) {
	return "<NAV id=\"navbar\" class=\"".$classnames."\">".$innerHTML."</NAV>";
}

function setHEADERTag($innerHTML, $classnames) {
	$_body = simplexml_load_string("<HEADER></HEADER>");
	$_body->addAttribute("id","header");
	$_body->addAttribute("class",$classnames);
	$content_ = "%%CONTENT%%";
	$_body->addChild("DIV",$content_);
	return str_replace($content_,$innerHTML,$_body->asXML());
}

?>