$(document).ready(function(){
	

	/*$(".nav li:eq(0)").click(function(){
		$("html,body").stop()
		$(".nav li").css("background-color","white")
		$("html,body").animate({"scrollTop":$(".Head").offset().top-10})
		$(".nav li:eq(0)").css("background-color","gray")
	})*/
	$(".nav li:eq(1)").click(function(){
		$("html,body").stop()
		$("html,body").animate({"scrollTop":$(".Aboutme").offset().top-8})
	})
	$(".nav li:eq(2)").click(function(){
		$("html,body").stop()
		$("html,body").animate({"scrollTop":$(".Learn").offset().top+10})
	})
	$(".nav li:eq(3)").click(function(){
		$("html,body").stop()
		$("html,body").animate({"scrollTop":$(".Music").offset().top+10})
	})
	$(".nav li:eq(4)").click(function(){
		$("html,body").stop()
		$("html,body").animate({"scrollTop":$(".Life").offset().top+10})
	})
  $(".nav li:eq(5)").click(function(){
    $("html,body").stop()
    $("html,body").animate({"scrollTop":$(".Contact").offset().top+10})
  })
	
  //計算導覽列置中的位置
    center()
  //縮放時導覽列依舊置中
  $(window).resize(function(){
  	center()
  })
  function center(){
  	pos=$(window).height()/2-$(".nav").height()/2
  	$(".nav").css("top",pos)
  }
  
  $(".gotop").click(function(){
  	$("html,body").animate({"scrollTop":"0"})
  	n=1
  })
  $(".gotop").fadeOut(0)
  $(window).scroll(function(){
  	if($(window).scrollTop()>=$(".Head").offset().top){
  		$(".gotop").fadeIn()
  	}else{
  		$(".gotop").fadeOut()
  	}
  })
})