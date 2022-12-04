// build params
//key = there isn't one???
//how to include launchpad - each button/button section is assigned a planet


function makeApiCall(id){
    url = "https://api.le-systeme-solaire.net/rest/bodies/" + id
    //build params
    params = {"id": id}
    console.log(params)

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);
            parseBody(resp);
        },
        error: function(error){
            console.log(error)
        }
    });

    //console.log(parseBody())
}

function parseBody(resp){
// index into the JSON resp as dictionary to get the individual pieces of data *continue editing*
    info = ""
    info += "<h3>Profile</h3>"
    info += "<p>"
    info += "- Mass: " + resp["mass"]["massValue"] + " * 10<sup>" + resp["mass"]["massExponent"] + "</sup> kg.<br>"
    info += "- Volume: " + resp["vol"]["volValue"] + " * 10<sup>" + resp["vol"]["volExponent"] + "</sup> km<sup>3</sup>.<br>"
    info += "- Gravity: " + resp["gravity"] + " m/s<sup>2</sup>.<br>"
    if(resp["discoveredBy"] !== ""){
        info += "- Discovered by " + resp["discoveredBy"] + ".<br>"
    }
    if(resp["discoveryDate"] !== ""){
        info += "- Date discovered: " + resp["discoveryDate"] + ".<br>"
    }
    info += "</p>"
    document.getElementById("infoCard").innerHTML = info;
    console.log(info);
}

//brochure slideshow code
let postIndex = 0;
showSlides(postIndex);

function plusSlides(n) {
  showSlides(postIndex += n);
}

function currentSlide(n) {
  showSlides(postIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("posters");
  if (n > slides.length) {postIndex = 0}    
  if (n < 1) {postIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[postIndex-1].style.display = "block";  
}