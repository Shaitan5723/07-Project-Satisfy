//Function to call google maps
 

function initMap(){
        
        var center = [
          // sydney
        {
          zoom:8,
          center: {lat:-33.87296,lng:151.220607},
        },
        // newtown
        {
          zoom:15,
          center: {lat:-33.89801,lng:151.17964},
        },
        // Surry
        {
          zoom:15,
          center: {lat:-33.88570,lng:151.21392},
        },
        // Pyrmont
        {
          zoom:15,
          center: {lat:-33.86959,lng:151.19504},
        },
      ]

        var map = new google.maps.Map(document.getElementById("map"),center[0]);
    
        addMarker({
          coords:{lat:-33.89571,lng:151.18073},//italian 
          content: "<h6>Italian Restaurant</h6>"
           
        });
        addMarker({
          coords:{lat:-33.89652,lng:151.18019},
          content: "<h6>Thai Restaurant</h6>"
        }); //thai
        addMarker({
          coords:{lat:-33.89716,lng:151.17954},
          content: "<h6>Japanese Restaurant</h6>"
        }); //japanese
        
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
            alert(selectedSuburb);
  var selectedSuburbInteger = parseInt(selectedSuburb);
  console.log(selectedSuburbInteger)

  map.setOptions(center[selectedSuburbInteger]);

};
};





    // function to save restaurants to favourites


