console.log("init");

var htd = document.querySelectorAll('.headerTd');

for(var element of htd) {
    
    var el = element;
    
    console.log("loop");
    
    //element.addEventListener('mouseenter', function(e) {onMouseEnterDelegate(el, e);}, false);
    //element.addEventListener('mouseleave', function(e) {onMouseExitDelegate(el, e);}, false);
        
}

function onMouseEnter(element, event) {
    
    console.log("enter");
    
    x = event.pageX;
    y = event.pageY;
  
    //element.style.backgroundPosition = x + " " + y;
    
    console.log(x + " " + y);
  
}

function onMouseExit(element, event) {
    
    console.log("exit");
    
    x = event.pageX;
    y = event.pageY;
  
    //element.style.backgroundPosition = x + " " + y;
    
    console.log(x + " " + y);
  
}

function onMouseEnterDelegate(element, event) {
    
    console.log("enter delegate");
    
    return onMouseEnter(element, event);
  
}

function onMouseExitDelegate(element, event) {
    
    console.log("exit delegate");
    
    return onMouseExit(element, event);
  
}