/*
 * Howler.js playlist
 */
var howlerBank = [];
var currentlyPlaying = -1;
var playing = false;
var offset = 0;
var trackTimeout;

var trackStartElement = $('#track-start-time p');
var trackTitleElement = $('#track-title p');

var updateTime = function(){
  if(!playing)
    return;
  var trackPosition = howlerBank[currentlyPlaying].pos() || 0;
  var sum = offset + trackPosition;
  var minutes = Math.floor(sum/60);
  var seconds = Math.round(sum - minutes * 60);
  seconds = ('0'+seconds).substr(-2);
  trackStartElement.text(minutes+':'+seconds);
  return setTimeout(updateTime,1000);
  
}

var getTrackInfo = function(el){
  var track = el.id | 0;
  offset = 0;
  console.log(el);
  trackTitleElement.text(el.textContent);

  for(var i = 0; i < el.id; i++){
    offset+= howlerBank[i]._duration;
  };
  trackTimeout = updateTime();

}

var playlist = function(e) {
    // initialisation:
    var playlistUrls = [
        '../extras/01_Lunge_KristinAustreid.mp3',
        '../extras/02_Windows_95_Audun_Mortensen.mp3',
        '../extras/03_Untitled_(Tonlei)_Jason-Hendrik_Hansma.mp3',
        '../extras/04_Mygg_Ingrid_Furre.mp3',
        '../extras/05_Covering_of_the_hand_Glove_Femke_de_Vries.mp3',
        '../extras/06_Hanging_Low_Rosalie_Schweiker_and_Jenny_Moore.mp3',
        '../extras/07_5_erotic_stories_Inger_Wold_Lund.mp3'
    ]; // audio list
    var loop = true;

    // playing i+1 audio (= chaining audio files)
    var onEnd = function(e) {
      currentlyPlaying++;
      currentlyPlaying = loop ? currentlyPlaying % howlerBank.length : currentlyPlaying;
      //     if (loop === true ) { currentlyPlaying = (currentlyPlaying + 1 !== howlerBank.length)? currentlyPlaying + 1 : 0; }
      // else { currentlyPlaying = currentlyPlaying + 1; }
      clearTimeout(trackTimeout);
      trackTimeout = null;
      getTrackInfo($('#'+currentlyPlaying)[0]);
      howlerBank[currentlyPlaying].play();
    };

    var onEndDelayed = function(){
      setTimeout(onEnd,100);
    } ;

    // build up howlerBank:
    playlistUrls.forEach(function(current, i) {
      howlerBank.push(new Howl({ urls: [playlistUrls[i]], onend: onEndDelayed, autoplay: false, iOSAutoEnable: false, buffer: true }))
    });
}



$(document).ready(function() {

    // initiate playlist
    playlist();

    $('.exhibition__piece-button').click(function(e) {

      clearTimeout(trackTimeout);
      trackTimeout = null;
      if (playing) {
        howlerBank[currentlyPlaying].stop();
        playing = false;
      }       
      howlerBank[e.target.id].play();
      playing = true;
      currentlyPlaying = e.target.id;
      getTrackInfo(e.target)
    });

    $('#playbutton').click(function(){
      if(currentlyPlaying == -1){
        currentlyPlaying = 0;
        getTrackInfo($('#0')[0]);
      }
      if (!playing) {
        howlerBank[currentlyPlaying].play();

        playing = true;
        updateTime();
      };
    });
    $('#stopbutton').click(function() {
      if (playing) {
        howlerBank[currentlyPlaying].stop();
        playing = false;
        clearTimeout(trackTimeout);
        trackTimeout = null;
      };
    });
    $('#pausebutton').click(function() {
      if (playing) {
        howlerBank[currentlyPlaying].pause();
        playing = false;
        clearTimeout(trackTimeout);
        trackTimeout = null;
      };
    });
});
