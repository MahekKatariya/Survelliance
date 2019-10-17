var locations = [ 
    ['Agent 1', 22.552219,72.922266, 2],
    ['Agent 2', 22.552308, 72.923092, 2]
];
var map,marker=[];
function reload(){
    var i,j=0;
    var infowindow = new google.maps.InfoWindow();
    for (i = 0; i < locations.length; i++) 
    {
        if (marker[i] && marker[i].setMap) {
            marker[i].setMap(null);
        }
        marker[i] = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'images/agent1.ico'
        });
        var m=marker[i];
        google.maps.event.addListener(m, 'mouseover', (function(m, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, m);
            }
        })(m, i));
        
        locations[i][1]+=0.0001;
    }
    
}

function initMap() {
   
    

    map = new google.maps.Map(document.getElementById('map'), 
    {
        zoom: 18,
        draggable: true,
        /*styles: [{
        "stylers": [{
            "hue": "#ff6501"
            }, {
            saturation: 20
            }, {
            gamma: 1
            }]
        }],*/
        center: new google.maps.LatLng(22.552219, 72.922266),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    

    
    setInterval(() => {
       reload();
    }, 3000);
    
    
}
