var button = document.getElementById('actualbtn');
var fileChosen = document.getElementById("file-chosen");
var gallery = document.getElementById("gallery");
let selectedFile;
var songthing;
let db;

const indexedDB = 
  window.indexedDB || window.mozIndexedDb || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

const request = indexedDB.open("songfile", 22);

request.onerror = (event) => {
  console.error("error lol why idk");
  console.error(event);
}

request.onupgradeneeded = (event) => {
  db = event.target.result;
  if (!db.objectStoreNames.contains("song")) {
    const store = db.createObjectStore("song", { keyPath: "id"});
  }
  
}

request.onsuccess = (event) => {
  db = event.target.result;
  button.addEventListener("change", function(){
    fileChosen.textContent = this.files[0].name;
    selectedFile = new Blob([document.querySelector('input[type=file]').files[0]], {type:"audio/mp3"});
    console.log(selectedFile);

  
  let tx = db.transaction("song", "readwrite").objectStore("song");
  tx.oncomplete = (event) => {
    console.log(event);
  }
  tx.onerror = (event) => {
    console.warn(event);
  }

  let request = tx.put({id: 1, selectedFile});
  request.oncomplete = (event) => {
    console.log('lol it worked');
  }
  request.onerror = (event) => {
    console.warn("no it didn't");
  }
  });

  // gallery.addEventListener("click", function() {
  //   let id = 1;
  //   let tx = db.transaction("song", "readonly");
  //   tx.oncompute = (event) => {
  //     let store = tx.objectStore('song');
  //     let req = store.get(id);
  //     req.onsuccess = (event) => {
  //       let request = event.request;
  //     }
  //     req.onerror = (event) => {
  //       console.warn(err)
  //     }
  //   }
  //})
}