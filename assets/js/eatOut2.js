//Function to call google maps
 

function initMap(){
        
        var center = [
          // sydney
        {
          zoom:12,
          center: {lat:-33.88262,lng:151.20655},
        },
        // newtown
        {
          zoom:16,
          center: {lat:-33.89801,lng:151.17964},
        },
        // Surry
        {
          zoom:16,
          center: {lat:-33.88570,lng:151.21392},
        },
        // Pyrmont
        {
          zoom:16,
          center: {lat:-33.86959,lng:151.19504},
        },
      ]

        var map = new google.maps.Map(document.getElementById("map"),center[0]);
    

// TODO: centralize markers in array objects.
// var markers = [
//   {
//     coords:{lat:-33.89571,lng:151.18073},//italian 
//     content: "Italian Restaurant"
//   },
//   {
//     coords:{lat:-33.89652,lng:151.18019},//thai
//     content: "Thai Restaurant"
//   },
//   {
//     coords:{lat:-33.89716,lng:151.17954},//japanese
//     content: "Japanese Restaurant"
//   }
// ]

// for (var i=0; i<markers.length;i++){
//   addMarker({
//     coords: markers[i].coords,
//     content: `<h6>${markers[i].content}</h6><br>`
//   })
// }

        // newtown markers
        addMarker({
          coords:{lat:-33.89571,lng:151.18073},//italian The Italian Bowl
          title:"Hello world",
          content:"<h6>The Italian Bowl</h6>" + "<a href='https://theitalianbowl.com.au/' target='_blank'>website</a>",
        });
        addMarker({
          coords:{lat:-33.89851,lng:151.17617},//italian Rosso ANtico Pizza
          content: "<h6>Rosso Antico Pizza</h6>"
        });
        addMarker({
          coords:{lat:-33.89664,lng:151.17986},//thai Thai Pothong
          content: "<h6>Thai Pothong</h6>"
        }); 
        addMarker({
          coords:{lat:-33.89797,lng:151.17868},//thai Thai Ways
          content: "<h6>Thai Ways</h6>"
        }); 
        addMarker({
          coords:{lat:-33.89716,lng:151.17954},//Sushi Train japanese
          content: "<h6>Sushi Train</h6>"
        }); 
        addMarker({
          coords:{lat:-33.89898,lng:151.17295},//Sushi Kazuki Enmore
          content: "<h6>Kazuki Enmore</h6>"
        }); 
        // pyrmont markers
        addMarker({
          coords:{lat:-33.86675,lng:151.19281},//japanese Yuzu
          content: "<h6>Yuzu</h6>"
        });
        addMarker({
          coords:{lat:-33.86924,lng:151.19590},//japanese sokyo
          content: "<h6>Sokyo</h6>"
        });
        addMarker({
          coords:{lat:-33.86940,lng:151.19279},//italian made in italy
          content: "<h6>Made in Italy</h6>"
        });
        addMarker({
          coords:{lat:-33.86821,lng:151.19569},//italian Cucina Porto
          content: "<h6>Cucina Porto</h6>"
        });
        addMarker({
          coords:{lat:-33.86928,lng:151.19674},//thai Jumbo Thai
          content: "<h6>Jumbo Thai</h6>"
        }); 
        addMarker({
          coords:{lat:-33.86755,lng:151.19200},//thai Pyrmont Thai
          content: "<h6>Pyrmont Thai</h6>"
        }); 
        // Surry markers
        addMarker({
          coords:{lat:-33.88671,lng:151.21025},//japanese Izakaya Fujiyama
          content: "<h6>Izakaya Fujiyama</h6>"
        });
        addMarker({
          coords:{lat:-33.88350,lng:151.21015},//japanese Tokyo Bird
          content: "<h6>Tokyo Bird</h6>"
        });
        addMarker({
          coords:{lat:-33.88491,lng:151.21583},//italian Vacanza
          content: "<h6>Vacanza</h6>"
        });
        addMarker({
          coords:{lat:-33.88301,lng:151.21201},//italian AL Taglio
          content: "<h6>Al Taglio</h6>"
        });
        addMarker({
          coords:{lat:-33.88421,lng:151.21103},//thai Wandee Restaurant
          content: "<h6>Thai Wandee</h6>"
        }); 
        addMarker({
          coords:{lat:-33.88551,lng:151.21379},//thai Silom 
          content: "<h6>Thai Silom</h6>"
        });


        
//Function to call markers
        function addMarker(props){
          var marker = new google.maps.Marker({
             position:props.coords,
             map:map
           });
    
          if (props.content){
            var infoWindow = new google.maps.InfoWindow({
             content:props.content
           });
           marker.addListener("click",function(){
             infoWindow.open(map, marker);
           });
          }
        }



//funtion to select suburb
var suburb = document.querySelector("#suburb");
var btnSuburb = document.querySelector("#btnSuburb");

btnSuburb.onclick = (event)=>{
  event.preventDefault();
  var selectedSuburb = [].filter
                .call(suburb.options, option => option.selected)
                .map(option => option.value);
            // alert(selectedSuburb);
  var selectedSuburbInteger = parseInt(selectedSuburb);
  console.log(selectedSuburbInteger)

  map.setOptions(center[selectedSuburbInteger]);

};
// function to save restaurants to favourites
};



  


