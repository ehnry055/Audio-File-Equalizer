let song, fft;
//import {selectedFile} from '../script.js';

function keyPressed() {
  if (keyCode === 32) {
    if(song.isPlaying()) {
      song.pause();
    } else {
      song.play();
      loop()
    }
  }
}

function preload() {
  song = loadSound('../music/ShakeItOff.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // make it window width and height later
  song.play();  
  fft = new p5.FFT(.9);
}

//function windowResized() {
  //resizeCanvas(window   , windowHeight);
//}


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
    let y = wave[index] * 150 + height / 2

    vertex(x, y)
  }
  endShape()
}

