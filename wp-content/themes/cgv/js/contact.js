$(function() {
	$(".addr ul :first").show();
	$(".pos li").click(function(){
		$(".addr ul li:eq(" + $(this).index() + ")").slideDown().siblings().slideUp();
		$(this).addClass("selected").siblings().removeClass("selected");
	});
});