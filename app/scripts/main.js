console.log('The Archipelago Mixtape: A Tool for Journeys');

        $(document).ready(function() {
        $.simpleWeather({
            location: 'Bergen, NO',
            woeid: '',
            unit: 'c',
            success: function(weather) {
              var html = '<p>'+'It is '+weather.currently+'</p>';

              $('#weather').html(html);
            },
            error: function(error) {
              $('#weather').html('<p>' + error + '</p>');
            }
          });
        });