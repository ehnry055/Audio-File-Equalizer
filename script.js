var button = document.getElementById('actual-btn');
var fileChosen = document.getElementById("file-chosen");
var selectedFile = null;
var gallery = document.getElementById("gallery");
var backup = loadSound('../music/everglow.mp3');;

button.addEventListener("change", function(){
  fileChosen.textContent = this.files[0].name;
  selectedFile = document.getElementById("input").files;
  
});

gallery.addEventListener("change", function(){
  sessionStorage.setItem("song", "selectedFile");
});