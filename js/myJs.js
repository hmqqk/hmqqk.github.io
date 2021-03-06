(function(){
	$('.icon').hover(function(){
		$('.tips-box').removeClass('hide');
		
	},function(){
		$('.tips-box').hover(function(){
		  $(this).removeClass('hide');
	},function(){
		$('.tips-inner').hover(function(){
		  $('.tips-box').removeClass('hide');
	},function(){
		$('.tips-box').addClass('hide');
		});
		});
		});
		
	$('.tips-inner li').hover(function(){
		$(this).css('opacity','0.4');
	},function(){
		$(this).css('opacity','0.8');
		});
		
	$("#music-control").click(function(){
		
		if($("#music-content").hasClass("hide")){
			$(this).addClass("on")
		  $("#music-content").removeClass("hide");
		}
		else{
		    $("#music-content").addClass("hide");
		    $(this).removeClass("on")
		  }
		});

 	
	//music player

	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = false,
		playlist = [
								{
									title: '微微一笑而倾城',
									cover:'/images/1.png',
									mp3: '/music/微微一笑而倾城.mp3',
									ogg: ''
						    },
						    {
									title: '有没有',
									cover: '/images/2.png',
									mp3: '/music/有没有.mp3',
									ogg: ''
						   },
						   {
									title: '刘哈哈与大先生 ',
									cover: '/images/3.png',
									mp3: '/music/刘哈哈与大先生 .mp3',
									ogg: ''
						   }
						  ];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		isPlaying = false;
	}
	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
	}
	var afterLoad = function(){
	if (autoplay == true) play();
	}

	var volume = localStorage.volume || 0.5;


	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			console.log("zhixingzhong...");
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	// Load track
	var loadMusic = function(i){
		
		var item = playlist[i],
			  newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#music-content');	
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
	
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});

	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			isPlaying = true;
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});

	})();