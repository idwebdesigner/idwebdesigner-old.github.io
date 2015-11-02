$(function() {
	function getWork(id){
		$("#myRoundabout li").fadeOut("fast");
		var $work_id=id;
		var surl=location.protocol + "//" + location.host + "/wp-admin/admin-ajax.php";
		$.ajax({
			url:surl,
			type:"POST",
			data:"action=get_work&work_id=" + $work_id,
			success:function(data){
				try{
					var myWork = $.parseJSON(data);
					$("#myRoundabout").html(myWork.images);
					$(".workInfo .title").html(myWork.title);
					$(".workInfo .info").html(myWork.info);
					$(".workInfo .desc").html(myWork.desc);
					location.hash = myWork.url.substr(myWork.url.lastIndexOf("/")+1);
					//alert(id);
					document.title="CGVietnam » Works » " + myWork.title;
					$("#slideWrapper ul li a.active").removeClass("active");
					$("#" + id).addClass("active");
					if(!$("ul#myRoundabout").hasClass("animation")){
						$("ul#myRoundabout").roundabout({shape: "tearDrop", minScale:0.8, minOpacity:0.5,clickToFocus:true,btnPrev:".btnPrev",duration: 300});
					}else{
						$("#myRoundabout li").fadeIn("slow");
					}
					$("#myRoundabout li").fadeIn("fast");
				}catch(err){
					$("#myRoundabout li").fadeIn("fast");
					if(!$("ul#myRoundabout").hasClass("animation")){
						$("ul#myRoundabout").roundabout({shape: "tearDrop", minScale:0.8, minOpacity:0.5,clickToFocus:true,btnPrev:".btnPrev",duration: 300});
					}else{
						$("#myRoundabout li").fadeIn("slow");
					}
				}
				
			},
			error:function (xhr, ajaxOptions, thrownError){
				$("#myRoundabout li").fadeIn("slow");
			}
		});
	}
	/*$("#slideWrapper ul li a.projectTitle").click(function(e){
		e.preventDefault();
		if(!$(this).parent().hasClass("active")){
			getWork($(this).attr("id"));
		}else{

		}
	});*/
	if(!$("ul#myRoundabout").hasClass("animation")){
		$("ul#myRoundabout").roundabout({shape: "tearDrop", minScale:0.8, minOpacity:0.5,clickToFocus:true,btnPrev:".btnPrev",duration: 300});
	}else{
		$("#myRoundabout li").fadeIn("slow");
	}
	$(".roundabout-in-focus").live("click", function(e) {
		e.preventDefault();
		$(".btnPrev").click();
		return false;
	});
	// fix menu class
	if($("#menu-item-145").not(".current-menu-item")){
		$("#menu-item-145").addClass("current-menu-item");
	}
	// Title hover
	$(".projectTitle").tipsy({trigger:"manual", gravity: "s"});
	// Preloading images
	$("#workSlider ul li:last img").one("load", function() {
  		$("#workSlider ul li").fadeIn("slow");
	}).each(function() {
	  if(this.complete) $(this).load();
	});
	$("#slideWrapper").jCarouselLite({
		easing:'easeInOutQuad',
		scroll: 1,
		speed: 700,
		btnNext: ".next",
		btnPrev: ".prev",
		circular: false,
		visible: 1
	});
	// 2.5D
	offLeft=$(".headerContent").offset().left;
	$("body").mousemove(function(e){
		var x=Math.round((offLeft+480-e.pageX));
		$("#coMountain").css({backgroundPosition: x/12+"px " + "0"});
		$("#coTree01").css({backgroundPosition: x/24+"px " + "0"});
		$("#coTree02").css({backgroundPosition: x/48+"px " + "0"});
		$("#charLeft").css({"margin-left": (-240+x/120)+"px"});
        $("#charRight").css({"margin-right": (-223-x/120)+"px"});
	});
	/*if(window.location.pathname.search(/\/work\//i)==-1){
		if(window.location.hash) {
			getWork(window.location.hash.substr(1));
		}else{
			getWork($("#slideWrapper ul li:first a:first").attr("id"));
		}
	}*/
});