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

asterNoteArr = [36,41,46,58,
                61,64,71,74,
                77,89,94,99];

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
    document.getElementById('planetName').textContent = "A new destination..."
    document.getElementById("planetImg").src="https://i.gifer.com/Vp3M.gif"
    document.getElementById("infoCard").innerText = "Traveling...";
    document.getElementById("symbol").innerText = ""
    
    colorM(note, selectClr);
}

function noteOff(note){
    console.log(`note:${note} // off`);

    if(mercNoteArr.includes(note)){
      makeApiCall("mercure");
      document.getElementById('planetName').textContent = "☿ Mercury ☿"
      document.getElementById("planetImg").src="https://i.gifer.com/Owne.gif"
      document.getElementById("symbol").innerText = "The symbol for Mercury represents the head and winged cap "
      + "of Mercury, god of commerce and communication, surmounting his caduceus (staff).";
        
      for(i=0;i<mercNoteArr.length;i++){
        colorM(mercNoteArr[i],mercClr);
      }
    }

    if(venNoteArr.includes(note)){
      makeApiCall("venus");
      document.getElementById('planetName').textContent = "♀ Venus ♀"
      document.getElementById("planetImg").src="https://i.gifer.com/UK7n.gif"
      document.getElementById("symbol").innerText = "The symbol for Venus is designated as the female symbol, "
      + "thought to be the stylized representation of the hand mirror of this goddess of love."
        
      for(i=0;i<venNoteArr.length;i++){
        colorM(venNoteArr[i],venClr);
      }
    }

    if(earthNoteArr.includes(note)){
      makeApiCall("terre");
      document.getElementById('planetName').textContent = "🜨 Earth 🜨"
      document.getElementById("planetImg").src="https://i.gifer.com/hFZ.gif"
      document.getElementById("symbol").innerText = "The symbol for Earth shows a globe bisected"
      + " by meridian lines into four quarters."
        
      for(i=0;i<earthNoteArr.length;i++){
        colorM(earthNoteArr[i],earthClr);
      }
    }

    if(marsNoteArr.includes(note)){
        makeApiCall("mars");
        document.getElementById('planetName').textContent = "♂ Mars ♂"
        document.getElementById("planetImg").src="https://i.gifer.com/7gz4.gif"
        document.getElementById("symbol").innerText = "The symbol for Mars represents the shield and spear"
        + " of the god of war, Mars; it is also the male or masculine symbol."
        
        for(i=0;i<marsNoteArr.length;i++){
            colorM(marsNoteArr[i],marsClr);
        }
    }

    if(jupiNoteArr.includes(note)){
      makeApiCall("jupiter");
      document.getElementById('planetName').textContent = "♃ Jupiter ♃"
      document.getElementById("planetImg").src="https://i.gifer.com/WME4.gif"
      document.getElementById("symbol").innerText = "The symbol for Jupiter is said to represent a hieroglyph"
      + " of the eagle, Jove's bird, or to be the initial letter of Zeus with a line drawn through it"
      + " to indicate its abbreviation."
        
      for(i=0;i<jupiNoteArr.length;i++){
          colorM(jupiNoteArr[i],jupiClr);
      }
    }

    if(satNoteArr.includes(note)){
      makeApiCall("saturne");
      document.getElementById('planetName').textContent = "♄ Saturn ♄"
      document.getElementById("planetImg").src="https://i.gifer.com/56i2.gif"
      document.getElementById("symbol").innerText = "The symbol for Saturn is thought to be"
      + " an ancient scythe or sickel, as Saturn was the god of seed-sowing and also of time."

      for(i=0;i<satNoteArr.length;i++){
        colorM(satNoteArr[i],satClr);
      }
    }

    if(uraNoteArr.includes(note)){
      makeApiCall("uranus");
      document.getElementById('planetName').textContent = "⛢ Uranus ⛢"
      document.getElementById("planetImg").src="https://i.gifer.com/PAx.gif"
      document.getElementById("symbol").innerText = "The symbol for Uranus is represented by"
      + " combined devices indicating the Sun plus the spear of Mars, as Uranus was the personification"
      + " of heaven in Greek mythology, dominated by the light of the Sun and the power of Mars."
        
      for(i=0;i<uraNoteArr.length;i++){
          colorM(uraNoteArr[i],uraClr);
      }
    }

    if(neptNoteArr.includes(note)){
      makeApiCall("neptune");
      document.getElementById('planetName').textContent = "♆ Neptune ♆"
      document.getElementById("planetImg").src="https://i.gifer.com/KhVO.gif"
      document.getElementById("symbol").innerText = "The symbol for Neptune is the trident "
      + "(long three-pronged fork or weapon) of Neptune, god of the sea."
        
      for(i=0;i<neptNoteArr.length;i++){
        colorM(neptNoteArr[i],neptClr);
      }
    }

    if(plutoNoteArr.includes(note)){
      makeApiCall("pluton");
      document.getElementById('planetName').textContent = "♇ Pluto ♇"
      document.getElementById("planetImg").src="https://i.gifer.com/UZrh.gif"
      document.getElementById("symbol").innerText = "The symbol for dwarf planet Pluto is a monogram"
      + " made up of P and L in Pluto (and also the initials of Percival Lowell, who predicted its discovery)."
        
      for(i=0;i<plutoNoteArr.length;i++){
        colorM(plutoNoteArr[i],plutoClr);
      }
    }

    if(asterNoteArr.includes(note)){
      document.getElementById('planetName').textContent = "Asteroid Belt!"
      document.getElementById("planetImg").src="https://i.gifer.com/ZUiY.gif"
      var brochure = document.getElementById("infoCard");
      brochure.innerText = "Travel Brochure:"
      brochure.innerHTML += "<div class=\"posters\">" 
      + "<img src=\"https://d2pn8kiwq2w21t.cloudfront.net/images/grand_tour.width-1320.jpg\""
      + " style=\"width:295px\">"
      + "</div>"

      brochure.innerHTML += "<div class=\"posters\">" 
      + "<img src=\"https://d2pn8kiwq2w21t.cloudfront.net/images/mars.width-1320.jpg\""
      + " style=\"width:295px\">"
      + "</div>"

      brochure.innerHTML += "<div class=\"posters\">" 
      + "<img src=\"https://d2pn8kiwq2w21t.cloudfront.net/images/earth.width-1320.jpg\""
      + " style=\"width:295px\">"
      + "</div>"

      brochure.innerHTML += "<div class=\"posters\">" 
      + "<img src=\"https://d2pn8kiwq2w21t.cloudfront.net/images/venus.width-1320.jpg\""
      + " style=\"width:295px\">"
      + "</div>"

      brochure.innerHTML += "<div class=\"posters\">" 
      + "<img src=\"https://d2pn8kiwq2w21t.cloudfront.net/images/jupiter.width-1320.jpg\""
      + " style=\"width:295px\">"
      + "</div>"

      brochure.innerHTML += "<br><a class=\"prev\" onclick=\"plusSlides(-1)\">❮Prev Page<</a>"
      + " <a class=\"next\" onclick=\"plusSlides(1)\">>Next Page❯</a>"
      
      document.getElementById("symbol").innerText = ""
    }

}

// This function is used to change the color of the midi's LED's. 
// It is implemented in the noteOn and noteOff functions above
function colorM(key,clr){
  // The color key can be found on page 11 @ https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiEjtrOurb7AhXMlokEHcjqB_0QFnoECA8QAQ&url=https%3A%2F%2Fwww.djshop.gr%2FAttachment%2FDownloadFile%3FdownloadId%3D10737&usg=AOvVaw02Njpg1AY5jOV7Z6gjcw5W
    device && device.send([0x90,key,clr]); 
}