$(function() {
	/*var title=document.title;
	function getPost(e){
		var $post_id=$(e).data("id");
		var surl=location.protocol + "//" + location.host + "/wp-admin/admin-ajax.php";
		$.ajax({
			url:surl,
			type:"POST",
			data:"action=get_post&post_id=" + $post_id,
			success:function(data){
				var myPost = $.parseJSON(data);
				var postContent = myPost.content;
				$(e).find(".detailed").html(postContent);
			},
			error:function(){

			}
		});
	}
	
	// preload stories content
	for(j=1;j<5;j++){
		if($("#story-" + j).length==0){
			$(".successContent ul").append('<li id="story-"+j+"" class="disabled"></li>');
		}else{
			getPost($("#story-" + j));
		}
	}*/
	
	$(".successContent ul li a.fancy").fancybox({
		'type'			: 'inline',
		'titleShow'     : false,
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade',
		'easingIn'      : 'none',
		'easingOut'     : 'none',
		'autoDimensions': false,
		'width'			: 933,
		'autoScale' : true,
		'scrolling' : 'no',
		'onComplete'	: function(){
			height = $('#fancybox-content').find('.details').height();
			$('#fancybox-content').height(height).children('div').height(height);
			$.fancybox.resize();
		},
		'onClosed'		: function(selectedArray, selectedIndex, selectedOptions){
			//alert($(selectedArray[selectedIndex]).siblings("div").html());
			$(selectedArray[selectedIndex]).siblings("div").height(0);
		}
	});
	// animation
	$("#story-1,#story-2,#story-3,#story-4").hover(function(){
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
	$("#birdLeft").sprite({
		fps: 10, 
		no_of_frames: 10,
	}).active();
	$("#birdCenter").sprite({
		fps: 10, 
		no_of_frames: 10,
	}).active();
	$("#birdRight").sprite({
		fps: 7, 
		no_of_frames: 10,
	}).active();
	// 2.5D
	offLeft=$(".headerContent").offset().left;
	$("body").mousemove(function(e){
		var x=Math.round((offLeft+480-e.pageX));
		$("#coMountain").css({backgroundPosition: x/12+"px " + "0"});
		$("#coTree01").css({backgroundPosition: x/24+"px " + "0"});
		$("#coTree02").css({backgroundPosition: x/48+"px " + "0"});
		$("#photoLeft").css({"margin-left": (-240+x/120)+"px"});
        $("#photoRight").css({"margin-right": (-223-x/120)+"px"});
        $("#coFence").css({"margin-left": (-1*x/72)+"px"});
    });
});