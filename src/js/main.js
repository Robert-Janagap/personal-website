(function($){
	var win = $(window),
		scrollTop_btn = $('.scroll_top--btn'),
		headerNav_responsive = $('.header_responsive'),
		headerNav_icon = $('.nav_icon'),
		overlay = $('.overlay');

	$(window).on('scroll', function(){

		(win.scrollTop() > 500) ? scrollTop_btn.fadeIn(600) : scrollTop_btn.fadeOut(600);

		if( win.scrollTop() > 80 ){
			$('.header--fixed').show(400);
			headerNav_icon.addClass('nav_icon--fixed');
			headerNav_responsive.css('top', '60px');
		}else{
			if(win.width() >= 960){
				headerNav_responsive.slideUp(400);
				overlay.fadeOut(400);
				headerNav_icon.removeClass('nav_icon--click');
			}
			$('.header--fixed').hide(400);
			headerNav_icon.removeClass('nav_icon--fixed');
			headerNav_responsive.css('top', '80px');
		}
	});

	headerNav_icon.on('click', function(e){
		e.preventDefault();
		headerNav_responsive.slideToggle();
		$(this).toggleClass('nav_icon--click');
		overlay.fadeToggle(600);
	});

	overlay.on('click', function(e){
		e.preventDefault();
		$(this).fadeOut(600);
		$('.header--fixed').hide(400);
		headerNav_responsive.slideUp(400);
		headerNav_icon.removeClass('nav_icon--fixed');
	});


	$('.scroll_top--btn').on('click',function(){
		$("html, body").animate({
			scrollTop: 0
		}, 600);
	});


})(jQuery);