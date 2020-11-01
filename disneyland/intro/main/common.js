$(document).ready(function(){
		$(window).scrollTop(6480);
		$("#bg_color2").css({'opacity':'1','background':'url("bg0.jpg") center center no-repeat'});
		$("#bg_color1").css({'opacity':'1','background':'url("bg0.jpg") center center no-repeat'});

//////////////// 스크롤 시 슬라이드 메뉴 변경 ////////////////
		$(window).scroll(function(){
			page_scroll = $(window).scrollTop();
			ul_num = $(this).index();
			if( page_scroll >= 0 && page_scroll < 506 ){
				$('#slidemenu>ul').eq(0).children('li').children('img').attr('src','slide1_a.png')
				$('#slidemenu>ul').eq(1).children('li:eq(0)').children('img').attr('src','slide2.png');
				$('#slidemenu>ul').eq(2).children('li:eq(0)').children('img').attr('src','slide3.png');
				$('#slidemenu>ul').eq(3).children('li:eq(0)').children('img').attr('src','slide4.png');
				$('#slidemenu>ul').eq(4).children('li:eq(0)').children('img').attr('src','slide5.png');
				$('#slidemenu>ul').eq(5).children('li:eq(0)').children('img').attr('src','slide6.png');
				$('#line .line_a').eq(0).children('li:nth-child(2)').stop().animate({top:0},200)
				$('#line .line_a').eq(0).siblings().children('li:nth-child(2)').stop().animate({top:100},50)		
			}
			else if( page_scroll >= 506 && page_scroll < 1606 ){
				$('#slidemenu>ul').eq(1).children('li').children('img').attr('src','slide2_a.png')
				$('#slidemenu>ul').eq(0).children('li:eq(0)').children('img').attr('src','slide1.png');
				$('#slidemenu>ul').eq(2).children('li:eq(0)').children('img').attr('src','slide3.png');
				$('#slidemenu>ul').eq(3).children('li:eq(0)').children('img').attr('src','slide4.png');
				$('#slidemenu>ul').eq(4).children('li:eq(0)').children('img').attr('src','slide5.png');
				$('#slidemenu>ul').eq(5).children('li:eq(0)').children('img').attr('src','slide6.png');
				$('#line .line_a').eq(1).children('li:nth-child(2)').stop().animate({top:0},200)
				$('#line .line_a').eq(1).siblings().children('li:nth-child(2)').stop().animate({top:100},50)	
			}
			else if ( page_scroll >= 1606 && page_scroll < 2706 )
			{	$('#slidemenu>ul').eq(2).children('li').children('img').attr('src','slide3_a.png')
				$('#slidemenu>ul').eq(1).children('li:eq(0)').children('img').attr('src','slide2.png');
				$('#slidemenu>ul').eq(0).children('li:eq(0)').children('img').attr('src','slide1.png');
				$('#slidemenu>ul').eq(3).children('li:eq(0)').children('img').attr('src','slide4.png');
				$('#slidemenu>ul').eq(4).children('li:eq(0)').children('img').attr('src','slide5.png');
				$('#slidemenu>ul').eq(5).children('li:eq(0)').children('img').attr('src','slide6.png');
				$('#line .line_a').eq(2).children('li:nth-child(2)').stop().animate({top:0},200)
				$('#line .line_a').eq(2).siblings().children('li:nth-child(2)').stop().animate({top:100},50)
			}
			else if ( page_scroll >= 2706 && page_scroll < 3806 )
			{	$('#slidemenu>ul').eq(3).children('li').children('img').attr('src','slide4_a.png')
				$('#slidemenu>ul').eq(1).children('li:eq(0)').children('img').attr('src','slide2.png');
				$('#slidemenu>ul').eq(2).children('li:eq(0)').children('img').attr('src','slide3.png');
				$('#slidemenu>ul').eq(0).children('li:eq(0)').children('img').attr('src','slide1.png');
				$('#slidemenu>ul').eq(4).children('li:eq(0)').children('img').attr('src','slide5.png');
				$('#slidemenu>ul').eq(5).children('li:eq(0)').children('img').attr('src','slide6.png');
				$('#line .line_a').eq(3).children('li:nth-child(2)').stop().animate({top:0},200)
				$('#line .line_a').eq(3).siblings().children('li:nth-child(2)').stop().animate({top:100},50)
			}
			else if ( page_scroll >= 3806 && page_scroll < 4906 )
			{	$('#slidemenu>ul').eq(4).children('li').children('img').attr('src','slide5_a.png')
				$('#slidemenu>ul').eq(1).children('li:eq(0)').children('img').attr('src','slide2.png');
				$('#slidemenu>ul').eq(2).children('li:eq(0)').children('img').attr('src','slide3.png');
				$('#slidemenu>ul').eq(3).children('li:eq(0)').children('img').attr('src','slide4.png');
				$('#slidemenu>ul').eq(0).children('li:eq(0)').children('img').attr('src','slide1.png');
				$('#slidemenu>ul').eq(5).children('li:eq(0)').children('img').attr('src','slide6.png');
				$('#line .line_a').eq(4).children('li:nth-child(2)').stop().animate({top:0},200)
				$('#line .line_a').eq(4).siblings().children('li:nth-child(2)').stop().animate({top:100},50)
			}
			else if ( page_scroll >= 4906 )
			{	$('#slidemenu>ul').eq(5).children('li').children('img').attr('src','slide6_a.png')
				$('#slidemenu>ul').eq(1).children('li:eq(0)').children('img').attr('src','slide2.png');
				$('#slidemenu>ul').eq(2).children('li:eq(0)').children('img').attr('src','slide3.png');
				$('#slidemenu>ul').eq(3).children('li:eq(0)').children('img').attr('src','slide4.png');
				$('#slidemenu>ul').eq(4).children('li:eq(0)').children('img').attr('src','slide5.png');
				$('#slidemenu>ul').eq(0).children('li:eq(0)').children('img').attr('src','slide1.png');
				$('#line .line_a').eq(5).children('li:nth-child(2)').stop().animate({top:0},200)
				$('#line .line_a').eq(5).siblings().children('li:nth-child(2)').stop().animate({top:100},50)
			}
		});
//////////////// 스크롤 시 배경 색, 슬라이드 메뉴 변경 ////////////////
//////////////// ENTERTAINMENT 스크롤바 적용 ////////////////
		op_num = 1;
		color_page = 1;
		section5 = 0;
		section5_left = 0;
		$('#section5 #wrap5_slidewrap').mouseenter(function(){
			section5 = 1;
			//alert(section5)
		})
		$('#section5 #wrap5_slidewrap').mouseleave(function(){
			section5 = 0;
			//alert(section5)
		})
		window.onload = function () {
            $("#wrap>div").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
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
                          //  moveTop = $(this).prev().offset().left;
							op_num = op_num - 1							
							if(op_num == -1){ op_num = 0; }
							//alert('dfgdfdfg')
							if( section5 == 1){
								e.preventDefault();
							$("#wrap5_slidewrap2").stop().animate({left:-1300},500)
							}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                          //  moveTop = $(this).next().offset().left;
							op_num = op_num + 1
							if(op_num >= 36 ){ op_num = 36; }
							if( section5 == 1){
								e.preventDefault();
							$("#wrap5_slidewrap2").stop().animate({left:-100},500)
							}
						//	alert(op_num)
                        }
                    }
                    // 화면 이동 0.8초(800)
					$("#bg_color2").css({'opacity':'1','background':'url("bg'+op_num+'.jpg") center center no-repeat'});
					$("#bg_color1").css({'opacity':'1','background':'url("bg'+(op_num-1)+'.jpg") center center no-repeat'});
                });
            });
        }

