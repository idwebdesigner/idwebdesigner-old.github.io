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
				var postContent = "";
				postContent+='<div class="title">'+myPost.title+'<span>Posted by <strong>'+myPost.author+'</strong> on '+myPost.date+'</span></div>';
				postContent+='<div class="content">'+myPost.content+'</div>';
				$(".right").html(postContent).css("opacity",1);
				hashy=$this.attr("href");
				$(e).parent().addClass("active").siblings().removeClass("active");
				location.hash = myPost.url.substr(myPost.url.lastIndexOf("/")+1);
				document.title=title + ' » ' + myPost.title;
				$("#contentDetails").removeClass("loading");
			},
			error:function(){
				$("#contentDetails").removeClass("loading");
				document.title=title;
			}
		});
	}
	$(".newsLink").click(function(e){
		$this=$(this);
		e.preventDefault();
		if(!$(this).parent().hasClass("active")){
			$("#contentDetails").addClass("loading").css("opacity",0.3);;
			getPost($this);
		}
	});*/
});