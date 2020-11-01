	  window.onload = function () {
            $("#wrap>div").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
                        }
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
            });
        }
		$(document).ready(function(){
			$('#scroll img:nth-child(2)').animate({opacity:1},0,function s1(){
			$(this).animate({bottom:10},1000,function(){
			$(this).animate({bottom:0},1000,s1)
		})
		})
		$(window).scroll(function(){
			sc = $(window).scrollTop();
			if (sc > 500)
			{ 	$('#header').stop().animate({top:50,opacity:0},500)
				$('#fixed #menubar').stop().fadeIn(500)
			}
			else
			{ 	$('#fixed #menubar').stop().hide()
				$('#header').stop().animate({top:80,opacity:1},500)
			}
		})
		$('#slide_bottom ul li').click(function(){
			slide_left = $(this).index()*-940;
//			alert(slide_left)
			$('#section3_table').animate({left:slide_left},500)
			$(this).css({'background-color':'#333'}).siblings().css({'background-color':'#898989'})
		})
		$('#slide_bottom #left_box').click(function(){
			slide_left = $(this).index()*-940;
			$('#section3_table').animate({left:slide_left},500)
		})
		// 상단 메뉴
		$('#header li').eq(1).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'0'},500)
		})
		$('#header li').eq(2).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'974'},500)
		})
		$('#header li').eq(3).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'1948'},500)
		})
		$('#header li').eq(4).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'2922'},500)
		})
		// 메뉴바
		// 클릭시 메뉴창 나타나고 사라지게 하기
		$('#menubar').click(function(){
			$('#menu').show()
		})
		$('#menu h2').click(function(){
			$('#menu').hide()
		})
		// 메뉴 글자 눌렀을 때 해당 슬라이드로 이동
		$('#menulist li').eq(0).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'0'},500)
		})
		$('#menulist li').eq(1).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'974'},500)
		})
		$('#menulist li').eq(2).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'1948'},500)
		})
		$('#menulist li').eq(3).click(function(){
			$('#menu').fadeOut();
			$('body,html').animate({'scrollTop':'2922'},500)
		})
	  });