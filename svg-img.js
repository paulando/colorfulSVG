(function ( $ ){

	"use strict";

	$.fn.createImg = function() {

		var path_array = new Array();

		this.each(function() {
			
			path_array.push($("path"));

		});

		Array.prototype.randomElement = function () {
		    return this[Math.floor(Math.random() * this.length)]
		}

		var myRandomElement = path_array.randomElement();

		myRandomElement.sort(function() {
		  return .5 - Math.random();
		});

		var colors = ["#D32F2F","#536DFE","#FFEB3B","#00796B","#FF5722","#E040FB","#00BCD4"];

		for (var x = 0, ln = myRandomElement.length; x < ln; x++) {

			setTimeout(function(y) {
			// console.log("%d => %d", y, myRandomElement[y] += 10);
			var path = myRandomElement[y];
			
			$(path).css({
				
				"opacity":"1",
				"transition":"1000ms all ease 1000ms",
				"fill":colors.randomElement()

			}); }, x * 50, x );
		
		}

		return this;

	}


}( jQuery ));



jQuery(document).ready(function($) {
	
	jQuery("#svg").createImg();

});