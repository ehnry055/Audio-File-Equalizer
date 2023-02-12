var button = document.getElementById('actualbtn');
var fileChosen = document.getElementById("file-chosen");
var selectedFile;
var gallery = document.getElementById("gallery");
var backup = '../music/everglow.mp3';
localStorage.setItem("song", "backup");


button.addEventListener("change", function(){
  fileChosen.textContent = this.files[0].name;
  selectedFile = document.getElementById("input").files;

  const reader = new FileReader();
  reader.onload = function(){
    var str = this.result;
    localStorage.setItem("song", "str");
  };
});