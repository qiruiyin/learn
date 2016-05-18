1、数组深拷贝
	$.extend(true, [], array);
	对象深拷贝
	$.extend(true, {}, object);

	// 尾递归方法 Array 改为Object就是对象深拷贝
	function deepCopy(source){
		// 数组深拷贝
	 	var result=[];
	 	for (var key in source) {
      result[key] = source[key] instanceof Array ? this.deepCopy(source[key]): source[key];
    } 
    return result; 
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