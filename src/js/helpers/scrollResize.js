(function($){
function scrollResize(){
	this.win = $(window);
	this.scrollTop_btn = $('.scroll_top--btn');
	this.headerNav_responsive = $('.header_responsive');
	this.headerNav_icon = $('.nav_icon');
	this.headerNav_logo = $('.header_logo--fixed');
	this.overlay = $('.overlay');
	this.scroll_top = true;
}
	scrollResize.prototype.showFixedNav = function(){
		this.headerNav_logo.show();
		this.headerNav_icon.addClass('nav_icon--fixed');
		this.headerNav_responsive.css('top', '60px');
	};
	scrollResize.prototype.hideFixedNav = function(){
		this.headerNav_logo.hide();
	 	this.headerNav_icon.removeClass('nav_icon--fixed');
	 	this.headerNav_responsive.css('top', '80px');
	};
	scrollResize.prototype.hideResponsiveNav = function(){
		this.headerNav_responsive.slideUp(400);
	 	this.overlay.fadeOut(400);
		this.headerNav_icon.removeClass('nav_icon--click');
	};

	var sr = new scrollResize();

	//when the window resize
	$(window).on('resize', function(e){
		if( sr.win.scrollTop() > 80 ){
			sr.showFixedNav();
		}else{
			sr.hideFixedNav();
			if(sr.win.width() >= 1024){
				 sr.hideResponsiveNav();
			}
		}
		//for phone layout
		 if(sr.win.width() <= 479){
		 	scrollTop_btn.hide();
		 }
	}).on('scroll', function(){
		//when the window scroll down
		//view the fixed nav icon button
		if( sr.win.scrollTop() >= 80 ){
			 sr.showFixedNav();

			//if the layout is phone no scroll up
			sr.scroll_top = (sr.win.width() <= 479) ? false : true;
		}else{
		//when the window scroll up
		//if the window greater the 960px close the fixed nav
			if( sr.win.width() >= 1024 ){
				 sr.hideResponsiveNav();
			}
			 sr.hideFixedNav();
		}
		//scroll top button toggle
		var windowScroll = (sr.win.scrollTop() > 500 && sr.scroll_top) ? sr.scrollTop_btn.fadeIn(600) : sr.scrollTop_btn.fadeOut(600);
	});
})(jQuery);