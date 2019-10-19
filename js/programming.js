$(".tagJVM").hover(function() {
		
    $("#tagInfo").addClass("tagInfoShowJVM");
	$("#tagInfo").text("JVM is needed to run code in Java. Install it to run this program");
				
}, function() {
		
    $("#tagInfo").removeClass("tagInfoShowJVM");
				
});

$(".tagDev").hover(function() {
		
    $("#tagInfo").addClass("tagInfoShowDev");
	$("#tagInfo").text("I'm still working on this program. It may not work as intended");
				
}, function() {
		
    $("#tagInfo").removeClass("tagInfoShowDev");
				
});

$(".tagPlatform").hover(function() {
		
    $("#tagInfo").addClass("tagInfoShowPlatform");
	$("#tagInfo").text("These are supported platforms");
				
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