let soundFile, reverb;
function preload() {
  soundFile = loadSound('music/Mood.mp3');
}

function setup() {
  let cnv = createCanvas(500, 500);
}

function draw() {
  if (!soundFile.isPlaying()) {
    cnv.mousePressed(playSound);
    console.log("PLAYING")
  }
  else cnv.mousePressed(stopSound());
  reverb = new p5.Reverb();
  reverb.process(soundFile, 3, 2);
  // Replace 3, 2 with variables controlled by text boxes with HTML
}

function playSound() {
  soundFile.play();
}

function stopSound(){
  soundFile.stop();
}