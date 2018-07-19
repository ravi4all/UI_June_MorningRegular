$("#back-to-top").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
});

$("a").click(function() {
    $('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});