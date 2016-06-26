/*
 * Lil' message for the peekers
 */
console.log('The Archipelago Mixtape: A Tool for Journeys');

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
 * Howler.js audio controlling
 */
var sound = new Howl({
	urls: ['extras/archipelago-mixtape-1.mp3', 'extras/archipelago-mixtape-1.ogg'],
	autoplay: false,
	buffer: true,
	loop: true,
	iOSAutoEnable: false,
	volume: 1,
	});

/*
 * Click drama
 */
('#playbutton').on('click touchend', function(e) {
    sound.play();
	('#playbutton').addClass('hover');
});

('#pausebutton').on('click touchend', function(e) {
    sound.pause();
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