
$(document).ready(function(){
	$('#pole').change(function(){
	var man=$("#pole").val();
	//alert(man*3);
	$("#premenit").on('click', function(){
	$(".green").css('background-color','green').css('position','absolute').css('height','150px').css('width','150px').animate({}, 2000, function(){});
	});
	});
});

