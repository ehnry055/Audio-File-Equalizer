var button = document.getElementById('actual-btn');
var fileChosen = document.getElementById("file-chosen");
var selectedFile = null;
var gallery = document.getElementById("gallery");

button.addEventListener("change", function(){
  fileChosen.textContent = this.files[0].name;
  selectedFile = document.getElementById("input").files;
  
});

gallery.addEventListener("change", function(){
  if (selectedFile != null) {
    sessionStorage.setItem('song', 'selectedFile');
  }
});