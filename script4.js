$(document).ready(function(){
	$(".ami").on('click', function(){
		$(".green").animate({'top':'-0px'}, 2000, function(){});
		$(".red").animate({'bottom':'-0px'}, 2000, function(){});
		$(".blue").animate({'right':'-0px'}, 2000, function(){});
		$(".yellow").animate({'left':'-0px'}, 2000, function(){});
	});
});