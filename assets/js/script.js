let searchButton = $(".btn")

searchButton.click (function()  {
  console.log("button pressed")
  sendApiRequest()
});

$(document).keypress(function (e) {
  if (e.which == 13) {
    console.log("enter pressed")
    sendApiRequest()
    return false;
  }
});

// API request and creation of variables for usage with the data. The variables need to be interpolated ${} and inverted commas are needed
async function sendApiRequest(){
  let APP_ID = "70cfd7b6"
  let API_KEY = "3c907ee335071481a2da16c76c9fcfde"
  let query = $("#search-recipe").val();
  let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)

  $("#content").empty()

for (var i = 0; i <= 20; i++) {
  var foodContent = 
  `<div class="card col-3" style="width: 18rem;">
    <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="${data.hits[i].recipe.label}">
      <div class="card-body">
        <h5 class="card-title">${data.hits[i].recipe.label}</h5>
        <p class="card-text">Ingredients:
        ${data.hits[i].recipe.dietLabels}
        </p>
        <a href="${data.hits[i].recipe.url}" class="btn btn-primary">The recipe is here!</a>
      </div>
    </div>
  </div>`
// added the button with the soruce of the recipe, in this way the page is more visually appealing

$("#content").append(foodContent);
}
}

var dropDown = document.getElementById("myDropdown");
var btn = document.querySelector(".dropbtn");

function drop() {
  dropDown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

btn.addEventListener("click", drop);