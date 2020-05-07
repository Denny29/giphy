// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let newUrl;

$("#search-button").click(function(){
  
    let confusing= $("#search-term").val()
    let baseUrl="api.giphy.com/v1/gifs/search"
    let apiKey="Uzwi0JC7HqS4B6Orz17aD4yKY1IB8IHj"

    console.log(confusing);
    newUrl=(`https://${baseUrl}?q=${confusing}&api_key=${apiKey}`);
    console.log(newUrl);
    fetch(newUrl)
    .then(function(response) {
  		return response.json();
  	})
    .then(function(response) {
          console.log(response);
          response.data[0].url
          console.log(response.data[0].images['480w_still'].url);
          $(".result").html(`<img id='result' src="${response.data[0].images['480w_still'].url}">`);
  	})
      
});

