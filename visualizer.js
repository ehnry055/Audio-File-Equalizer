let song, buttton, fft, space_between_lines;

function toggleSong() {
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('music/Mood.mp3');  
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  buttton = createButton('Toggle Play');
  buttton.mousePressed(toggleSong);
  song.play();  
  fft = new p5.FFT(0.9, 128);
  space_between_lines = width / 128;

}

function draw() {
  background(0);
  
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    fill(i, 255, 255);
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 350);
    rect(i * space_between_lines, y, i * space_between_lines, height - y);
    // line(i * space_between_lines, height, i * space_between_lines, y);
  }
}  

// Chrome 70 will require user gestures to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}