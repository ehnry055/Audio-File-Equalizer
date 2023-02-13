var button = document.getElementById('actualbtn');
var fileChosen = document.getElementById("file-chosen");
var gallery = document.getElementById("gallery");
let selectedFile;
var songthing;

button.addEventListener("change", function(){
  fileChosen.textContent = this.files[0].name;
  selectedFile = this.target.files[0];
  songthing = File(selectedFile);
});

const indexedDB = 
  window.indexedDB || window.mozIndexedDb || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

const request = indexedDB.open("songfile", 1);

request.onerror = function (event) {
  console.error("error lol why idk");
  console.error(event);
}

request.onupgradeneeded = function () {
  const db = request.result;
  const songlist = db.createObjectStore("song", { keyPath: "id"});
  songlist.createIndex("songname", ["filename"], {unique: true});
}

request.onsuccess = function () {
  const db = request.result;
  const transaction = db.transaction("song", "readwrite");

  const songlist = transaction.objectStore("song");
  const nameIndex = songlist.index("songname");

  songlist.put({ id: 1, songname: selectedFile});

  const idQuery = stor.get(1);

  idQuery.onsuccess = function () {

  }
}