let song, fft;
//import {selectedFile} from '../script.js';

function keyPressed() {
  if (keyCode === 32) {
    if(song.isPlaying()) {
      noFill();
      song.pause();
    } else {
      song.play();
      loop()
    }
  }
}

function preload() {
  if (sessionStorage.getItem("song") != null) {
    song = loadSoud(sessionStorage.getItem("song"));
  } else {
    song = loadSound('../music/everglow.mp3');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight); // make it window width and height later
  //cnv.style('display', 'block');
  angleMode(DEGREES)
  fft = new p5.FFT(.3);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function draw() {
  background(27, 27, 27);
  // colorMode(HSB)
  stroke(0, 255, 255)
  strokeWeight(3)
  noFill()

  translate(width/2, height/2)
  
  let wave = fft.waveform();

  for(let m = -1; m < 2; m+=2) {
    beginShape()

    for (let i = 0; i <= 180; i += 1) {
        // stroke(i*3, 255, 255)

        let index = floor(map(i, 0, 180, 0, wave.length - 1))

        let r = map(wave[index], -1, 1, 150, 350)

        let x = r * sin(i) * m
        let y = r * cos(i)
        vertex(x, y)
    }
    endShape()
  }
}

