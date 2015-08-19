
$(document).ready(function(){
	$("#lightGallery").lightGallery();
});

$(document).ready(function(){
    $(".clearfix").sticky({topSpacing:0});
});

$(".gal").click(function(){
	event.preventDefault();
	$(".hideSubNav").toggleClass('subNav');
});
 
