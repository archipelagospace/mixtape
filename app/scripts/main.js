console.log('The Archipelago Mixtape: A Tool for Journeys');

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

var sound = new Howl({
	urls: ['extras/archipelago-mixtape-1.mp3', 'extras/archipelago-mixtape-1.ogg'],
	autoplay: false,
	loop: true,
	iOSAutoEnable: false,
	volume: 0.5,
	});
