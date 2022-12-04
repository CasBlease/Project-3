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