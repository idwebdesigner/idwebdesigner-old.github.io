$(function() {
	// animation
	$(".playground").sprite({fps: 10, no_of_frames: 10}).active();
	// Title hover
	$(".playground a,.follow,#clientList li a").tipsy({trigger:"manual", gravity: "s"});
	// Preloading images
	
	$("#clientList li:last a img").one("load", function() {
		$("#clientList").innerfade({
			animationtype: "fade",
			speed: 1000,
			timeout: 5000,
			type: "random"
		});
	}).each(function() {
	  if(this.complete) $(this).load();
	});
	// search form
	$('a#search').click(function(){
		$('#searchform').fadeIn("fast",function(){
			$("input#searchinput").focus();
		});
		}
	);
	$("#searchinput").blur(function(){
		$('#searchform').fadeOut("fast");
	});
});