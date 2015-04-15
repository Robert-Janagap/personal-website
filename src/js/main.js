(function($){
	var win = $(window),
		scrollTop_btn = $('.scroll_top--btn'),
		headerNav_responsive = $('.header_responsive'),
		headerNav_icon = $('.nav_icon'),
		overlay = $('.overlay'),
		scroll_top = true;

	$(window).on('resize', function(){//when the window resize
		if(win.width() <= 479){
			$('.header_logo--fixed').hide(400);
			headerNav_icon.removeClass('nav_icon--fixed');
			headerNav_responsive.css('top', '80px');
			scrollTop_btn.hide();
		}else{
			if( win.scrollTop() > 80 ){
				$('.header_logo--fixed').show(400);
				headerNav_icon.addClass('nav_icon--fixed');
				headerNav_responsive.css('top', '60px');
			}
		}
	}).on('scroll', function(){
		//when the window scroll down
		//view the fixed nav icon button
		if( win.scrollTop() > 80 ){
			//if the layout is phone
			if(win.width() <= 479){
				scroll_top = false;
			}else{
				$('.header_logo--fixed').show(400);
				headerNav_icon.addClass('nav_icon--fixed');
				headerNav_responsive.css('top', '60px');
				scroll_top = true;
			}
		}else{//when the window scroll up
			//if the window greater the 960px
			if(win.width() >= 960){
				headerNav_responsive.slideUp(400);
				overlay.fadeOut(400);
				headerNav_icon.removeClass('nav_icon--click');
			}
			$('.header_logo--fixed').slideUp(300);
			headerNav_icon.removeClass('nav_icon--fixed');
			headerNav_responsive.css('top', '80px');
		}
		//scroll top button toggle
		(win.scrollTop() > 500 && scroll_top) ? scrollTop_btn.fadeIn(600) : scrollTop_btn.fadeOut(600);

	});

	headerNav_icon.on('click', function(e){
		e.preventDefault();
		headerNav_responsive.slideToggle(300);
		$(this).toggleClass('nav_icon--click');
		overlay.fadeToggle(300);
	});

	overlay.on('click', function(e){
		e.preventDefault();
		$(this).fadeOut(600);
		headerNav_responsive.slideUp(400);
		headerNav_icon.removeClass('nav_icon--click');
	});


	$('.scroll_top--btn').on('click',function(){
		$("html, body").animate({
			scrollTop: 0
		}, 600);
	});
})(jQuery);