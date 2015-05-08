jQuery(document).ready(function($) {
	"use strict";
	try {

	/* ==========================================================================
	#PieChart For Skills Page
	========================================================================== */

	$('.chart').easyPieChart({
	easing: 'easeOutBounce',
	onStep: function(from, to, percent) {
	$(this.el).find('.percent').text(Math.round(percent));
	}
	});


	/* ==========================================================================
	#Carousel Popup For Portfolio Page
	========================================================================== */
	$(".owl-carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay: false
	});

	/* ==========================================================================
	#Text Rotator
	========================================================================== */
	$('#rotate').rotaterator({fadeSpeed:800, pauseSpeed:800});

	/* ==========================================================================
	#Orientation change event
	========================================================================== */
	$(window).on('orientationchange', function(event) {
		window.location.href = window.location.href;
	});

	}catch (ex) {}

	/* ==========================================================================
   	#Progress Bar For Skills Page
   	========================================================================== */
	// progressBar(99, $('#progressBar'));
	// progressBar(80, $('#progressBar2'));
	// progressBar(60, $('#progressBar3'));

	/* ==========================================================================
   	#Mobile Menu
   	========================================================================== */
	var $menu = $('#menu1'),
	$menulink = $('.menu-link');
	$menulink.click(function() {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});
	$('nav#menu1 a').click(function() {
		$('#menu1').removeClass('active');
	});


	/* ==========================================================================
   	#iPad,iPhone,iPod Keyboard issue with position fixed
   	========================================================================== */
	var iPad = navigator.userAgent.toLowerCase().indexOf("ipad");
	var iPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
	var iPod = navigator.userAgent.toLowerCase().indexOf("ipod");
	if(iPad > -1 || iPhone > -1 || iPod > -1)
	{
		window.onscroll = function() {
			$('.totop-link').css('position','absolute');
			$('.totop-link').css('top',(window.pageYOffset + window.innerHeight - 39) + 'px');
		};
	}

	/* ==========================================================================
   	#Title change
   	========================================================================== */	
	if ($('body').hasClass('page')){
		$('title').text($('span.active').text());
	}
	
	$('body a.pluton-menu').click(function(){
		$('title').text($('span.active').text());
	});
	var  thistitle;
	$('article').click(function(){
		thistitle = $(this).find('h2').text();
		if ($(this).hasClass('jspScrollable')){
			setTimeout(function(){
				$('title').text(thistitle); 
			}, 500);
		} else if ($(this).hasClass('introduction-end')){
			setTimeout(function(){
				$('title').text('Thanks You'); 
			}, 500);
		}
	});

	if ($(window).width() > 767){
		$('.content.introduction-end, .content.introduction-end .jspContainer, .content.introduction-end .jspPane').width($(window).width() - 180);
		var widthListPr = 0;
		$('.content-scroller article').each(function(){ widthListPr =widthListPr + $(this).width() });
		$('.content-scroller .content-wrapper').width(widthListPr);

		if ($('.content:last-child').hasClass('introduction-end')){}else{$('.content:last-child, .content:last-child .jspContainer, .content:last-child .jspPane').width($(window).width()-180);}

		if ($('body').hasClass('home')){
			$('html').css({'overflow':'hidden'});
		}

		$('.content.page-full, .content.page-full .jspContainer, .content.page-full .jspPane').width($(window).width()-180);
	}



});