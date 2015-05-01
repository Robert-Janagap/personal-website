(function($){
	$('.nav_icon').on('click', function(e){
		e.preventDefault();
		$('.header_responsive').slideToggle(300);
		$(this).toggleClass('nav_icon--click');
		$('.overlay').fadeToggle(300);
	});

	$('.overlay').on('click', function(e){
		e.preventDefault();
		$(this).fadeOut(600);
		$('.header_responsive').slideUp(400);
		$('.nav_icon').removeClass('nav_icon--click');
	});


	$('.scroll_top--btn').on('click',function(){
		$("html, body").animate({
			scrollTop: 0
		}, 600);
	});
})(jQuery);