$(document).ready(function (){
	//전체메뉴
	$(".nav").mouseover(function(){
	   $(".sm").stop().slideDown(300);
	   $(".smBg").stop().slideDown(200);
	   $("#header").addClass("on");
	});
	$(".nav").mouseleave(function(){
	   $(".sm").stop().slideUp(200);
	   $(".smBg").stop().slideUp(200);
	   $("#header").removeClass("on");
	});
	
	//  모바일 아코디언 메뉴
	$('.btn-all-menu').click(function(e){
		if (!$(this).hasClass("active") ) {
			$('body').css('overflow','hidden');
			$('.header').addClass('fixed')
			$(this).addClass("active");
			$('#mb_menu').addClass("active");
		} else {
			$('body').removeAttr("style");
			$('.header').removeClass('fixed')
			$(this).removeClass("active");
			$('#mb_menu').removeClass("active");
		}
		return false;
	});

	var $target = $('#accordeon > li'),
		isClass = 'active';		
	var $targetCss = $target.attr("class");		
	if($targetCss= "active") {
		$(".active").find(".accbody").slideDown();
	}
	$target.on('click', function () {
		var _$self = $(this),
		oldClass = _$self.siblings('.' + isClass);
		if(!!oldClass) {
			oldClass.removeClass(isClass);
			$(".accbody",oldClass).slideUp();
		}
		if(!_$self.is(isClass)) {
		   _$self.addClass('active');
			$(this).find(".accbody").slideDown();
		}
		isClass = _$self.attr('class');
	});

	// scroll(header, footer event)
	var didScroll; 
	var lastScrollTop = 0; 
	var delta = 5; 
	var navbarHeight = $('#header').outerHeight();
	
	$(window).scroll(function(event){
		didScroll = true; 
	}); 
	
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		} 
	}, 250);
		
	function hasScrolled() {
		var st = $(this).scrollTop();
		// Make sure they scroll more than delta
		
		if(Math.abs(lastScrollTop - st) <= delta) 
			return; 
		
		if (st == 0){ 
			// Scroll Down 
			$("#header").removeClass('on');
			$("#header").removeClass('scroll');
			$("#header").removeClass('scroll_up');
		}else if (st > lastScrollTop && st > navbarHeight){ 
			// Scroll Down 
			$("#header").addClass('on');
			$("#header").addClass('scroll');
			$("#header").addClass('scroll_up');
			$('#header').mouseleave(function(){
				$(this).addClass('on')
			})
		}else { 
			// Scroll Up 
			if(st + $(window).height() < $(document).height()) {
				$("#header").removeClass('scroll');
				$("#header").removeClass('scroll_up');
			}
		}

		lastScrollTop = st;
			
	}

	// 모바일
	$(".onepage .section:first-child .centerDiv .title h2").delay(400).animate({bottom:0,opacity:1},400);

	// 클릭시 상단 영역으로 가기
	$('.go_top').on("click",function() {
		$('html, body').animate({scrollTop:0}, 1300, 'swing');
	});
	
	// 서브 페이지 메인 배경
	$('.sub_main').css({'transform':'scale(1)'})
		$('.sub_main').animate({opacity:1},600,function(){
		$('.sub_main_text').delay(300).animate({opacity:1}, 500 , 'swing')
	});

	// 탭메뉴
	$('.tabMenu>ul>li a').bind('click',function(){
		$('.tabMenu>ul>li a').removeClass('on');
		$(this).addClass('on');
		$('.tabMenu_sub').hide();
		var target = $(this).attr('href');
		$(target).fadeIn(700)
		//Wookmark-jQuery
		$('.video_item .item').wookmark({
			autoResize: true,
			container: $('.video_item'),
			offset: 38,
			itemWidth: 381,
			flexibleWidth: true
		});
	});
	

});

//애니메이션
wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
	}
  }
);
wow.init();

$(window).ready(function() {
chg_resize();

	$(window).resize(function() {
		chg_resize();
	});
	function chg_resize(){
		if( window.matchMedia('(max-width: 426px)').matches) {
			// <= 768
			$('.onepage .row .row_img').height($(window).width() - 50 );
			$('.onepage .row.ani .row_img.scale, .row > .ani .row_img.scale').height($(window).width() - 50 );
			$('.onepage .row.ani .row_img img').height($(window).width() - 50 );	
		}else{
			// >768
			$('.onepage .row .row_img').height($(window).width()/2);
			$('.onepage .row.ani .row_img.scale, .row > .ani .row_img.scale').height($(window).width()/2);
			$('.onepage .row.ani .row_img img').height($(window).width()/2);
		}
	}
});