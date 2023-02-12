
const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
// const file = document.getElementById('fileupload')
canvas.width = window.clientWidth;
canvas.height = window.clientHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;

container.addEventListener('click', function() {
    //let audio1 = new Audio() // put something later
    let audio1;
    var str = localStorage.getItem("song");
    if (items === undefined || items === null || items.length === 0)
    {
        audio1 = loadSound('../music/ShakeItOff.mp3');
    }
    else {
        audio1 = new Audio(str);
    }
    audio1.play();
    
    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width/bufferLength;
    let barHeight;
    let x = 0;

    function animate () {
        ctv.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        for(let i = 0; i < bufferLength; i++ ){
            barHeight = dataArray[i] * 2;
            ctx.fillStyle = 'white';
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x+=barWidth

            }
        requestAnimationFrame(animate);
    }
    animate()
});
  
// file.addEventListener('change', function() {
//     const files = this.files;
//     const audio1 = document.getElementById("audio1");
//     audio1.src = URL.createObjectURL(files[0]);
//     audio1.load();
//     audio1.play();

//     audioSource = audioContext.createMediaElementSource(audio1);
//     analyser = audioContext.createAnalyser();
//     audioSource.connect(analyser);
//     analyser.connect(audioContext.destination);
//     analyser.fftSize = 128  ;
//     const bufferLength = analyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const barWidth = canvas.width/bufferLength;
//     let barHeight;
//     let x = 0;

//     function animate () {
//         ctv.clearRect(0, 0, canvas.width, canvas.height);
//         analyser.getByteFrequencyData(dataArray);
//         for(let i = 0; i < bufferLength; i++ ){
//             barHeight = dataArray[i] * 2;
//             ctx.fillStyle = 'white';
//             ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
//             x+=barWidth

//         }
//         requestAnimationFrame(animate);
//     }
//     animate()
// })

function drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray){
    for(let i = 0; i < bufferLength; i++ ){
        barHeight = dataArray[i] * 2;
        const red = i * barHeight/20;
        const green = i*4;
        const blue = barHeight /2;
        ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x+=barWidth
    }
}
