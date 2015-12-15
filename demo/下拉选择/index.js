// 获取父节点中含有avtive类的内容
var activeHtml = function(obj){
	// 循环查找父节点
	if($(obj).parent().parent().hasClass('active')) {
		return activeHtml($(obj).parent().parent()) + ' / ' + $(obj).children('p').html();
	} else {
		return $(obj).children('p').html();
	}
};

// 菜单的显隐start
$('.yg-select-val').on('click', function(){
	$(this).toggleClass('active');
	$('.yg-select-list').toggle();
});
// 菜单的显隐end

// 次级菜单的显隐start
$('.yg-select-list p').hover(function(){
	var par = $(this).parent();
	par.parent().find('.active').each(function(){
		$(this).hasClass('active') ? $(this).removeClass('active') : '';
	});
	par.addClass('active');
}).on('click', function(){
	// 选中事件
	var this_select = $(this).parents('.yg-select-list'),
			html = activeHtml($(this).parent()),
			val = $(this).parent().data('desc');

	this_select.find('li').each(function(){
		$(this).hasClass('active') ? $(this).removeClass('active') : '';
	});
	$(this).parents('.yg-select').find('.yg-select-val span').html(html);
	$(this).parents('.yg-select').find('input').val(val);
	$('.yg-select-list').hide();
});

$('.yg-select-list').on('mouseleave', function(){
	$(this).parent().removeClass('active');
})
// 次级菜单的显隐end