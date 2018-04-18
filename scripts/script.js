/*
    Author: Maihan Nijat
    Date: 2017-11-10
    Document: JavaScript
    Purpose: Portflio
    Description: Single page web portfolio website with HTML5, CSS and JavaScript
                 technologies.
    Version: 1.0
*/

$(document).ready(function () {
	// Display menu with click
	$(".menu-icon").click(function () {
		$("header").css("opacity", "1");
		$(".top-menu").toggle(500);

		$(".top-menu li").click(function () {
			$(".top-menu").hide(500);
		});

	});

	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