// HOME
			$('#castle1').animate({bottom:280},500)
			$('#castle2').delay(150).animate({bottom:350},600)
			$('#castle7_1').delay(1300).animate({bottom:405},600)
			$('#castle3').delay(1200).animate({bottom:380},700)
			$('#section_a2_b').delay(1450).animate({bottom:750},700)
			$('#castle4_1').delay(2000).animate({bottom:-145},700)
			$('#section_a2_a').delay(1800).animate({bottom:700},800)
			$('#castle5_1').delay(2000).animate({bottom:-45},1000)
			$('#castle5_2').delay(2200).animate({bottom:65},900)
			$('#castle5_3').delay(2400).animate({bottom:70},900)
			$('#castle6').delay(600).animate({bottom:355},500)
			$('#castle6_1').delay(700).animate({bottom:485},650)
			$('#castle7').delay(850).animate({bottom:405},500)
			$('#castle8').delay(1250).animate({bottom:330},600)
			$('#castle9').delay(1000).animate({bottom:340},400)
			$('#castle10').delay(300).animate({bottom:240},800)
		
			$('.popup_b').delay(3500).fadeIn(600)
			$('#micky').delay(3500).animate({top:80,left:10,opacity:1},200)
			$('#minnie').delay(3500).animate({top:38,right:265,opacity:1},200)
			$('#goofy').delay(3500).animate({bottom:25,right:10,opacity:1},200)
			$('#cloud1').animate({opacity:1},0,function c1(){
			$('#cloud1').animate({left:0},7000,function(){
			$('#cloud1').animate({left:-70},7000,c1)
			})
			})
			$('#cloud2').animate({opacity:1},0,function c2(){
			$('#cloud2').animate({left:200},7000,function(){
			$('#cloud2').animate({left:260},7000,c2)
			})
			})
			$('#cloud3').animate({opacity:1},0,function c3(){
			$('#cloud3').animate({right:70},7000,function(){
			$('#cloud3').animate({right:110},7000,c3)
			})
			})
			$('#ddd').mouseover(function(){
				$('#door_l').stop().animate({left:'-56px'},700)
				$('#door_r').stop().animate({right:'-50px'},700)
				$('#door .popup_b').fadeOut()
			})
			$('#ddd').mouseleave(function(){
				$('#door_l').stop().animate({left:'4px'},600)
				$('#door_r').stop().animate({right:'8px'},600)
				$('#door .popup_b').fadeIn()
			})
			// 팝업창
			$('#popup ul:nth-child(1)').click(function(){
				$('#popup1').css({'display':'block'})
				$('#popupb').css({'display':'block'})
			})
			$('#popup ul:nth-child(2)').click(function(){
				$('#popup2').css({'display':'block'})
				$('#popupb').css({'display':'block'})
			})
			$('#popup ul:nth-child(3)').click(function(){
				$('#popup3').css({'display':'block'})
				$('#popupb').css({'display':'block'})
			})
			$('.popup1_c').mouseenter(function(){
				$('.popup1_c_1').animate({top:4},200)
				$('.popup1_c_2').animate({width:100,letterSpacing:2},200)
			})
			$('.popup1_c').mouseleave(function(){
				$('.popup1_c_1').animate({top:20},200)
				$('.popup1_c_2').animate({width:75,letterSpacing:1},300)
			})
			$('.popup1_c').click(function(){
				$('#popup1').css({'display':'none'})
				$('#popup2').css({'display':'none'})
				$('#popup3').css({'display':'none'})
				$('#popupb').css({'display':'none'})
			})

			$('#popup2 .popup_p img').click(function(){
				$('#popup_p2').css({'display':'block'})
			})
			$('#popup_p2 ul li').click(function(){
				$(this).parents('#popup_p2').css({'display':'none'})
			})
			//popup1
			$('#popup1 .popup_no ul li:eq(0)').click(function(){
				$('#popup1').hide();
				$('#popup3').show();
			})
			$('#popup1 .popup_no ul li:eq(2)').click(function(){
				$('#popup1').hide();
				$('#popup2').show();
			})
			//popup2
			$('#popup2 .popup_no li:eq(0)').click(function(){
				$('#popup2').hide();
				$('#popup1').show();
			})
			$('#popup2 .popup_no li:eq(2)').click(function(){
				$('#popup2').hide();
				$('#popup3').show();
			})
			//popup3
			$('#popup3 .popup_no li:eq(0)').click(function(){
				$('#popup3').hide();
				$('#popup2').show();
			})
			$('#popup3 .popup_no li:eq(2)').click(function(){
				$('#popup3').hide();
				$('#popup1').show();
			})
			// 비디오 재생
			vid = $('#video1 video').get(0);
			$('#ddd').click(function(){
				$('#section1 #video1').css({'display':'block'})
				$('#section1 #video1_close').css({'display':'block'})
				vid.play();
			})
			// 비디오 닫기
			$('#video1_close').click(function(){
				$('#section1 #video1').css({'display':'none'})
				$('#video1').html('<video src="disney.mp4" loop="loop" controls="controls"></video>')
				$('#section1 #video1_close').css({'display':'none'})
				vid = $('#video1 video').get(0);
				vid.currentTime = 0; 
			})
			$('#popup3 .popup_p #email span').animate({opacity:1},0,function p1(){
			$('#popup3 .popup_p #email span').animate({right:13},700,function(){
			$('#popup3 .popup_p #email span').animate({right:18},700,p1)
			})
			})
			
