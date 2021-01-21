
let header = $("#header");
let intro = $("#intro");
let introH;
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function() {
	let introH = intro.innerHeight();
	scrollPos = $(this).scrollTop();
	if(scrollPos > introH) {
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
});


$("[data-scroll]").on("click", function(event) {
	event.preventDefault();
	var blockId = $(this).data('scroll'),
	blockOffset = $(blockId).offset().top;

	$("html, body").animate({
		scrollTop: blockOffset
	}, 700);
});


$("#nav-toggle").on("click", function(event) {
	event.preventDefault();

	$(this).toggleClass("active");
	$("#nav").toggleClass("active");
	$("#header").toggleClass("active");
});

