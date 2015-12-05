(function(){
	var aniEndName = (function() {
      var eleStyle = document.createElement('div').style;
      var verdors = ['a', 'webkitA', 'MozA', 'OA', 'msA'];
      var endEvents = ['animationend', 'webkitAnimationEnd', 'animationend', 'oAnimationEnd', 'MSAnimationEnd'];
      var animation;
      for (var i = 0, len = verdors.length; i < len; i++) {
        animation = verdors[i] + 'nimation';
        if (animation in eleStyle) {
            return endEvents[i];
        }
      }
      return 'animationend';
  }());

	$('.demo').on('click', function(){
		$('.rotate').toggleClass('active');
		$('.circle').toggleClass('active');
		if($('.nav').width() > 99) {
			$('.icon').hide();
			$('.nav').addClass('active1').removeClass('active');
		} else {
			$('.nav').addClass('active').removeClass('active1');
		}
	});

	$('.nav').on(aniEndName, function(){
		$(this).hasClass('active1') ? $(this).removeClass('active1') : '';
		$('.nav').width() > 99 ? $('.icon').css('display', 'inline-block') : '';
	});
})();