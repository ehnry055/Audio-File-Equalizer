let song, buttton, fft, space_between_lines;

function keyPressed() {
  if (keyCode === 32) {
    if(song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}

function preload() {
  var str = localStorage.getItem("song");
  if (items === undefined || items === null || items.length === 0)
  {
    song = loadSound('../music/ShakeItOff.mp3')
  }
  else {
    song = new Audio(str);
    //reader.readAsDataURL(song);
  }
}


// function rewind() {
//   if (keyIsDown(RIGHT_ARROW)) { // right arrow
//     jumpSong();
//   }
//   if (keyIsDown(LEFT_ARROW)) { // left arrow 
//     backJumpSong();
//   }
// }

// function preload() {
//   //var str = localStorage.getItem("song");
//   //if (items === undefined || items === null || items.length === 0)
//   //{
//     song = loadSound('../music/ShakeItOff.mp3')
//   //}
//   //else {
//     //song = new Audio(str);
//     //reader.readAsDataURL(song);
//   //}
// }

// function jumpSong(){
//   song.jump(song.currentTime() + 3);
// }

// function backJumpSong(){
//   song.jump(song.currentTime() -3);
// }

function preload() {
  song = loadSound('../music/ShakeItOff.mp3');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight-100);
  cnv.style('display', 'block');
  colorMode(HSB); // gradient 
  // buttton = createButton('Toggle Play');
  // buttton.mousePressed(toggleSong);
  fft = new p5.FFT(0.9, 128);
  song.play()
  space_between_lines = (width-2) / 128;
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function draw() {
  background(0);
  let spectrum = fft.analyze();
  // console.log(spectrum.length)
  for (let i = 0; i < spectrum.length; i++) { // += 2 for gap
    fill(i*3.5,255,255); //fill(i,255,255);
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    rect(i * space_between_lines, y, space_between_lines, height - y);
    // rect((width/2) + (i * space_between_lines), y, space_between_lines, height - y);
    // rect((width/2) - (i * space_between_lines), y, space_between_lines, height - y);
  }
}
