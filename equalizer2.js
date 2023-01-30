let play_button = document.querySelector('#play_button');
let reverb_button = document.querySelector('#reverb_button');
let song, reverb, speed_slider;
let reverb_on = false;

function preload() {
  song = loadSound('music/Mood.mp3');
}

function setup() {  
  speed_slider = createSlider(0.6, 1.5, 1, 0.1); // min, max, start, step
  reverb = new p5.Reverb();
  reverb.process(song, 10, 10); // 10 seconds duration, 10% decay
}

function draw() {
  let val = 0;
  if (reverb_on) val = 1; 
  reverb.drywet(val); // 1 is all reverb
  song.rate(speed_slider.value());
}

function playSound() {
  song.play();
}

function toggleReverb() {
  if (!reverb_on) {
    reverb_button.innerText = 'off';
    reverb_on = true;
  } else {
    reverb_button.innerText = 'on';
    reverb_on = false
  }
  
}