$(document).ready(function(){
	$(window).scroll(function(){
                 if($(window).scrollTop()>=$(".Head").offset().top && $(window).scrollTop()<$(".Aboutme").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(0)").css("background-color","gray")
                }else if($(window).scrollTop()>=$(".Aboutme").offset().top && $(window).scrollTop()<$(".Learn").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(1)").css("background-color","gray")
                }else if($(window).scrollTop()>=$(".Learn").offset().top && $(window).scrollTop()<$(".Music").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(2)").css("background-color","gray")
                }else if($(window).scrollTop()>=$(".Music").offset().top && $(window).scrollTop()<$(".Life").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(3)").css("background-color","gray")
                }else if($(window).scrollTop()>=$(".Life").offset().top ){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(4)").css("background-color","gray")
                }
            })

	$(".nav li:eq(0)").click(function(){
		$("html,body").stop()
		$(".nav li").css("background-color","white")
		$("html,body").animate({"scrollTop":$(".Head").offset().top})
		$(".nav li:eq(0)").css("background-color","gray")
	})
	$(".nav li:eq(1)").click(function(){
		$("html,body").stop()
		$(".nav li").css("background-color","white")
		$("html,body").animate({"scrollTop":$(".Aboutme").offset().top-5})
		$(".nav li:eq(1)").css("background-color","gray")
	})
	$(".nav li:eq(2)").click(function(){
		$("html,body").stop()
		$(".nav li").css("background-color","white")
		$("html,body").animate({"scrollTop":$(".Learn").offset().top+10})
		$(".nav li:eq(2)").css("background-color","gray")
	})
	$(".nav li:eq(3)").click(function(){
		$("html,body").stop()
		$(".nav li").css("background-color","white")
		$("html,body").animate({"scrollTop":$(".Music").offset().top+10})
		$(".nav li:eq(3)").css("background-color","gray")
	})
	$(".nav li:eq(4)").click(function(){
		$("html,body").stop()
		$(".nav li").css("background-color","white")
		$("html,body").animate({"scrollTop":$(".Life").offset().top+10})
		$(".nav li:eq(4)").css("background-color","gray")
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
  	if($(window).scrollTop()>=$(".Learn").offset().top){
  		$(".gotop").fadeIn()
  	}else{
  		$(".gotop").fadeOut()
  	}
  })
})