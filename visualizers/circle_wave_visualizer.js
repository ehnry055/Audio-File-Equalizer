let song, fft;

function keyPressed() {
  if (keyCode === 32) {
    if(song.isPlaying()) {
      noFill();
      song.pause();
      noLoop();
    } else {
      song.play();
      loop();
    }
  }
}


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
    let request = indexedDB.open("songfile", 22);
    request.onsuccess = (event) => {
      db = event.target.result;
      let tx = db.transaction("song", "readwrite").objectStore("song");
      let req = tx.get(1);
      req.onerror = (event) => {
        console.warn("please add a song next time")
      };
      request.onsuccess = (event) => {
        console.log(req);
      };
      song = loadSound(req);
    }
    request.onerror = (event) => {
      song = loadSound("../music/ShakeItOff.mp3");
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
  stroke(255, 255, 255)
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

