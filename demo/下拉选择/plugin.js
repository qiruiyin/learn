// 封装一个多级下滑菜单
// 
var ygSelect = {
	defaults: {
		val: '请选择...'
	},
	init: function(data, val){
		var this_val = (typeof val == 'undefined') ? this.defaults.val : val;
		$('.yg-select1').hide();
		$('.yg-select1').after(
				'<div class="yg-select">'
					+ '<input type="hidden" title="来自于选中li的data属性" value="1"></input>'
					+ '<div class="yg-select-val">' 
						+ '<span>' + this_val + '</span>' 
						+ '<i class="yg-select-arrow"></i>' 
					+ '</div>'
			+ '</div>'
		);

		this._append($('.yg-select') ,data);

		// 绑定事件
  	this._action();
	},
	_action: function(){
		var _this = this;
		// 菜单的显隐start
		$(document.body).on('click', function(){
			$('.yg-select-val').toggleClass('active');
			$('.yg-select-list').hide();
			$('.yg-select-list li').each(function(){
				$(this).hasClass('active') ? $(this).removeClass('active') : '';
			});
		}).on('click', '.yg-select-val', function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass('active');;
			$(this).siblings('.yg-select-list').toggle();
			$('.yg-select-list li').each(function(){
				$(this).hasClass('active') ? $(this).removeClass('active') : '';
			});
		});;
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

			var this_obj = $(this),
					this_select = $(this).parents('.yg-select'),
					this_select_list = this_obj.parents('.yg-select-list'),
					html = _this._active($(this).parent()),
					val = this_obj.parent().data('desc');

			this_select.find('li').each(function(){
				$(this).hasClass('active') ? $(this).removeClass('active') : '';
			});

			this_select.find('.yg-select-val span').html(html);
			this_select.find('input').val(val);
			this_select_list.hide();
			this_select.find('.yg-select-val').removeClass('active');
		});

		$('.yg-select-list').on('mouseleave', function(){
			$(this).parent().removeClass('active');
		});
		// 次级菜单的显隐end
	},
	_active: function(obj){
		var _this = this,
				_obj = $(obj),
				_obj_parent = _obj.parent().parent();
		// 循环查找父节点
		if(_obj_parent.hasClass('active')) {
			return _this._active(_obj_parent) + ' / ' + _obj.children('p').html();
		} else {
			return _obj.children('p').html();
		}
	},
	_append: function(obj, data){
		// 创建菜单节点
		var _this = this, 
				_obj = $(obj),
				flag;
		if (typeof(data) == "undefined" || data.length==0) {
			return;
		}

		if(_obj.hasClass('yg-select')){
			_obj.append('<ul class="yg-select-list"></ul>');
		} else {
			_obj.append('<ul></ul>');
		}

		for (var str in data) {
			_obj.children('ul').append('<li><p>' + data[str].name + '</p></li>');
			if(data[str].list && data[str].list.length != 0) {
				var this_obj = _obj.children('ul').children('li:last');
				this_obj.append('<i class="yg-select-icon"></i>');
				_this._append(this_obj, data[str].list);
			};
		}
	}
};

var val = '请选择办事处',
	  str = 
	  	[
				{
					"name":"山东",
					"list":[
						{
							"name":"济南", 
							"list": [
								{"name": "长清区"},
								{"name": "长清区"},
								{"name": "长清区"},
								{"name": "长清区"}
							]
						},
						{"name":"菏泽",
							"list":[
								{"name":"牡丹区"},										
								{"name":"定陶"
								},
								{"name":"曹县"},
								{"name":"单县"}
							]
						},
						{"name":"烟台"}
					]
				},
				{
					"name":"江苏",
					"list":[
						{"name":"南京"},
						{
							"name":"苏州",
							"list":[
								{"name":"开发区"},
								{"name":"市中心"}
							]
						}
					]
				},
				{
					"name":"上海",
					"list":[
						{"name":"普陀区"},
						{"name":"徐汇区"}
					]
				}
			];

ygSelect.init(str, val);
