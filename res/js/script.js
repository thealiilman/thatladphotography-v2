$(function() {
	$("#menu").on("click", function() {
		$("#links").toggleClass("linksOnOff");
	});
	
	/*Nav Scroll Start*/
	$("#links a").click(function() {
		$("#links").toggleClass("linksOnOff");
	});
	
	$("#about").click(function() {
		$("html, body").animate({
			scrollTop: $("#about-container").offset().top-64
		}, 2000);
	});
	
	$("#gallery").click(function() {
		$("html, body").animate({
			scrollTop: $("#gallery-container").offset().top-64
		}, 2000);
	});
	
	$("#reviews").click(function() {
		$("html, body").animate({
			scrollTop: $("#reviews-container").offset().top-64
		}, 2000);
	});
	
	$("#contact").click(function() {
		$("html, body").animate({
			scrollTop: $("#contact-container").offset().top-64
		}, 2000);
	});
});
