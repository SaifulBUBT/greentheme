$('.slider').show().bxSlider({
	pager:false,
	auto:true,
	speed:1000,


	});

$('.si-post-slide').bxSlider({
	pager:false,
	auto:false,
	speed:2000,
	slideWidth: 380,
    minSlides: 1,
    maxSlides: 3,
	 moveSlides: 2,
    slideMargin: 20
	});
	
$('.si_testimonials_area').bxSlider({
	pager:true,
	auto:true,
	controls:false,
	mode:'vertical',
	speed:6000,
	});

$('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
});




$(document).ready(function() {
	var s = $("#sticker");
	var pos = s.position();                   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");
		}
	});
});


$('#navigation').slimmenu(
	{
		resizeWidth: '768',
		collapserTitle: 'Main Menu',
		animSpeed: 'medium',
		easingEffect: null,
		indentChildren: false,
		childrenIndenter: '&nbsp;'
	});



$(function(){
	$('.project_list').mixItUp({
		animation: {
			effects: 'scale'
		}
	});  
});






