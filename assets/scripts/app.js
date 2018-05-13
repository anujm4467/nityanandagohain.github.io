const Portfolio = function() {

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a FOSS Developer.", "am a Competitive Programmer", "love everything about code.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			// callback: function() {
			// 	$("#writing-text").css({"color": "#000", "background-color": "#fff"});
			// },
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		typeAnimation: typeAnimation
	}

}();
Portfolio.typeAnimation();
window.setInterval(Portfolio.typeAnimation, 10000);