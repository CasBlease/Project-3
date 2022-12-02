// *** LAUNCHPAD CODE ***
console.log(navigator);
let device;

//default coloring
selectClr = 124;
//setup for the planets
//mercury
mercClr = 12;
mercNoteArr = [52,53,54,56,57,60];
//venus
venClr = 9;
venNoteArr = [59,62,63,65,66,67];
//earth
earthClr = 122;
earthNoteArr = [88,92,93,96,97,98];
//mars
marsClr = 5;
marsNoteArr = [85,86,87,90,91,95];
//jupiter
jupiClr = 9;
jupiNoteArr = [75,78,79,81,82,83];
//saturn
satClr = 12;
satNoteArr = [68,69,70,72,73,76];
//uranus
uraClr = 33;
uraNoteArr = [37,38,39,42,43,47];
//neptune
neptClr = 45;
neptNoteArr = [40,44,45,48,49,50];
//pluto
plutoClr = 3;
plutoNoteArr = [51,55,80,84];

// This block of functions are manage connecting the web-midi-api to your launchpad
// they also parse the incoming and outgoing signals into meaningful numbers
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}
function failure() {
  console.log("Could not connect MIDI");
}

function updateDevices(event) {
  console.log(event);
}

function success(midiAccess) {
//   console.log(midiAccess);
  midiAccess.addEventListener('statechange', updateDevices);
  let inputs = midiAccess.inputs;
//   console.log(inputs);

    for (let output of midiAccess.outputs.values()) {
        device = output;
        // console.log('Output device selected', device);
    }

  inputs.forEach((input) => {
    //   console.log(input);
      input.addEventListener('midimessage', handleInput);
  });
}

function handleInput(input) {
  // console.log(input);

  let command   = input.data[0];
  let note      = input.data[1];
  let velocity  = input.data[2];

  // console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);


  if (velocity > 0) {
    noteOn(note);
  }

  if (velocity == 0){
    noteOff(note);
  }
}


// The proceding functions are where you will impliment your own 
// custom javascript functions on the notes of the launchpad
function noteOn(note) {
  console.log(`note:${note} // on`);

    // if ( note == 64){
    //     document.getElementById('hello_tag').textContent = "64!"
    //     colorM(note,124);
    //     colorM(note+1,124);
    //     colorM(note+2,124);
    // }
    document.getElementById('planetName').textContent = "The Sun"
    document.getElementById("planetImg").src="https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamRTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f58db6031cb325cfbaf366a330cf78148c0444a/Sun.png?disposition=attachment"
    
    colorM(note, selectClr);
}

function noteOff(note){
    console.log(`note:${note} // off`);
    

    if ( note == 99){
        document.getElementById('hello_tag').textContent = "Hello World!"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
      }

    if ( note == 64){
        document.getElementById('hello_tag').textContent = "Hello World!"
        colorM(note,0);
        colorM(note+1,0);
        colorM(note+2,0);
    }

    if(mercNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Mercury"
        document.getElementById("planetImg").src="https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--271ff8be3125a1e3b9284c6b326bca3bea2dc590/PIA16853.jpg?disposition=attachment"
        
        for(i=0;i<mercNoteArr.length;i++){
            colorM(mercNoteArr[i],mercClr);
        }
    }

    if(venNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Venus"
        document.getElementById("planetImg").src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/imagesvenus20191211venus20191211-16.jpeg?itok=gbbFb7q5"
        
        for(i=0;i<venNoteArr.length;i++){
            colorM(venNoteArr[i],venClr);
        }
    }

    if(earthNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Earth"
        document.getElementById("planetImg").src="https://eoimages.gsfc.nasa.gov/images/imagerecords/0/885/modis_wonderglobe.jpg"
        
        for(i=0;i<earthNoteArr.length;i++){
            colorM(earthNoteArr[i],earthClr);
        }
    }

    if(marsNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Mars"
        document.getElementById("planetImg").src="https://space-facts.com/wp-content/uploads/mars-v2.jpg"
        
        for(i=0;i<marsNoteArr.length;i++){
            colorM(marsNoteArr[i],marsClr);
        }
    }

    if(jupiNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Jupiter"
        document.getElementById("planetImg").src="https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0FTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d91c8056b0a4c3cd4cf6bcd3f7e6eda669270678/stsci-h-p1936a_1800.jpg?disposition=attachment"
        
        for(i=0;i<jupiNoteArr.length;i++){
            colorM(jupiNoteArr[i],jupiClr);
        }
    }

    if(satNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Saturn"
        document.getElementById("planetImg").src="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/edu_ring_a-round_the_saturn.jpg?itok=bmG0qRWp"
        
        for(i=0;i<satNoteArr.length;i++){
            colorM(satNoteArr[i],satClr);
        }
    }

    if(uraNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Uranus"
        document.getElementById("planetImg").src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/220px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg"
        
        for(i=0;i<uraNoteArr.length;i++){
            colorM(uraNoteArr[i],uraClr);
        }
    }

    if(neptNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Neptune"
        document.getElementById("planetImg").src="https://spaceplace.nasa.gov/all-about-neptune/en/neptune1.en.jpg"
        
        for(i=0;i<neptNoteArr.length;i++){
            colorM(neptNoteArr[i],neptClr);
        }
    }

    if(plutoNoteArr.includes(note)){
        document.getElementById('planetName').textContent = "Pluto"
        document.getElementById("planetImg").src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/nh_pluto_10.png?itok=MWjNZ1O8"
        
        for(i=0;i<plutoNoteArr.length;i++){
            colorM(plutoNoteArr[i],plutoClr);
        }
    }

}

// This function is used to change the color of the midi's LED's. 
// It is implemented in the noteOn and noteOff functions above
function colorM(key,clr){
  // The color key can be found on page 11 @ https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiEjtrOurb7AhXMlokEHcjqB_0QFnoECA8QAQ&url=https%3A%2F%2Fwww.djshop.gr%2FAttachment%2FDownloadFile%3FdownloadId%3D10737&usg=AOvVaw02Njpg1AY5jOV7Z6gjcw5W
    device && device.send([0x90,key,clr]); 
}