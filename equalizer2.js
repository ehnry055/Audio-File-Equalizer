/* 
1. reverb (works)
2. speed (works)
3. cut feature (failed)
4. balancing (failed)
5. pan (works)
*/

let play_button = document.querySelector('#play_button');
let reverb_button = document.querySelector('#reverb_button');
let save_button = document.querySelector("#save_button");
let button_8d = document.querySelector("#button_8d");
let song, reverb, speed_slider, pan_slider;
let reverb_on = false;
let on_8d = false;
let pan_value = 0, pan_rate = 0.01;

function preload() {
  song = loadSound('music/mood.mp3');
}

function setup() {
  speed_slider = createSlider(0.6, 1.5, 1, 0.1); // min, max, start, step
  pan_slider = createSlider(-1, 1, 0, 0.1)
  reverb = new p5.Reverb();
  reverb.process(song, 10, 10); // 10 seconds duration, 10% decay
}

function draw() {
  let val = 0;
  if (reverb_on) val = 1; 
  if (on_8d) {
    pan_value += pan_rate;
    if (pan_value >= 1.5) pan_rate = -0.01;
    else if (pan_value <= -1.5) pan_rate = 0.01;
    song.pan(pan_value);
    pan_value += pan_rate;
  } else {
    song.pan(pan_slider.value())
  }

  reverb.drywet(val); // 1 is all reverb
  song.rate(speed_slider.value());
  song.onended(() => {
    play_button.innerText = "Play";
  });
}

function togglePlay() {
  if (!song.isPlaying()) {
    song.play();
    play_button.innerText = "Stop";
  } else {
    song.pause();
    play_button.innerText = "Play";
  }
}

function toggle8d() {
  if (!on_8d) {
    on_8d = true;
    button_8d.innerText = 'off';
  } else {
    on_8d = false;
    button_8d.innerText = 'on';
  }
}

function toggleReverb() {
  if (!reverb_on) {
    reverb_button.innerText = 'off';
    reverb_on = true;
  } else {
    reverb_button.innerText = 'on';
    reverb_on = false;
  }  
}

function saveSong() {
  save(song, 'mood.mp3');
}