//브라우저체크
var agent = navigator.userAgent.toLowerCase();
var browser;
if (agent.indexOf('msie') > -1) {
	browser = 'ie' + agent.match(/msie (\d+)/)[1]
}else if(agent.indexOf('trident') > -1) {
	browser = 'ie11'
}else if(agent.indexOf('edge') > -1) {
	browser = 'edge'
}else if(agent.indexOf('firefox') > -1) {
	browser = 'firefox'
}else if(agent.indexOf('opr') > -1) {
	browser = 'opera'
}else if(agent.indexOf('chrome') > -1) {
	browser = 'chrome'
}else if(agent.indexOf('safari') > -1) {
	browser = 'safari'
}

new fullScroll({
	displayDots: false,
	dotsPosition: 'left',
	animateTime: 0.7,
	animateFunction: 'ease'
});

imgSizeDiv();
imgSquare();

$(window).scroll(function () {
	imgSizeDiv();
	imgSquare();
	//ie에서만 동작
	if (browser=='ie10' || browser=='ie11' || browser=='edge') {
		winHeight_scroll_ie();
	};
});

$(window).resize(function () {
	imgSizeDiv();
	imgSquare();
});

//F5 새로고침시 top에서 시작?
document.onkeydown = fkey;
document.onkeypress = fkey;
document.onkeyup = fkey;
var wasPressed = false;
function fkey(e){
	e = e || window.event;
	if(wasPressed) return;

	if(e.keyCode == 116){
		location.href = "";
	}
}

//이미지 목록 정사각형만들기
function imgSquare(){
	var itemList = ".itemList .img";
	$(itemList).height($(itemList).width());
}

//이미지 가로세로
function imgSizeDiv(){
	var divs = document.querySelectorAll(".itemList .img");
	for (var i = 0; i < divs.length; ++i) {
		var div = divs[i];
		var divAspect = div.offsetHeight / div.offsetWidth;
		//div.style.overflow = 'hidden';
		var img = div.querySelector('img');
		var imgAspect = img.height / img.width;

		if (imgAspect < divAspect) {
			// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
			var imgWidthActual = div.offsetHeight / imgAspect;
			var imgWidthToBe = div.offsetHeight / divAspect;
			var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
			img.style.cssText = 'width: auto; height: 100%; margin:0 0 0 ' + marginLeft + 'px;';
		} else {
			// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
			var imgHeightActual = div.offsetWidth * imgAspect;
			var imgHeightToBe = div.offsetWidth * divAspect;
			var marginTop = -Math.round((imgHeightActual - imgHeightToBe) / 2);
			img.style.cssText = 'width: 100%; height: auto; margin:' + marginTop + 'px 0 0 0;';
		}
	}
}

//스크롤바공간 조정하기 (ie만실행)
function winHeight_scroll_ie() {
   var diff = $(window).scrollTop() - $(".scroll_ie").offset().top;
   var mathDiff =Math.abs(diff);
   if(mathDiff >= 0 && mathDiff < 60 || diff >= 0) {
      $(".section0").hide();
      $(".section1").hide();
   } else if (diff < 0){
      $(".section0").show();
      $(".section1").show();
   }
}

// 상단 메뉴
$(document).ready(function (){
	//전체메뉴
	$('#header').mouseover(function(){
		$(this).addClass('on')
	});
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
});


//애니메이션
wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
	//  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();