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
  zoom: 11,
  layers: [lightmap]
});

lightmap.addTo(myMap);

var marker = L.marker([50.5, 30.5], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");

/*var markers = L.markerClusterGroup();
markers.addLayer(L.marker(getRandomLatLng(myMap)));
//... Add more layers ...//
myMap.addLayer(markers);
*/


//load data


d3.json("data.json", function(ufoData) {
  
    console.log(ufoData);

    // log a list of names
  
});

    // Log an error if one exists
   /* 
    });

    for (var i = 0; i < ufoData.location; i++) {

      // Set the data location property to a variable
      var location = ufoData[i].location;
  
      // Check for location property
      if (location) {
  
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
          .bindPopup(response[i].descriptor));
      }
  
    }
  
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  
  });
 */ 