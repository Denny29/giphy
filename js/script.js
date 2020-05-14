// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let newUrl;

$("#search-button").click(function(){
  
    let confusing= $("#search-term").val()
    let baseUrl="api.giphy.com/v1/gifs/search";
    let apiKey="Uzwi0JC7HqS4B6Orz17aD4yKY1IB8IHj";
    let numb = Math.floor(Math.random() * 10);
    console.log(numb);

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
          console.log(response.data[0].images['downsized'].url);
          $(".result").html(`<img id='result' src="${response.data[0].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[1].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[2].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[3].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[4].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[5].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[6].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[7].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[8].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[9].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[10].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[11].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[12].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[13].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[14].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[15].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[16].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[17].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[18].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[19].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[20].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[21].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[22].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[23].images['downsized'].url}">`);
          $(".result").append(`<img id='result' src="${response.data[24].images['downsized'].url}">`);
      })
      
      .then(function(response){
          console.log(response);
        $(".result").append(`<img id="result" src=${response.data[Math.floor(Math.random() * 10)].images['downsized'].url}>`);
    });
});