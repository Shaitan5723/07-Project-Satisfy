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
        ${data.hits[i].recipe.ingredientLines}
        </p>
      </div>
    </div>
  </div>`


$("#content").append(foodContent);
}
}

