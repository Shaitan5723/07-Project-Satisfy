let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest()
});


async function sendApiRequest(){
  let APP_ID = "70cfd7b6"
  let API_KEY = "3c907ee335071481a2da16c76c9fcfde"
  let query = document.getElementById("#searchTerm")
  let queryText = query.innerText
  let response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=70cfd7b"6&app_key=3c907ee335071481a2da16c76c9fcfde');
  console.log(response)
  let data = await response.json()
  console.log(data)

for (var i = 0; i <= 20; i++) {
  var foodContent = 
  `<div class="card col-3 offset-1" style="width: 18rem;">
  <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="">
  <div class="card-body">
  <h5 class="card-title">${data.hits[i].recipe.label}</h5>
  <p class="card-text"></p>
  </div>
  </div>
  </div>`


$(".content").append(foodContent);
}
}

