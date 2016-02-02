$('button').on('click', function() {
	
	$('.on').toggleClass('off');

	if ($('button').hasClass('off')) {
		$('body').addClass('dark');
		$('.status').text('Hey, who turned off the lights?')
	}
	else {
		$('body').removeClass('dark');
		$('.status').text('Its so bright in here!')
	}
	


});

