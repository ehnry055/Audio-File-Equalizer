f.onchange = e =>{
    if(f.files[0].type.indexOf('audio/') !== 0){
      console.warn('not an audio file');
      return;
      }
    const reader = new FileReader();
    reader.onload = function(){
      var str = this.result;
      let openRequest = indexedDB.open("song");
      openRequest.onsuccess = function() {
        let db = openRequest.result;
        // continue working with database using db object
      };
      const aud = new Audio(str);
      aud.play();
      };
    reader.readAsDataURL(f.files[0]);
    }