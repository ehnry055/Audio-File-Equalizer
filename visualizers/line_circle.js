
let song, fft, space_between_lines;

function mouseClicked() { // possibly change to space bar instead later
    if(song.isPlaying()) {
    song.pause();
    } else {
    song.play();
    }
}




function preload() {
  //var str = localStorage.getItem("song");
  //if (items === undefined || items === null || items.length === 0)
  //{
  //  song = loadSound('../music/ShakeItOff.mp3');
  //}
  //else {
  //  song = new Audio(str);
  //  song.play();
    //reader.readAsDataURL(song);
  //}
  song = loadSound('../music/ShakeItOff.mp3');
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    colorMode(HSB); // gradient 
    noFill();
    strokeCap(ROUND);

    // buttton = createButton('Toggle Play');
    // buttton.mousePressed(toggleSong);
    fft = new p5.FFT();
    amplitude = new p5.Amplitude();
    number = 100;


    song.play();
    // space_between_lines = (width-2) / 128;
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function draw() {
    let spectrum = fft.analyze();
    let angle = 0;
    let radius = height * 3 / 12;
    magnitude = radius * 20;

    beginShape();
    translate(width/2, height/2);
    
    // console.log(spectrum.length)
    for (let i = 0; i < number; i++) { // += 2 for gap
        var freq = spectrum[i*2];
        let r = sq(map(freq, 0, 255, 0, 1));
        let level = amplitude.getLevel();
        let x = radius * sin(angle);
        let y = radius * cos(angle);
        //credit: FreddieRa
        modifier = (1 + r/2) * (1+level/10); 
        
        x2 = x * modifier;
        y2 = y * modifier;

        stroke(i*360/number,360,360); //fill(i,255,255);
        strokeWeight(7);
        line(x, y, x2, y2);
        angle += TWO_PI/number;
    }
    endShape();

}

