let song, reverb;

function setup() {
  createCanvas(200, 200);
  song = loadSound("music/Mood.mp3", loaded);
}

function loaded() {
  button = createButton("Play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(song.currentTime()*20);
  
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