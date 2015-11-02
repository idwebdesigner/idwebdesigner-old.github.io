$(function() {
	// animation
	$("#article-1,#article-2").hover(function(){
		$(this).destroy().sprite({
			fps: 20, 
			no_of_frames: 10,
			on_frame: {
				3: function(obj) {
				   obj.spStop();
				}
			}
		}).active();
	},function(f){
		$(this).destroy().sprite({
			fps: 20, 
			no_of_frames: 10,
			start_at_frame: 5,
			on_last_frame: function(obj) {
				obj.spStop(true);
			}
		});
	});
	// background 2.5D
	var dw=$(document).width();
	$(window).resize(function(e){
		dw=$(document).width();
	});
	$(document).mousemove(function(e){
		// 2.5D
		var x=Math.round(e.pageX-dw/2);
		$(".home").css({backgroundPosition: -1*x/75+"px " + "0"});
	});
});