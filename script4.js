$(document).ready(function(){
	$(".green").on('click', function(){
		$(".green").animate({'top':'-0px'}, 2000, function(){});
		$(".red").animate({'bottom':'-0px'}, 2000, function(){});
		$(".blue").animate({'right':'-0px'}, 2000, function(){});
		$(".yellow").animate({'left':'-0px'}, 2000, function(){});
	});
	$(".red").on('click', function(){
		$(".green").animate({'top':'-0px'}, 2000, function(){});
		$(".red").animate({'bottom':'-0px'}, 2000, function(){});
		$(".blue").animate({'right':'-0px'}, 2000, function(){});
		$(".yellow").animate({'left':'-0px'}, 2000, function(){});
	});
	$(".blue").on('click', function(){
		$(".green").animate({'top':'-0px'}, 2000, function(){});
		$(".red").animate({'bottom':'-0px'}, 2000, function(){});
		$(".blue").animate({'right':'-0px'}, 2000, function(){});
		$(".yellow").animate({'left':'-0px'}, 2000, function(){});
	});
	$(".yellow").on('click', function(){
		$(".green").animate({'top':'-0px'}, 2000, function(){});
		$(".red").animate({'bottom':'-0px'}, 2000, function(){});
		$(".blue").animate({'right':'-0px'}, 2000, function(){});
		$(".yellow").animate({'left':'-0px'}, 2000, function(){});
	});
});