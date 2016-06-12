console.log('The Archipelago Mixtape: A Tool for Journeys');

// soundcloud sdk magic
SC.initialize({
    client_id: '1c583bc75fd0f66f52afdd44cfeaae09',
    redirect_uri: 'http://example.com/callback' // need to create this: http://mixtape.archipelago.space/auth.html
  });

// SC.get('/users/233081566/tracks').then(function(tracks){
//   alert('Latest track: ' + tracks[0].title);
// });

var track_url = 'http://soundcloud.com/archipelagospace/api-test';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});

//sc javascript player test
      // $.scPlayer.defaults.onDomReady = function() {
      //   $('a.sc-player, div.sc-player').scPlayer({
      //     // randomize tracks in a playlist
      //     randomize: true
      //   });
      // };