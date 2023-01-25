let song, reverb;

function preload() {
  let cnv = createCanvas(200,200);
  cnv.style('display', 'block')
  song = loadSound("music/Mood.mp3");
}

function setup() {
  reverb = new p5.Reverb();
  song.disconnect();
  reverb.process(song, 10, 100);
  playButton = createButton("Play");
  playButton.mousePressed(togglePlaying);
}

function draw() {
  background(song.currentTime()*20);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    playButton.html("Pause")
  } else {
    song.pause();
    playButton.html("Play")
  }
}

