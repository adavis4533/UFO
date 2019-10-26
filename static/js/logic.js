//function createMap(ufoSightings){

  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

// Creating map object
var myMap = L.map("map", {
  center: [39.2390, -97.7688],
  zoom: 4,
  layers: [lightmap]
});

lightmap.addTo(myMap);


var SaucerIcon = L.Icon.extend({
    options: {
        shadowUrl: '../static/images/shadow3.png',
        iconSize:     [50, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
var ufoIcon = new SaucerIcon({iconUrl: '../static/images/saucer2.png'});



//Load Data
d3.json('data.json').then(function(data) {
  
  //Create markers
  var markers = L.markerClusterGroup();

  //for loop to get number of objects 
  for (var i = 0; i < data.data.length; i++) {

    // Set the data location property to a variable
    var location = data.data[i];
    
    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.city_latitude, location.city_longitude], {icon: ufoIcon})
        .bindPopup(data.data[i].summary));
       
    }

  }
  myMap.addLayer(markers);
});


// var count = Object.values('data.json').length;
//   console.log(count);  

    // log a list of names
  


    // Log an error if one exists
   
    
  
    // Add our marker cluster layer to the map
  

 