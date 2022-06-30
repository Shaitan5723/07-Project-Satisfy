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
    
///////////////////////////////////////////////////////////////////////////////////////
// TODO: centralize markers in array objects. (if there is time before project due date)
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
////////////////////////////////////////////////////////////////////////////////////////

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
// function to select type of food
var food = document.querySelector("#food");
var btnFood = document.querySelector("#btnFood")

btnFood.onclick = (event)=>{
  event.preventDefault();
  var selectedFood = [].filter
  // console.log(selectedFood);
                .call(food.options, option => option.selected)
                .map(option => option.value);
                alert(selectedFood);

// store markers parameters
        // newtown markers

        addMarker({
          coords:{lat:-33.89571,lng:151.18073},//italian The Italian Bowl
          content:"<a href='https://theitalianbowl.com.au/' target='_blank'> <h6>The Italian Bowl</h6> </a>" + "<img src='../images/italianBowl.jpeg'>",
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
          content: "<a href='https://www.facebook.com/YuzuPyrmont/' target='_blank'> <h6 class='card-heading'>Yuzu</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/Yuzu.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.86924,lng:151.19590},//japanese sokyo
          content: "<a href='https://www.star.com.au/sydney/eat-and-drink/signature-dining/sokyo' target='_blank'> <h6 class='card-heading'>Sokyo</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/sokyo.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.86940,lng:151.19279},//italian made in italy
          content: "<a href='https://madeinitaly.com.au/italian-restaurant-pyrmont/' target='_blank'> <h6 class='card-heading'>Made in Italy</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/Made-In-Italy-Pyrmont.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.86821,lng:151.19569},//italian Cucina Porto
          content: "<a href='https://www.star.com.au/sydney/eat-and-drink/casual-dining/cucina-porto' target='_blank'> <h6 class='card-heading'>Cucina Porto</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/Cucina-Porto.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.86928,lng:151.19674},//thai Jumbo Thai
          content: "<a href='https://jumbothai.com.au/' target='_blank'> <h6 class='card-heading'>Jumbo Thai</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/jumbothai.jpeg'>",
        }); 
        addMarker({
          coords:{lat:-33.86755,lng:151.19200},//thai Pyrmont Thai
          content: "<a href='https://www.pyrmontthai.com.au/' target='_blank'> <h6 class='card-heading'>Pyrmont Thai</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/pyrmont-thai.jpeg'>",
        }); 
        addMarker({
          coords:{lat:-33.871950,lng:151.194890},//takumi
          content: "<a href='https://takumijapanese.com.au/' target='_blank'> <h6 class='card-heading'>Takumi</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/takumi.jpeg'>",
        }); 
        addMarker({
          coords:{lat:-33.866610,lng:151.192390},//The Italian Style Pizza And Pasta
          content: "<a href='https://www.menulog.com.au/restaurants-the-italian-style-pizza-pasta/menu' target='_blank'> <h6 class='card-heading'>The Italian Style Pizza And Pasta</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/the-italian-style-pizza-and-pasta.jpeg'>",
        }); 
        
        // Surry markers
        addMarker({
          coords:{lat:-33.88671,lng:151.21025},//japanese Izakaya Fujiyama
          content: "<a href='https://izakayafujiyama.com.au/menu/' target='_blank'> <h6 class='card-heading'>Izakaya Fujiyama</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/izakayafujiyama.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.88350,lng:151.21015},//japanese Tokyo Bird
          content: "<a href='https://www.tokyobird.com.au/' target='_blank'> <h6 class='card-heading'>Tokyo Bird</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/Tokyobird.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.88491,lng:151.21583},//italian Vacanza
          content: "<a href='https://www.vacanza.com.au/' target='_blank'> <h6 class='card-heading'>Vacanza</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/Vacanza.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.88301,lng:151.21201},//italian AL Taglio
          content: "<a href='https://altaglio.com.au/' target='_blank'> <h6 class='card-heading'>Al Taglio</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/al-taglio.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.88421,lng:151.21103},//thai Wandee Restaurant
          content: "<a href='https://wandeethai.com.au/' target='_blank'> <h6 class='card-heading'>Thai Wandee</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/wandeethai.jpeg'>",
        }); 
        addMarker({
          coords:{lat:-33.88551,lng:151.21379},//thai Silom 
          content: "<a href='https://www.silomthai.com.au/menu' target='_blank'> <h6 class='card-heading'>Thai Silom</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/thaisilom.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.885700,lng:151.213760},//Mille vini
          content: "<a href='https://millevini.com.au/' target='_blank'> <h6 class='card-heading'>Mille Vini</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/Mille-Vini.jpeg'>",
        });
        addMarker({
          coords:{lat:-33.881470,lng:151.210240},//Goryon San
          content: "<a href='https://goryon-san.com.au/' target='_blank'> <h6 class='card-heading'>Goryon San</h6> </a>" + "<img style='height:100px;width:100px;' src='../images/goryon-san.jpeg'>",
        });

}
};



  


