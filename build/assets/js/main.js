!function(o){var e=o(window),i=o(".scroll_top--btn"),l=o(".header_responsive"),n=o(".nav_icon"),s=o(".overlay"),c=!0;o(window).on("resize",function(){e.width()<=479?(o(".header_logo--fixed").hide(400),n.removeClass("nav_icon--fixed"),l.css("top","80px"),i.hide()):e.scrollTop()>80&&(o(".header_logo--fixed").show(400),n.addClass("nav_icon--fixed"),l.css("top","60px"))}).on("scroll",function(){e.scrollTop()>80?e.width()<=479?c=!1:(o(".header_logo--fixed").show(400),n.addClass("nav_icon--fixed"),l.css("top","60px"),c=!0):(e.width()>=960&&(l.slideUp(400),s.fadeOut(400),n.removeClass("nav_icon--click")),o(".header_logo--fixed").slideUp(300),n.removeClass("nav_icon--fixed"),l.css("top","80px")),e.scrollTop()>500&&c?i.fadeIn(600):i.fadeOut(600)}),n.on("click",function(e){e.preventDefault(),l.slideToggle(300),o(this).toggleClass("nav_icon--click"),s.fadeToggle(300)}),s.on("click",function(e){e.preventDefault(),o(this).fadeOut(600),l.slideUp(400),n.removeClass("nav_icon--click")}),o(".scroll_top--btn").on("click",function(){o("html, body").animate({scrollTop:0},600)})}(jQuery);