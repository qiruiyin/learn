1、数组深拷贝
	$.extend(true, [], array);
	对象深拷贝
	$.extend(true, {}, object);

deepCopy = function(source) {
  let result;
  if (Array.isArray(source)) {
    result = [];
    if(source.length > 0) {
      result = source.map(item => {
        return item instanceof Object ? Vue.prototype.deepCopy(item) : item;
      })
    }
  } else if(source instanceof Object) {
    result = {};
    for (let key in source) {
      if(source[key] instanceof Object) {
        result[key] = Vue.prototype.deepCopy(source[key])
      } else  {
        result[key] = source[key];
      }
    }  
  } else {
    result = source;    
  }

  return result; 
}

	// 尾递归方法 Array 改为Object就是对象深拷贝
	function deepCopy(source){
		// 数组深拷贝
	 	var result=[];
	 	for (var key in source) {
      result[key] = source[key] instanceof Array ? this.deepCopy(source[key]): source[key];
    } 
    return result; 
	}
	export function deepClone (obj) {
	  if (Array.isArray(obj)) {
	    return obj.map(deepClone)
	  } else if (obj && typeof obj === 'object') {
	    var cloned = {}
	    var keys = Object.keys(obj)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      cloned[key] = deepClone(obj[key])
	    }
	    return cloned
	  } else {
	    return obj
	  }
	}


2、add(1)(2)(3)(4) 方法
	function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
	}
  
3、淘宝flexible布局js(手机端rem布局)
    <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
