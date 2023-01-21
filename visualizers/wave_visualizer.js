let song, fft;

function mouseClicked() { // possibly change to space bar instead later
  if(song.isPlaying()) {
    song.pause();
    noLoop()
  } else {
    song.play();
    loop()
  }
}

function preload() {
  song = loadSound('../music/everglow.mp3');
}

function setup() {
  createCanvas(1000, 1000); // make it window width and height later
  song.play();  
  fft = new p5.FFT(.9);
}

function windowResized() {
  resizeCanvas(window   , windowHeight);
}


function draw() {
  background(27, 27, 27);
  strokeWeight(3)
  stroke(0, 255, 255)
  noFill()
  
  beginShape()
  let wave = fft.waveform();
  for (let i = 0; i < width; i++) {
    stroke(i*3, 255, 255)

    let index = floor(map(i, 0, width, 0, wave.length))

    let x = i 
    let y = wave[index] * 300 + height / 2

    vertex(x, y)
  }
  endShape()
}

