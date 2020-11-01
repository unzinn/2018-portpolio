$(document).ready(function (){
	$('#ballon1').delay(1000).fadeIn(500);
	$('#ballon1').animate({opacity:1},0,function b1(){
	$('#ballon1').animate({top:310},2000,function(){
	$('#ballon1').animate({top:350},2000,b1)
	})
	})
	$('#ballon2').delay(1000).fadeIn(500);
	$('#ballon2').delay(300).animate({opacity:1},0,function b2(){
	$('#ballon2').animate({top:295},1800,function(){
	$('#ballon2').animate({top:280},1800,b2)
	})
	})
	$('#ballon3').delay(1000).fadeIn(500);
	$('#ballon3').delay(100).animate({opacity:1},0,function b3(){
	$('#ballon3').animate({top:210},1800,function(){
	$('#ballon3').animate({top:220},1800,b3)
	})
	})
	$('#ballon4').delay(1000).fadeIn(500);
	$('#ballon4').delay(200).animate({opacity:1},0,function b4(){
	$('#ballon4').animate({top:320},1800,function(){
	$('#ballon4').animate({top:340},1800,b4)
	})
	})
	$('#ballon5').delay(1000).fadeIn(500);
	$('#ballon5').delay(400).animate({opacity:1},0,function b5(){
	$('#ballon5').animate({top:305},1800,function(){
	$('#ballon5').animate({top:280},1800,b5)
	})
	})
	
	$('#cloud1').delay(1000).fadeIn(500)
	$('#cloud1').delay(400).animate({opacity:1},0,function c1(){
	$('#cloud1').animate({left:100},8000,function(){
	$('#cloud1').animate({left:50},8000,c1)
	})
	})
	$('#cloud2').delay(1000).fadeIn(500)
	$('#cloud2').delay(400).animate({opacity:1},0,function c2(){
	$('#cloud2').animate({right:-50},8000,function(){
	$('#cloud2').animate({right:50},8000,c2)
	})
	})
	 $('#main').delay(200).animate({width:489,height:398},600,function(){
		$('#castle').animate({top:-74},800,function mmm(){
		$('#main').animate({top:140},2500,function(){
		$('#main').animate({top:123},2000,mmm)
		})
		})
	 })

	 $('#cloud4').animate({rotate:'5deg'},6000,function cd4(){
	 $('#cloud4').animate({rotate:'0deg'},6000)
	 $('#cloud4').animate({rotate:'5deg'},6000,cd4)
	 })
	 $('#cloud5').animate({rotate:'3deg'},6000,function cd5(){
	 $('#cloud5').animate({rotate:'0deg'},6000)
	 $('#cloud5').animate({rotate:'-3deg'},6000,cd5)
	 })
	
	count = 0; 
	setInterval(function(){
		count = count + 1;
		if(count>=100){ 
			window.location.assign("main/index.html")
			count = 100;
			
		}
	 $('#loding span').html(count)

	},40)
 });