var player = document.getElementById('audioPlayer');
btnPlay = document.getElementById('playerPlayButton');
btnPause = document.getElementById('playerPauseButton');
btnNoSong = document.getElementById('noSongButton');
btnDownload = document.getElementById('downloadButton');
progressBar = document.getElementById('seekBar');
progressLine = document.getElementById('progressLine');
progressThumb = document.getElementById('progressThumb');
trackDuration = document.getElementById('trackDuration');
trackProgress = document.getElementById('trackProgress');
songName = document.getElementById('songName');
elementDownload = document.getElementById('downloadElement');
var song;

player.addEventListener('timeupdate', updateProgressBar, false);

player.addEventListener('play', function() {
        
    changeButtonType(btnPlay, "pause");
  
}, false);
  
player.addEventListener('pause', function() {
        
    changeButtonType(btnPause, "play");
  
}, false);

player.addEventListener('ended', function() {
        
    this.pause();
        
}, false);

progressBar.addEventListener('click', seekE);

function seek(e, pos) {
			
    if(player.src) {
        
        if(e != null) {
            
            seekE(e);
			
        }
        
        else {
         
            var x = pos - progressBar.offsetLeft;
            
            var percent = x / progressBar.offsetWidth;
			
            player.currentTime = percent * player.duration;
        
        }
				
    }
	
}

function seekE(e) {
   
    var x = e.pageX - progressBar.offsetLeft;
       
	var percent = x / progressBar.offsetWidth;
			
	player.currentTime = percent * player.duration;
    
}

function pauseAudio() {
				
    if(player.src) {
			
		player.pause();
			
    }
  
}

function playAudio() {
				
    if(player.src) {
				
		player.play();
		
    }
	
}

function updateProgressBar() {

    var percentage = (100 / player.duration) * player.currentTime;

    progressLine.style.width = percentage + "%";
		
	progressThumb.style.left = (percentage * progressBar.offsetWidth / 100) + "px";
	
	trackProgress.textContent = secondsToTime(player.currentTime);
	
}

function changeButtonType(btn, value) {
				
    if(value == "pause") {
			
		btnPause.style.display = "inherit";
		btnPlay.style.display = "none";
		
	}
		
	else {
	
		btnPause.style.display = "none";
		btnPlay.style.display = "inherit";
				
	}
		
	btnNoSong.style.display = "none";
	
}

function setSong(song) {

	player.src = "../../music/" + song + ".mp3";
	player.load();
    player.play();
	window.song = song;
    
    elementDownload.setAttribute("href", "../../music/" + song + ".mp3");
		
	player.onloadedmetadata = function() {
				
		trackDuration.textContent = secondsToTime(player.duration);
				
	};
		
	if(!btnDownload.classList.contains("fontButton")) {
		
        btnDownload.classList.add("fontButton");
		
	}
    
    songName.textContent = song;
  
}

function secondsToTime(secs) {
								
    var sec_num = parseInt(secs, 10);
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor(sec_num / 60) % 60;
	var seconds = sec_num % 60;

	return [hours,minutes,seconds].map(v => v < 10 ? "0" + v : v)
								.filter((v,i) => v !== "00" || i > 0)
								.join(":");
																								
}

function getOffset(el) {
    
    var _x = 0;
    var _y = 0;
    
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
        
    }
    
    return {top: _y, left: _x};

}

progressThumb.sdrag(function (el, pageX, startX, pageY, startY, fix) {
    
    progressThumb.className = "progressThumb";

    if(pageX < getOffset(progressBar).left) {
            
        fix.pageX = getOffset(progressBar).left;
            
    }
        
    if(pageX > getOffset(progressBar).left + progressBar.offsetWidth) {
            
        fix.pageX = getOffset(progressBar).left + progressBar.offsetWidth;
            
    }
    
    pauseAudio();

}, function() {
    
    progressThumb.className = "progressThumbIdle";
    
    playAudio();
   
    seek(null, getOffset(progressThumb).left + 5);
    
}, 'horizontal');

$(window).scroll(function() {
    
    if($(this).scrollTop() > 1) {
        
        $('#headerMusic').addClass('stickyHeader');
        $('.playerBlockMobile').addClass('playerBlockFloating');
        
    }
      
    else {
        
        $('#headerMusic').removeClass('stickyHeader');
        $('.playerBlockMobile').removeClass('playerBlockFloating');
        
    }
      
});