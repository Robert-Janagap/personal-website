!function(e){var o=e(window),n=e(".scroll_top--btn"),i=e(".header_responsive"),l=e(".nav_icon"),c=e(".overlay");e(window).on("scroll",function(){o.scrollTop()>500?n.fadeIn(600):n.fadeOut(600),o.scrollTop()>80?(e(".header--fixed").show(400),l.addClass("nav_icon--fixed"),i.css("top","60px")):(o.width()>=960&&(i.slideUp(400),c.fadeOut(400),l.removeClass("nav_icon--click")),e(".header--fixed").hide(400),l.removeClass("nav_icon--fixed"),i.css("top","80px"))}),l.on("click",function(o){o.preventDefault(),i.slideToggle(),e(this).toggleClass("nav_icon--click"),c.fadeToggle(600)}),c.on("click",function(o){o.preventDefault(),e(this).fadeOut(600),e(".header--fixed").hide(400),i.slideUp(400),l.removeClass("nav_icon--fixed")}),e(".scroll_top--btn").on("click",function(){e("html, body").animate({scrollTop:0},600)})}(jQuery);