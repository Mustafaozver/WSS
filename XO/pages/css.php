<?php

$cssf = "/css/"; // $myfolder."/pages/css/";
function addcss($cssfile) {
	global $_head;
	$link = $_head->addChild("LINK","");
	$link->addAttribute("rel","stylesheet");
	$link->addAttribute("type","text/css");
	$link->addAttribute("href",$cssfile);
}

addcss("http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,700,600,300");
addcss($cssf."bootstrap.min.css");
addcss($cssf."bootstrap-grid.min.css");
addcss($cssf."bootstrap-reboot.min.css");
addcss($cssf."font-awesome.min.css");
addcss($cssf."Chart.min.css");
addcss($cssf."css.css");

?>