// build params
url = "https://api.le-systeme-solaire.net/rest/bodies/"
//key = there isn't one???
//how to include launchpad - each button/button section is assigned a planet


function makeApiCall(){
    url = "https://api.le-systeme-solaire.net/rest/bodies/mars"
    id = "mars"
    //build params
    params = {"id": id}
    console.log(params)

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);
        },
        error: function(error){
            console.log(error)
        }
    });

    //console.log(parseBody())
}

function parseBody(resp){
// index into the JSON resp as dictionary to get the individual pieces of data *continue editing*
    name = resp["body"]["englishName"]
    //windSpeed = resp["wind"]["speed"]
    //description = resp["weather"][0]["description"]
    // make sure the data is a number(type float) not a string
    // console.log(typeof temp)
    // console.log(typeof windSpeed)
    //console.log(`description = ${description}\n temp in farinheight = ${temp}\n wind speed in mph = ${windSpeed}`)
}

makeApiCall();