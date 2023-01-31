/* 
1. reverb (works)
2. speed (works)
3. cut feature
4. balancing (hard)
5. pan 
*/

let play_button = document.querySelector('#play_button');
let reverb_button = document.querySelector('#reverb_button');
let save_button = document.querySelector("#save_button");
let button_8d = document.querySelector("8d_button");
let song, reverb, speed_slider, pan_slider;
let reverb_on = false;
let on_8d = false;

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
    setInterval(()=>{
      song.pan()
    }, 1000);
  } else {
    song.pan(pan_slider.value())
  }
  reverb.drywet(val); // 1 is all reverb
  song.rate(speed_slider.value());
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