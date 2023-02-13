let play_button = document.querySelector('#play_button');
let reverb_button = document.querySelector('#reverb_button');
let save_button = document.querySelector("#save_button");
let loop_button = document.querySelector('#loop_button');
let restart_button = document.querySelector('#restart_button');
let button_8d = document.querySelector("#button_8d");
let speed_slider = document.querySelector('#speed_slider');
let pan_slider = document.querySelector('#pan_slider');
let song, reverb;
let reverb_on = false;
let on_8d = false;
let loop = false;
let pan_value = 0, pan_rate = 0.005; // for 8D audio

function preload() {
  btn = createFileInput((file)=>{
    song = loadSound(file);
  }); 
}

function setup() {
  noCanvas();
  reverb = new p5.Reverb();
  reverb.process(song, 10, 10); // 10 seconds duration, 10% decay
}

function draw() {
  let val = 0;
  if (reverb_on) val = 1; 
  if (on_8d) {
    pan_value += pan_rate;
    if (pan_value >= 1.5) pan_rate = -0.005;
    else if (pan_value <= -1.5) pan_rate = 0.005;
    song.pan(pan_value);
    pan_value += pan_rate;
  } else {
    song.pan(pan_slider.value)
  }
  reverb.drywet(val); // 1 is all reverb
  song.rate(speed_slider.value);
  song.onended(()=>{
    if (loop) song.play();
    else play_button.innerText = "PLAY";
  });
}

function togglePlay() {
  if (!song.isPlaying()) {
    song.play();
    play_button.innerText = "STOP";
  } else {
    song.pause();
    play_button.innerText = "PLAY";
  }
}

function toggle8d() {
  if (!on_8d) {
    on_8d = true;
    button_8d.innerText = 'OFF';
  } else {
    on_8d = false;
    button_8d.innerText = '8D';
  }
}

function toggleLoop() {
  if (!loop) {
    loop = true;
    loop_button.innerText = "DISABLE";
  }
  else {
    loop = false;
    loop_button.innerText = "LOOP";
  }
}

function restart() {
  song.playMode('restart');
  song.play();
}

function toggleReverb() {
  if (!reverb_on) {
    reverb_button.innerText = 'OFF';
    reverb_on = true;
  } else {
    reverb_button.innerText = 'REVERB';
    reverb_on = false;
  }  
}
