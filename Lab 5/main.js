//Javascript Document

//let infoWindow; 

function initMap() {
  
let home = {
    lat: 21.2327719,
    lng: 72.9020135
  }; 

let div = document.querySelector('div'); 
//create new map object
let map = new google.maps.Map(div, {
  zoom: 18,
  center: home,
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

let marker=new google.maps.Marker({position:home,map:map})
}
//let infoWindow = new google.map.InfoWindow; 
  
//Try HTML5 geolocation 
//  
//if (navigator.geolocation)  {
//    navigator.geolocation.getCurrentPosition(function(position) {
//  let pos = {
//      lat: position.coords.latitude, 
//      lng: position.coords.longitude,                                      
//    }; 
//    infoWindow.setPositon(pos); 
//    infoWindow.setContent('Location found'); 
//    infoWindow.open(map); 
//  map.setCenter(pos);                                        
//    }, function() {
//    handleLocationError(true, infoWindow, map.getCenter()); 
//  });  
//} else  {
//  handleLocationError(false, infoWindow, map.getCenter()); 
//  }
