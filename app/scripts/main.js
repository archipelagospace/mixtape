console.log('The Archipelago Mixtape: A Tool for Journeys');

// soundcloud sdk magic
SC.initialize({
    client_id: '1c583bc75fd0f66f52afdd44cfeaae09',
    redirect_uri: 'http://example.com/callback' // need to create this: http://mixtape.archipelago.space/auth.html
  });

SC.get('/tracks').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});

$(document).ready(
   // This is the function that will get executed after the DOM is fully loaded 
  function () {
     // set user we wish to see trackList for 
    var USER = '233081566'
    /* set user name on DOM */
    $('#user').html(USER);
    
     // Use soundcloud API to get track list 
    SC.get('/users/'+USER+'/tracks', {limit: 100}, function(tracks){
      var trackList = ''
      for (var i = 0; i < tracks.length; i++) {
         // populate trackList html 
        trackList += tracks[i].title + '<br>';
      }
      $('#status').html(trackList);
    });
  }
);