(function(){

	var w_max = '300px',
			w_min = '50px',
			status = 1,
			start = 1;

	$('.demo').on('click', function(){
		var dom_nav = $('.nav'),
				dom_icon = $('.icon');
		$(this).toggleClass('active');

		if(status && start){
			dom_nav.addClass('active');
			dom_nav.animate({width: w_max}, 1000);
			dom_icon.addClass('zoomIn');
			setTimeout(function(){
				$('.icon').css('opacity', 1);
				start = 0;
			}, 1000);
			status = 0;
		} else if(!status && !start){
			dom_nav.animate({width: w_min}, 1000);
			dom_icon.addClass('zoomOut');
			setTimeout(function(){
				dom_nav.removeClass('active');
				dom_icon.removeClass('zoomIn zoomOut');
				dom_icon.css('opacity', 0);
				start = 1;
			}, 1000);
			status = 1;
		}
	});
})();