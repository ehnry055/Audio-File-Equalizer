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
  
  reverb.process(reverbFile, grabDuration(), grabRate());
  reverb.amp(); 
  // Fix it not working, no clue why it doesn't work -- Maybe greyed out variables clue 
}
function grabDuration() {
  //Grabbing reverb duration from 
  const btn= document.getElementById("btn");
  btn.addEventListener('click', function(){
  let dur = document.getElementById("reverbdur").value;
  });
  if (dur > song.duration()){
    dur = song.duration();
  }
  return dur;
}
function grabRate(){
  const btn= document.getElementById("btn");
  btn.addEventListener('click', function(){
  let rate = document.getElementById("reverbRate").value;
  });
  if (rate > 100){
    rate = 100;
  }
  return rate;
}

function draw() {
  let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  // 1 = all reverb, 0 = no reverb
  // This is like a lightswitch? Mouse movement dictates on and off?
  reverb.drywet(dryWet);

  background(220);
  text('tap to play', 10, 20);
  text('dry/wet: ' + round(dryWet * 100) + '%', 10, height - 20);

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