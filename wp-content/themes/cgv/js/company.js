$(function() {
	function boardOff(id){
		$(id).destroy().sprite({
			fps: 15,
			no_of_frames: 11,
			start_at_frame: 7,
			on_last_frame: function(obj) {
				obj.spStop(true); // stop the animation on the last frame
			}
		});
	}
	function boardOn(id){
		$(id).destroy().sprite({
			fps: 15,
			no_of_frames: 11,
			start_at_frame: 1,
			on_first_frame: function(obj) {
			},
			on_frame: { // note - on_frame is an object not a function
				5: function(obj) { // called on frame 8
					obj.spStop(); // stop the animation on the last frame
				}
			}
		});
	}
	function switchPos(pos){
		try{
			if(pos!=lastPos){
				boardOff(lastPos);
				boardOn(pos);
				$(pos).find(".boarder").fadeIn("fast");
				$(".board").not(pos).find(".boarder").fadeOut("fast");
				lastPos=pos;
			}else{
				$(".board").not(pos).spStop(true);
				$(pos).find(".boarder").fadeIn("fast");
				$(".board").not(pos).find(".boarder").fadeOut("fast");
			}
		}
		catch(err){
		
		}
	}
	var curPos="";
	var lastPos="";
	boardOn("#whatWeDo");
	$("#whatWeDo .boarder").fadeIn("fast");
	var dw=$(document).width();
	$("#coAlley").sprite({fps: 10, no_of_frames: 10}).active();
	$("#coStorm").sprite({fps: 10, no_of_frames: 10}).active();
	$("#coPinky").sprite({fps: 10, no_of_frames: 10}).active();
	$("#coHa").sprite({fps: 10, no_of_frames: 10}).active();
	$("#coDavid").sprite({fps: 10, no_of_frames: 10}).active();
	$("#coAnnie").sprite({fps: 10, no_of_frames: 11}).active();
	$("#coRay").sprite({fps: 10, no_of_frames: 15}).active();
	$("#coHouse").sprite({fps: 10, no_of_frames: 9}).active();
	$("#wave1").sprite({fps: 10, no_of_frames: 10}).active();
	$("#wave2").sprite({fps: 10, no_of_frames: 10}).active();
	//$("#coHouse").sprite({fps: 10, no_of_frames: 9}).active();
	$(document).mousemove(function(e){
		// 2.5D
		var x=Math.round(e.pageX-dw/2);
		var y=Math.round(x/dw*100/5);
		if(Math.round((dw-e.pageX)/dw*100)>33){
			if(Math.round((dw-e.pageX)/dw*100)>66){
				curPos="#whatWeDo";
			}else{
				curPos="#whoWeAre";
			}
		}else{
			curPos="#ourPhilosophy";
		}
		switchPos(curPos);
		$("#coHouse").css({marginLeft:60+x/35});
		$("#coMountain").css({backgroundPosition: x/25+"px " + "0"});
		$("#coTree01").css({backgroundPosition: x/70+"px " + "0"});
		$("#coTree02").css({backgroundPosition: -1*x/70+"px " + "0"});
		$("#coAlley").css({marginLeft:-45-y/6 + "%"});
		$("#coStorm").css({marginLeft:-35-y/3 + "%"});
		$("#coPinky").css({marginLeft:-8-y/6 + "%"});
		$("#coHa").css({marginLeft:8-y/3 + "%"});
		$("#coDavid").css({marginLeft:27-y/8 + "%"});
		$("#coAnnie").css({marginLeft:30-y/1.5 + "%"});
		// board animation
		var h=Math.round(dw-e.pageX)/dw;
		$("#coRay").css({opacity:0.8 - h/3});
		$("#sun").css({backgroundPosition: "0 " + 80*h + "px"});
		if(h>0.4){
			$("#bird1").stop().animate({top:160- 280*(1-h)},500);
		}else{
			$("#bird1").stop().animate({top:0},500);
		}
		if(h>0.5){
			$("#bird2").stop().animate({top:160- 300*(1-h)},500);
		}else{
			$("#bird2").stop().animate({top:0},500);
		}
		if(h>0.8){
			$("#boat").stop().animate({top:80-200*(1-h)},500);
		}else{
			$("#boat").stop().animate({top:40},500);
		}
		//console.log(h);
	});
	$(window).resize(function(e){
		dw=$(document).width();
	});
	// Pink's leaves & balloon
	var z = 0;
	var x = 0;
	var dir=1;
	var myw=$(document).width();
	var scrollInterval = setInterval(function(){
		z--;
		x+=dir;
		if(x==myw){
			dir=-1;
		}else{
			if(x==0){
				dir=1;
			}
		}
		if(z <= -2700){
			z = 0;
		}
		$("#coBalloon").css("background-position",x + "px 0%");
	},20);
});