// jslint settings 


/*jslint	browser : true, 	continue : true, 
devel : true, 	indent : 2, 		maxerr :50, 
newcap : true, 	nomen : true, 	plusplus : true, 
white : true 
*/
/*global jQuery */ 

//module /spa/ 

//provides chat slider capability
	var spa = (function ($) {

	//module scope variables
	var
		//set constants
		configMap = { 
			extended_height : 434,
			extended_title 	: 'Click to retract', 
			retracted_height: 16, 
			retracted_title	: 'Click to extend', 
			template_html	: '<div class="spa-slider"><\/div>'
		},

		// declare all other module scope variables 
		$chatSlider, 
		toggleSlider, onClickSlider, initModule;
	// dom method /toggleSlider/
	// alternates slider height
	toggleSlider = function () {
		var 
		slider_height = $chatSlider.height(); 
		//extend slider if fully retracted
		if ( slider_height === configMap.retracted_height ) {
			$chatSlider
				.animate({ height : configMap.extended_height })
				.attr( 'title', configMap.extended_title );
			return true;
		}
		// extend slider if fully retracted
		else if (slider_height === configMap.extended_height ) {
			$chatSlider 
			.animate({ height : configMap.retracted_height })
			.attr( 'title', configMap.retracted_title ); 
		return true; 
	}

	// do not take action if slider is in tranistion 
	return false; 
}

// Event handler /onClickSlider/
// recieves click event and calls toggleSlider

onClickSlider = function ( event ) {
	toggleSlider();
	return false;
};
	// public method /initModule/ 
	// sets initial state and provides feature
	//
	initModule = function ( $container ){
		//render HTML
		$container.html ( configMap.template_html ); 

		$chatSlider = $container.find( '.spa-slider'); 

		//initialize slider height and title
		//bind the user clik event to the even handler
		$chatSlider
		.attr('title', configMap.retracted_title ) 
		.click ( onClickSlider);
	return true; 
}; 

return { initModule : initModule }; 
}(jQuery));

	//start spa once dom is read
	//
	jQuery(document).ready(
		function () { spa.initModule( jQuery('#spa') ); }
	); 

//