let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
    ],
    maxPlaceCount: 24,
    
    placeChooserViewSetup: ({defaultLayoutMode}) => {
        if (defaultLayoutMode === 'SHEET') {
        return {position: 'BLOCK_END'};
        }
    },
    placeDetailsViewSetup: ({defaultLayoutMode}) => {
        if (defaultLayoutMode === 'SHEET') {
        return {layoutMode: 'INFO_WINDOW'};
        }
    },
    placeChooserViewSetup: {layoutMode: 'HIDDEN'},
  });

  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });

   // Build and add the Autocomplete search bar
const input = document.getElementById("input");
const options = {
  types: ["address"],
  /*
  componentRestrictions: {
    country: "aus",
  },
  */
  fields: ["address_components", "geometry", "name"],
};
const autocomplete = new google.maps.places.Autocomplete(input, options);

autocomplete.addListener("place_changed", () => {
  const place = autocomplete.getPlace();

  if (!place || !place.geometry) {
    // User entered the name of a Place that was not suggested and
    // pressed the Enter key, or the Place Details request failed.
    window.alert("No address available for that input.");
    return;
  }

  // Recenter the map to the selected address
  map.setOptions({
    center: place.geometry.location,
    zoom: 14,
  });
  // Update the localContext directionsOptions origin
  localContextMapView.directionsOptions = {
    origin: place.geometry.location,
  };
  new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAbUlEQVR4Ae3LoQ2AMAAF0TMYPJoV2IApGIJtmIMtmIAVqutraj6IiqZpmyYoCO/08R7bXbOOHSF2Ohr0HCh00EPdwImiTgYqRgxKMowUTFiUyTKRMeNQIcdMYsGjSp6FyIoaWkmoUuLxEPzDh1xIaLFFuTyHMgAAAABJRU5ErkJggg==",
      zIndex: 30,
    });
    // update the results with new places
    localContextMapView.search();
  });
}

window.initMap = initMap;