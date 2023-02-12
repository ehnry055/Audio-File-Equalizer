var button = document.getElementById('actualbtn');
var fileChosen = document.getElementById("file-chosen");
var selectedFile;
var gallery = document.getElementById("gallery");


button.addEventListener("change", function(){
  fileChosen.textContent = this.files[0].name;
  selectedFile = document.getElementById("input").files;

  const reader = new FileReader();
  reader.onload = function(){
    var str = this.result;
    localStorage.setItem("song", "str");
  };
});