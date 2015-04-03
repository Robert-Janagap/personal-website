(function($){
	$('.nav_icon').on('click', function(){
		$('.header_responsive').slideToggle();
	});
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 500){
			$('.scroll_top--btn').fadeIn(600);
			console.log($(window).scrollTop());
		}else{
			$('.scroll_top--btn').fadeOut(600);
			console.log($(window).scrollTop());
		}
	});
	$('.scroll_top--btn').on('click',function(){
		$("html, body").animate({
			scrollTop: 0
		}, 600);
	});
})(jQuery);