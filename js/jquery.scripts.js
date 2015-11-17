
$(document).ready(function(){




	/*================================================
	LOADER
	=================================================*/
	$(document).ready(function() {
  
	  $(".animsition-overlay").animsition({
	  
	    inClass               :   'overlay-slide-in-top',
	    outClass              :   'overlay-slide-out-top',
	    inDuration            :    700,
	    outDuration           :    700,
	    linkElement           :   '.animsition-link',
	    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	    loading               :    true,
	    loadingParentElement  :   'body', //animsition wrapper element
	    loadingClass          :   'animsition-loading',
	    unSupportCss          : [ 'animation-duration',
	                              '-webkit-animation-duration',
	                              '-o-animation-duration'
	                            ],
	    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    
	    overlay               :   true,
	    
	    overlayClass          :   'animsition-overlay-slide',
	    overlayParentElement  :   'body'
	  });
	});




	/*================================================
	MARQUEE
	=================================================*/
	$(document).ready(function () {
		$("#marquee").smoothDivScroll({
			hotSpotScrolling: false,
			touchScrolling: true,
			manualContinuousScrolling: true,
			mousewheelScrolling: false,
			autoScrollingMode: "always",
			autoScrollingDirection: "endlessLoopRight"
		});
	});




	/*================================================
	RIGHT NAV
	=================================================*/
	$("#rightNavBtn").click(function() {
		$("body").addClass('noScroll');
		$("#rightNav").addClass('on');
		$("#shadow").addClass('on');
		$("header").addClass('fixed3');
		$("header").addClass('fixed2');
		$('#rightNav').removeClass('mouseover');
	});
	$("#shadow").click(function() {
		$("body").removeClass('noScroll');
		$("#shadow").removeClass('on').addClass('off');
		$("#rightNav").removeClass('on').addClass('off');
		$("header").removeClass('fixed3');
	});
	$("#rightNavBtn").mouseover(function() {
		$('#rightNav').addClass('mouseover');
	});
	$("#rightNavBtn").mouseout(function() {
		$('#rightNav').removeClass('mouseover');
	});




	/*================================================
	FLIP BUTTON
	=================================================*/
	$(".flip-card-content").mouseover('hover', function(){
		$(this).addClass("flip");
	});
	$(".flip-card-content").mouseout('hover', function(){
		$(this).removeClass("flip");
	});

	


});
