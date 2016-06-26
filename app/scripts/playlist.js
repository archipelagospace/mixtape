/*
 * Howler.js playlist
 */
var howlerBank = [];
var playlist = function(e) {
    // initialisation:
    var pCount = 0;
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
      if (loop === true ) { pCount = (pCount + 1 !== howlerBank.length)? pCount + 1 : 0; }
      else { pCount = pCount + 1; }
      howlerBank[pCount].play();
    };

    // build up howlerBank:     
    playlistUrls.forEach(function(current, i) {   
      howlerBank.push(new Howl({ urls: [playlistUrls[i]], onend: onEnd, autoplay: false, iOSAutoEnable: false, buffer: true }))
    });
}

var playing = false

$(document).ready(function() {
    playlist();
    $('#playbutton').click(function(){
      if (!playing) {
        howlerBank[0].play();
        playing = true;
      };
    });
    $('#stopbutton').click(function() {
      if (playing) {
        howlerBank[0].stop();
        playing = false
      };
    });
    $('#pausebutton').click(function() {
      if (playing) {
        howlerBank[0].pause();
          playing = false
      };
    });
});