// THEME PARK
			// land 스크롤 시 이미지 커지게, 컬러 변경
			$('#section2 #land li:nth-child(2)').mouseenter(function(){
				$(this).children('img').attr('src','land1.jpg');
				$(this).children('img').stop().animate({left:-15,top:-71,width:170,height:806},500)
			})
			$('#section2 #land li:nth-child(2)').mouseleave(function(){
				$(this).children('img').attr('src','land1_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:664},500)
			})
			$('#section2 #land li:nth-child(3)').mouseenter(function(){
				$(this).children('img').attr('src','land2.jpg');
				$(this).children('img').stop().animate({left:-15,top:-66.5,width:170,height:752},500)
			})
			$('#section2 #land li:nth-child(3)').mouseleave(function(){
				$(this).children('img').attr('src','land2_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:619},500)
			})
			$('#section2 #land li:nth-child(4)').mouseenter(function(){
				$(this).children('img').attr('src','land3.jpg');
				$(this).children('img').stop().animate({left:-15,top:-67,width:170,height:756},500)
			})
			$('#section2 #land li:nth-child(4)').mouseleave(function(){
				$(this).children('img').attr('src','land3_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:622},500)
			})
			$('#section2 #land li:nth-child(5)').mouseenter(function(){
				$(this).children('img').attr('src','land4.jpg');
				$(this).children('img').stop().animate({left:-15,top:-67,width:170,height:756},500)
			})
			$('#section2 #land li:nth-child(5)').mouseleave(function(){
				$(this).children('img').attr('src','land4_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:622},500)
			})
			$('#section2 #land li:nth-child(6)').mouseenter(function(){
				$(this).children('img').attr('src','land5.jpg');
				$(this).children('img').stop().animate({left:-15,top:-67,width:170,height:756},500)
			})
			$('#section2 #land li:nth-child(6)').mouseleave(function(){
				$(this).children('img').attr('src','land5_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:622},500)
			})
			$('#section2 #land li:nth-child(7)').mouseenter(function(){
				$(this).children('img').attr('src','land6.jpg');
				$(this).children('img').stop().animate({left:-15,top:-67,width:170,height:756},500)
			})
			$('#section2 #land li:nth-child(7)').mouseleave(function(){
				$(this).children('img').attr('src','land6_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:622},500)
			})
			$('#section2 #land li:nth-child(8)').mouseenter(function(){
				$(this).children('img').attr('src','land7.jpg');
				$(this).children('img').stop().animate({left:-15,top:-67,width:170,height:756},500)
			})
			$('#section2 #land li:nth-child(8)').mouseleave(function(){
				$(this).children('img').attr('src','land7_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:622},500)
			})
			$('#section2 #land li:nth-child(9)').mouseenter(function(){
				$(this).children('img').attr('src','land8.jpg');
				$(this).children('img').stop().animate({left:-15,top:-67,width:170,height:756},500)
			})
			$('#section2 #land li:nth-child(9)').mouseleave(function(){
				$(this).children('img').attr('src','land8_.jpg');
				$(this).children('img').stop().animate({left:0,top:0,width:140,height:622},500)
			})
			// 구름 움직이기
			$('#section2 #cloud_img div:nth-child(1)').animate({opacity:1},0,function l1(){
			$('#section2 #cloud_img div:nth-child(1)').animate({left:-50},7000,function(){
			$('#section2 #cloud_img div:nth-child(1)').animate({left:-100},7000,l1)
			})
			})
			$('#section2 #cloud_img div:nth-child(2)').animate({opacity:1},0,function l2(){
			$('#section2 #cloud_img div:nth-child(2)').animate({right:0},8000,function(){
			$('#section2 #cloud_img div:nth-child(2)').animate({right:-50},8000,l2)
			})
			})

// TICKET
			// 구름 움직이기
			$('#section3 #cloud_3').animate({opacity:1},0,function t1(){
			$('#section3 #cloud_3').animate({right:90},7000,function(){
			$('#section3 #cloud_3').animate({right:130},7000,t1)
			})
			})
			$('#section3 #wrap_3 li:nth-child(2) #ticket1 .button').click(function(){
				$('#section3 #wrap_3 li:nth-child(2) #ticket1').css({'display':'none'})
				$('#section3 #wrap_3 li:nth-child(2) #ticket2').css({'display':'block'})
			})
			// 예약 버튼 눌렀을 때 티켓 창 변경
			$('#section3 #wrap_3 li:nth-child(2) #ticket2 dl dt').click(function(){
				$(this).css({'background-color':'#08275c'})
				$(this).siblings().css({'background-color':'rgba(0,0,0,0)'})
				$('#section3 #wrap_3 li:nth-child(2) #ticket_n').animate({top:230},700)
				$('#section3 #wrap_3 li:nth-child(2) #ticket_n').animate({'opacity':'1'},500)
				$('#section3 #wrap_3 li:nth-child(2) #ticket_y').animate({top:330},500)
			})
			$('#ticket2 img:nth-child(3)').click(function(){
				$('#ticket2').css({'display':'none'})
				$('#ticket1').css({'display':'block'})
			})

// CHARACTERS
			// 이미지 hover, 클릭 시 텍스트 창 이미지 변경
			$('#sec4_img li').mouseenter(function(){
				$(this).stop().animate({bottom:10},300)
			})
			$('#sec4_img li').mouseleave(function(){
				$(this).stop().animate({bottom:0},300)
			})
			$('#sec4_img li').eq(0).click(function(){
				$('#sec4_text_img').hide().fadeIn(300).css({'background':'url(ch_textimg1.jpg) center center no-repeat','background-size':'cover'})
			})
			$('#sec4_img li').eq(1).click(function(){
				$('#sec4_text_img').hide().fadeIn(300).css({'background':'url(ch_textimg2.jpg) center center no-repeat','background-size':'cover'})
			})
			$('#sec4_img li').eq(2).click(function(){
				$('#sec4_text_img').hide().fadeIn(300).css({'background':'url(ch_textimg3.png) center center no-repeat','background-size':'cover'})
			})
			$('#sec4_img li').eq(3).click(function(){
				$('#sec4_text_img').hide().fadeIn(300).css({'background':'url(ch_textimg4.png) center center no-repeat','background-size':'cover'})
			})
			$('#sec4_button_wrap').mouseenter(function(){
				$('#sec4_button').stop().animate({width:140,height:140},300)
				$('#sec4_button_a li:nth-child(2)').stop().show().animate({left:112},500)
			})
			$('#sec4_button_wrap').mouseleave(function(){
				$('#sec4_button').stop().animate({width:160,height:160},300)
				$('#sec4_button_a li:nth-child(2)').stop().hide().animate({left:0},500)
			})

// ENTERTAINMENT
			// 이미지 박스 hover
			$('#wrap5_slide li').mouseenter(function(){
				$(this).children('div').children('img').stop().animate({left:-15,top:-8,width:430,height:238},500)
				$(this).children('h3').stop().animate({bottom:67},250)
				$(this).children('p').stop().delay(20).animate({bottom:7},250)
				// 배경 이미지 변경
				slide5num = $(this).index()*-2040;
				$('#section5_img_slide').stop().animate({'left':slide5num},300)
			})
			$('#wrap5_slide li').mouseleave(function(){
				$(this).children('div').children('img').stop().animate({left:0,top:0,width:400,height:222},500)
				$(this).children('h3').stop().animate({bottom:75},250)
				$(this).children('p').stop().delay(20).animate({bottom:15},250)
			})

// GALLERY
			// 화살표 움직이기
			$('#sec6_box2 h5:nth-child(1)').mouseenter(function(){
				$('#sec6_box2 h5:nth-child(1)').stop().animate({rotate:'3deg','top':'0'},500)
				$('#sec6_box2 h5:nth-child(1)').css({'border':'1px solid #fff'})
			})
			$('#sec6_box2 h5:nth-child(1)').mouseleave(function(){
				$('#sec6_box2 h5:nth-child(1)').stop().animate({rotate:'0deg','top':'5'},500)
				$('#sec6_box2 h5:nth-child(1)').css({'border':'none'})
			})
			$('#sec6_box2 h5:nth-child(2)').mouseenter(function(){
				$('#sec6_box2 h5:nth-child(2)').stop().animate({rotate:'-5deg','bottom':'3'},500)
				$('#sec6_box2 h5:nth-child(2)').css({'border':'1px solid #fff'})
			})
			$('#sec6_box2 h5:nth-child(2)').mouseleave(function(){
				$('#sec6_box2 h5:nth-child(2)').stop().animate({rotate:'0deg','bottom':'0'},500)
				$('#sec6_box2 h5:nth-child(2)').css({'border':'none'})
			})
			// box 눌렀을 때 선, 글자 변경시키기
			$('#sec6_box1>.sec6_box').click(function(){
				$('#sec6_box1>div li:nth-child(2)').animate({'left':'-100px'},200)
				$(this).children('ul').children('li:nth-child(2)').stop().animate({'left':'0'},200)
				$(this).children('div').animate({'top':'5','opacity':'1'},200)
				$(this).siblings().children('div').animate({'top':'10','opacity':'0.6'},200)
			})
			
			//숫자, 화살표 눌렀을 때 이미지 변경시키기
			num = 0;
			$('#sec6_box1>div').click(function(){
				div_num = $(this).index();					
				if(div_num==0){$('#sec6_bg').children('video').show()	}
				else { $('#sec6_bg').children('video').hide() }
				$('#sec6_bg').css({'background':'url(entertainment/'+(div_num+1)+'.jpg)','background-size':'cover'}).hide().fadeIn(300)
				num = div_num;
			})
			// 왼쪽 화살표
			$('#sec6_box2 h5:nth-child(1)').click(function(){
				if(num<=0){num=10}
				num = num -1;				
				if(num==0){$('#sec6_bg').children('video').show()}
				else { $('#sec6_bg').children('video').hide() }
				$('#sec6_bg').css({'background':'url(entertainment/'+(num+1)+'.jpg)','background-size':'cover'}).hide().fadeIn(300)
				$('#sec6_box1>.sec6_box').eq(num).children('ul').children('li:nth-child(2)').stop().animate({'left':'0'},200)
				$('#sec6_box1>.sec6_box').eq(num).siblings().children('ul').children('li:nth-child(2)').stop().animate({'left':'-100'},200)
				$('#sec6_box1>.sec6_box').eq(num).children('div').stop().animate({'top':'5','opacity':'1'},200)
				$('#sec6_box1>.sec6_box').eq(num).siblings().children('div').animate({'top':'10','opacity':'0.6'},200)
			})
			// 오른쪽 화살표
			$('#sec6_box2 h5:nth-child(2)').click(function(){
				if(num>=9){num=-1}
				num = num + 1;			
				if(num==0){$('#sec6_bg').children('video').show()}
				else { $('#sec6_bg').children('video').hide() }
				$('#sec6_bg').css({'background':'url(entertainment/'+(num+1)+'.jpg)','background-size':'cover'}).hide().fadeIn(300)
				$('#sec6_box1>.sec6_box').eq(num).children('ul').children('li:nth-child(2)').stop().animate({'left':'0'},200)
				$('#sec6_box1>.sec6_box').eq(num).siblings().children('ul').children('li:nth-child(2)').stop().animate({'left':'-100'},200)
				$('#sec6_box1>.sec6_box').eq(num).children('div').stop().animate({'top':'5','opacity':'1'},200)
				$('#sec6_box1>.sec6_box').eq(num).siblings().children('div').animate({'top':'10','opacity':'0.6'},200)
			})

// SLIDE MENU
			// 메뉴 목록창 나오기
			m1 = 1;
			$('#slidemenu_wrap .circle').click(function(){
				if ( m1 == 1 ){
				$('#slidemenu_n').css({'display':'block'})
				$('#slidemenu_n_1').animate({right:0},200)
				$('#slidemenu_n_2').delay(200).animate({right:0},200)
				$('#slidemenu_n_1 li:nth-child(1)').delay(200).animate({marginLeft:100},300)
				$('#slidemenu_n_1 li:nth-child(2)').delay(300).animate({marginLeft:100},300)
				$('#slidemenu_n_1 li:nth-child(3)').delay(400).animate({marginLeft:100},300)
				$('#slidemenu_n_1 li:nth-child(4)').delay(500).animate({marginLeft:100},300)
				$('#slidemenu_n_1 li:nth-child(5)').delay(600).animate({marginLeft:100},300)
				$('#slidemenu_n_1 li:nth-child(6)').delay(700).animate({marginLeft:100},300)
				$('#slidemenu_wrap .circle').animate({right:300},200)
				$('#slidemenu_wrap .circle').css({'background-color':'#fff'})
				$('#slidemenu_wrap .circle ul').animate({top:12})
				$('#slidemenu_wrap .circle li').css({'background-color':'#6899dd'})
				$('#slidemenu_wrap .circle li:nth-child(1)').animate({'rotate':'-45deg'},100)
				$('#slidemenu_wrap .circle li:nth-child(2)').css({'display':'none'})
				$('#slidemenu_wrap .circle li:nth-child(3)').animate({'rotate':'45deg','marginTop':'-1px'},100)
				m1 = 2;
				}
				// 메뉴 목록창 숨기기
				else if ( m1 == 2 ){ 
				$('#slidemenu_n_2').animate({'right':'-5%'},300)
				$('#slidemenu_n_1 li').animate({marginLeft:320},300)
				$('#slidemenu_n_1').delay(200).animate({'right':'-17.3%'},200,function(){	
				$('#slidemenu_n').css({'display':'none'})
				})
				
				$('#slidemenu_wrap .circle').animate({right:32},200)
				$('#slidemenu_wrap .circle').css({'background-color':'rgba(255,255,255,0.3)'})
				$('#slidemenu_wrap .circle ul').animate({top:0})
				$('#slidemenu_wrap .circle li').css({'background-color':'#fff'})
				$('#slidemenu_wrap .circle li:nth-child(1)').delay(100).animate({'rotate':'0deg'},50)
				$('#slidemenu_wrap .circle li:nth-child(2)').delay(100).css({'display':'block'})
				$('#slidemenu_wrap .circle li:nth-child(3)').delay(100).animate({'rotate':'0deg','marginTop':'0'},50)
				m1 = 1;
				}
			})
			// 메뉴 글자 누르면 해당 슬라이드로 이동하기
			$('#slidemenu_n>ul li').click(function(){
				li_num = $(this).index()+1;
				if( li_num == 1 ){ $('body,html').animate({'scrollTop':'0'},500) }
				else if ( li_num == 2 ){ $('body,html').animate({'scrollTop':'1106'},500) }
				else if ( li_num == 3 ){ $('body,html').animate({'scrollTop':'2206'},500) }
				else if ( li_num == 4 ){ $('body,html').animate({'scrollTop':'3306'},500) }
				else if ( li_num == 5 ){ $('body,html').animate({'scrollTop':'4406'},500) }
				else if ( li_num == 6 ){ $('body,html').animate({'scrollTop':'6480'},500) }			
				$('#slidemenu_wrap .circle').animate({right:32},200)
				$('#slidemenu_wrap .circle').css({'background-color':'rgba(255,255,255,0.3)'})
				$('#slidemenu_wrap .circle ul').animate({top:0})
				$('#slidemenu_wrap .circle li').css({'background-color':'#fff'})
				$('#slidemenu_wrap .circle li:nth-child(1)').delay(100).animate({'rotate':'0deg'},50)
				$('#slidemenu_wrap .circle li:nth-child(2)').delay(100).css({'display':'block'})
				$('#slidemenu_wrap .circle li:nth-child(3)').delay(100).animate({'rotate':'0deg','marginTop':'0'},50)
				$('#slidemenu_n').hide()
			})
			// 슬라이드메뉴 바(원)
			$('.circle').mouseenter(function(){
				$('#slidemenu_wrap .circle').css({'background-color':'#fff'})
				$('#slidemenu_wrap .circle li').css({'background-color':'#6899dd'})
			})
			$('.circle').mouseleave(function(){
				if(m1==1){
				$('#slidemenu_wrap .circle').css({'background-color':'rgba(255,255,255,0.3)'})
				$('#slidemenu_wrap .circle li').css({'background-color':'#6899dd'})
				}
			})
			// 슬라이드메뉴 글자, 숫자 색상 변경
			$('#slidemenu_n_1 li').mouseenter(function(){
				$(this).css({'color':'#000'})
				mn_num = $(this).index()
				$('#slidemenu_n_2 li').eq(mn_num).css({'color':'#18437e'})
			})
			$('#slidemenu_n_1 li').mouseleave(function(){
				$(this).css({'color':'#fff'})
				mn_num = $(this).index()
				$('#slidemenu_n_2 li').eq(mn_num).css({'color':'#405d83'})
			})
			$('#slidemenu_n_1 li').click(function(){
				$('#slidemenu_n_1').animate({right:0},200)
				$('#slidemenu_n_2').delay(200).animate({right:0},300)
			})
			
			// 버튼 클릭시 슬라이드 움직이기
			$('#slidemenu>ul').click(function(){
				ul_num = $(this).index();
				if( ul_num == 1 ){ $('body,html').animate({'scrollTop':'0'},500) }
				else if ( ul_num == 2 ){ $('body,html').animate({'scrollTop':'1106'},500) ; 
				op_num = 29;
				$("#bg_color2").css({'opacity':'1','background':'url("bg'+op_num+'.jpg") center center no-repeat'});
				$("#bg_color1").css({'opacity':'1','background':'url("bg'+(op_num-1)+'.jpg") center center no-repeat'});
				}
				else if ( ul_num == 3 ){ $('body,html').animate({'scrollTop':'2206'},500) ; 
				op_num = 22;
				$("#bg_color2").css({'opacity':'1','background':'url("bg'+op_num+'.jpg") center center no-repeat'});
				$("#bg_color1").css({'opacity':'1','background':'url("bg'+(op_num-1)+'.jpg") center center no-repeat'});
				}
				else if ( ul_num == 4 ){ $('body,html').animate({'scrollTop':'3306'},500) ; 
				op_num = 15;
				$("#bg_color2").css({'opacity':'1','background':'url("bg'+op_num+'.jpg") center center no-repeat'});
				$("#bg_color1").css({'opacity':'1','background':'url("bg'+(op_num-1)+'.jpg") center center no-repeat'});
				}
				else if ( ul_num == 5 ){ $('body,html').animate({'scrollTop':'4406'},500) ; 
				op_num = 8;
				$("#bg_color2").css({'opacity':'1','background':'url("bg'+op_num+'.jpg") center center no-repeat'});
				$("#bg_color1").css({'opacity':'1','background':'url("bg'+(op_num-1)+'.jpg") center center no-repeat'});
				}
				else if ( ul_num == 6 ){ $('body,html').animate({'scrollTop':'6480'},500) ;  
				op_num = 1;
				$("#bg_color2").css({'opacity':'1','background':'url("bg'+op_num+'.jpg") center center no-repeat'});
				$("#bg_color1").css({'opacity':'1','background':'url("bg'+(op_num-1)+'.jpg") center center no-repeat'});
				}			
				$('#line .line_a').eq(ul_num-1).children('li:nth-child(2)').animate({top:0},500)
				$('#line .line_a').eq(ul_num-1).siblings().children('li:nth-child(2)').animate({top:100},50)
				$('#slidemenu>ul').eq(0).children('li:eq(0)').children('img').attr('src','slide1.png');
				$('#slidemenu>ul').eq(1).children('li:eq(0)').children('img').attr('src','slide2.png');
				$('#slidemenu>ul').eq(2).children('li:eq(0)').children('img').attr('src','slide3.png');
				$('#slidemenu>ul').eq(3).children('li:eq(0)').children('img').attr('src','slide4.png');
				$('#slidemenu>ul').eq(4).children('li:eq(0)').children('img').attr('src','slide5.png');
				$('#slidemenu>ul').eq(5).children('li:eq(0)').children('img').attr('src','slide6.png');
				$('#slidemenu>ul').eq(ul_num-1).children('li:eq(0)').children('img').attr('src','slide'+(ul_num)+'_a.png');
			})

// 상단 메뉴 슬라이드
			$('#section1 .menu #arrow li:nth-child(1)').click(function(){
				$('body,html').animate({'scrollTop':'0'})
			})
			$('#section1 .menu #arrow li:nth-child(3)').click(function(){
				$('body,html').animate({'scrollTop':'4406'})	
			})
			$('#section2 .menu #arrow li:nth-child(1)').click(function(){
				$('body,html').animate({'scrollTop':'6480'})
			})
			$('#section2 .menu #arrow li:nth-child(3)').click(function(){
				$('body,html').animate({'scrollTop':'3306'})
			})
			$('#section3 .menu #arrow li:nth-child(1)').click(function(){
				$('body,html').animate({'scrollTop':'4406'})
			})
			$('#section3 .menu #arrow li:nth-child(3)').click(function(){
				$('body,html').animate({'scrollTop':'2206'})
			})
			$('#section4 .menu #arrow li:nth-child(1)').click(function(){
				$('body,html').animate({'scrollTop':'3306'})
			})
			$('#section4 .menu #arrow li:nth-child(3)').click(function(){
				$('body,html').animate({'scrollTop':'1106'})
			})
			$('#section5 .menu #arrow li:nth-child(1)').click(function(){
				$('body,html').animate({'scrollTop':'2206'})
			})
			$('#section5 .menu #arrow li:nth-child(3)').click(function(){
				$('body,html').animate({'scrollTop':'0'})
			})
			$('#section6 .menu #arrow li:nth-child(1)').click(function(){
				$('body,html').animate({'scrollTop':'1106'})
			})
			$('#section6 .menu #arrow li:nth-child(3)').click(function(){
				$('body,html').animate({'scrollTop':'6480'})
			})
//			load
			$('#land li:nth-child(2)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme1.html'
			})
			$('#land li:nth-child(3)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme2.html'
			})
			$('#land li:nth-child(4)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme3.html'
			})
			$('#land li:nth-child(5)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme4.html'
			})
			$('#land li:nth-child(6)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme5.html'
			})
			$('#land li:nth-child(7)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme6.html'
			})
			$('#land li:nth-child(8)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme7.html'
			})
			$('#land li:nth-child(9)').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='theme8.html'
			})
			$('#sec4_button_wrap').click(function(){
			//var newWindow = window.open("about:blank");
			location.href='character.html'
			})
		});
