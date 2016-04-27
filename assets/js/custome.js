$j(document).ready(function(){
	"use strict";
	$j('.sub-blurb .ui-button').val('>');    // button
	
	$j('#topnews li:lt(3)').hide();  // hide the post
	
	
	$j('.top-nav li').mouseleave(function(){
	   $j('.nav-active').css('left','168px');
	});

	
});