var button = document.getElementById('actualbtn');
var fileChosen = document.getElementById("file-chosen");
var gallery = document.getElementById("gallery");
let selectedFile;

button.addEventListener("change", function(){
  fileChosen.textContent = this.files[0].name;
  selectedFile = document.getElementById("input").files[0];
  let db;
  const request = indexedDB.open("MyTestDatabase");
  request.onerror = (event) => {
    console.error("it broke :(");
  };
  request.onsuccess = (event) => {
    db = event.target.result;
  };
});

actualtbtn.onchange = e =>{
  const reader = new FileReader();
  reader.onload = function(){
    var str = this.result;
    localStorage.setItem("song", str);
    const aud = new Audio(str);
    aud.play();
    };
  reader.readAsDataURL(f.files[0]);
  }