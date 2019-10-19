$(".tagJVM").hover(function() {
		
    $("#tagInfo").addClass("tagInfoShowJVM");
	$("#tagInfo").text("JVM нужна для того, что бы запускать программы, написанные на Джаве. Установите ее, что бы запустить это приложение");
				
}, function() {
		
    $("#tagInfo").removeClass("tagInfoShowJVM");
				
});

$(".tagDev").hover(function() {
		
    $("#tagInfo").addClass("tagInfoShowDev");
	$("#tagInfo").text("Я все еще работаю над этой программой. Она может не работать, как задумывалось");
				
}, function() {
		
    $("#tagInfo").removeClass("tagInfoShowDev");
				
});

$(".tagPlatform").hover(function() {
		
    $("#tagInfo").addClass("tagInfoShowPlatform");
	$("#tagInfo").text("Это платформы, поддерживающие данное приложение");
				
}, function() {
		
    $("#tagInfo").removeClass("tagInfoShowPlatform");
				
});

$(window).scroll(function() {
    
    if($(this).scrollTop() > 1) {
        
        $('#headerProgramming').addClass('stickyHeader');
        
    }
      
    else {
     
        $('#headerProgramming').removeClass('stickyHeader');
        
    }
      
});