// var demo = {
// 	defaults: {
// 		name: 'demo',
// 		author: 'xiaoqi',
// 		value: 1
// 	},

	

// 	init: function(){
// 		console.log(this.defaults);
// 	}
// }

// demo.init();

// function animal() {
// 	this.species = '动物'
// }

// function cat(name, color) {
// 	// animal.apply(this, arguments);
// 	this.name = name;
// 	this.color = color;
// }

// cat.prototype = new animal();
// cat.prototype.constructor = cat;
// var cat1 = new cat('aaa', '黄色');
// cat1.species = '动物1';
// var ani = new animal();
// console.log(cat1.constructor, ani.constructor);


// var chinese = {
// 	nation: '中国',
// 	area: ['山东','北京','上海']
// };

// // 深拷贝
// function deepclone(p) {
// 	var c = p instanceof Array ? [] : {};
// 	for(var i in p) {
// 		if (typeof p[i] == 'object') {
// 			c[i] = deepclone(p[i]);
// 		} else {
// 			c[i] = p[i];
// 		}
// 	}
// 	return c;
// }
// // 深拷贝
// function deepclone(p, c) {
// 	var c = c || {};
// 	for(var i in p) {
// 		if (typeof p[i] == 'object') {
// 			c[i] = p[i] instanceof Array ? [] : {};
// 			c[i] = deepclone(p[i],c[i]);
// 		} else {
// 			c[i] = p[i];
// 		}
// 	}
// 	return c;
// }

// // 浅拷贝
// // function clone(p) {
// // 	var c = {};
// // 	for(var i in p) {
// // 		c[i] = p[i];
// // 	}

// // 	c.uber = p;

// // 	return c;
// // }

// docter = deepclone(chinese);
// docter.career = '医生';
// // docter.area.push('天津');
// console.log(docter.area, chinese.area);











// var cat = {
// 	name: '',
// 	color: ''
// };

// function cat(name,color) {
// 	this.name = name;
// 	this.color = color;
// 	// this.type = '猫科';

// 	this.eat = function(){
// 		console.log("吃老鼠");
// 	};

// 	// return {
// 	// 	name: name,
// 	// 	color: color
// 	// }
// }

// cat.prototype.type = '猫科';

// var dog = function(name, color){
// 	this.name = name;
// 	this.color = color;
// }

// var cat1 = new cat('aa','red');
// var cat2 = new dog('aa11','red');
// cat1.eat();
// console.log(cat1.type);