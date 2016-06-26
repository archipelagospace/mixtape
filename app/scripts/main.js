/*
 * Gauges tracking code
 */
var _gauges = _gauges || [];
    (function() {
    var t   = document.createElement('script');
    t.type  = 'text/javascript';
    t.async = true;
    t.id    = 'gauges-tracker';
    t.setAttribute('data-site-id', '576cacf7bb922a7e7200ad28');
    t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif');
    t.src = 'https://d36ee2fcip1434.cloudfront.net/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
})();

/*
 * Lil' message for the peekers
 */
console.log('The Archipelago Mixtape: A Tool for Journeys');

/*
 * Menu items
*/
$(function() {
    $( '#artists-title' ).click(function() {
        $( '#artists' ).slideToggle();
    });
});

$(function() {
    $( '#exhibition-title' ).click(function() {
        $( '#exhibition' ).slideToggle();
    });
});

$(function() {
    $( '#credits-title' ).click(function() {
        $( '#credits' ).slideToggle();
    });
});

/*
 * Weather magic w Simpleweather.js
 */
    $(document).ready(function() {
	    $.simpleWeather({
	        location: 'Bergen, NO',
	        woeid: '',
	        unit: 'c',
	        success: function(weather) {
	          var html = '<p class="header-footer">'+'It is '+weather.currently+'</p>';

	          $('#weather').html(html);
	        },
	        error: function(error) {
	          $('#weather').html('<p>' + error + '</p>');
	        }
	      });
    });

/*
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});