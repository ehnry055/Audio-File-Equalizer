let soundFile, reverb;
function preload() {
  soundFile = loadSound('assets/Damscray_DancingTiger.mp3');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playSound);
  reverb = new p5.Reverb();
  reverb.process(soundFile, 3, 2);
  // Replace 3, 2 with variables controlled by text boxes with HTML
}

function playSound() {
    soundFile.play();
  }