
let song, fft, space_between_lines;

function mouseClicked() { // possibly change to space bar instead later
    if(song.isPlaying()) {
    song.pause();
    } else {
    song.play();
    }
}

function preload() {
//   //var str = localStorage.getItem("song");
//   //if (items === undefined || items === null || items.length === 0)
//   //{
//   //  song = loadSound('../music/ShakeItOff.mp3');
//   //}
//   //else {
//   //  song = new Audio(str);
//   //  song.play();
//     //reader.readAsDataURL(song);
//   //}
  btn = createFileInput((file)=>{
    song = loadSound(file);
  }); 
  btn.position(0, 0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  colorMode(HSB);
  rectMode(CENTER)
  fft = new p5.FFT(0.9,512)
  song.play()
}
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function draw() {
  var spectrum = fft.analyze()
  translate(width/2, height/2)
  colorMode(RGB);
  fill(33)
  noStroke()
  rect(0, 0, width, height)
  colorMode(HSB);

  strokeWeight(5)
  
  for(var i = 0; i < spectrum.length; i+=5) {
      var angle = map(i,1,spectrum.length,0,360)-90
      var amp2 = spectrum[i]
      var r = map(amp2, 0, 256, 80, 250)
      var x = (r + 50) * sin(angle);
      var y = (r + 50) * cos(angle);
      
      line(0,0,x,y);
      stroke(i/1.5,200,200);
  }
  noStroke();
  colorMode(RGB);
  fill(33)
  circle(0,0,250)
}

