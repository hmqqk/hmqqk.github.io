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
		

	
	
	
	})();