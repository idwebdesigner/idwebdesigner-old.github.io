// if #map-canvas is found
if (document.getElementById('map-canvas')){
 
  // Coordinates (Off Center)
  var myLatlng = new google.maps.LatLng(-7.772579, 110.401188);

  // Other options for the map, pretty much selfexplanatory
  var mapOptions = {
    zoom: 13,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: !1,
    styles: [
      {
        "stylers": [
          { "saturation": -100 }
        ] 
      },{
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]
  };
 
  // Attach a map to the DOM Element, with the defined settings
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  // Map Marker
  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(48.8566140,2.3522219),
    // Below is position of marker at the center of the map
    // position: new google.maps.LatLng(48.8566140,2.1000019), 
    animation: google.maps.Animation.DROP,
    map: map
  });

}