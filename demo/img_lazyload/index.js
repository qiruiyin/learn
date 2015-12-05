/**
官网：http://www.appelsiini.net/projects/lazyload
webkit: bug
 Webkit browsers will report images with without 
 width and height as not .not(":visible"). This 
 causes images to appear only when you scroll a bit. 
 Either fix your image tags or keep skip_invisible 
 as false. Use this feature only if you know what 
 you are doing.
**/

// 解决webkit内核初始化时未触发浏览器滚动事件
window.onload = function(){
	document.body.scrollTop=1;
};

// 初始化
$('img.lazy').lazyload({
	effect : "fadeIn" 
});