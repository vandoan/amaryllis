// jslint settings 


/*jslint		browser : true, 		continue : true, 
devel : true, 	indent : 2, 		maxerr :50, 
newcap : true, 	nomen : true, 		plusplus : true, 
white : true 
*/
/*global jQuery */ 

//module /spa/ 

//provides chat slider capability
	var spa = (function () {
		var initModule = function ( $container ) {
			$container.html(
				'<h1 style="display:inline-block; margin:25px;">' 
				+ 'hello world' 
				+ '</h1>' 
				); 
		}; 
		return { initModule: initModule }; 
	}());