let song, reverb;

function setup() {
  createCanvas(200, 200);
  song = loadSound("music/Mood.mp3", loaded);
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  background(50);
}

function loaded() {

}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("Pause")
  } else {
    song.pause();
    button.html("Play")
  }
}