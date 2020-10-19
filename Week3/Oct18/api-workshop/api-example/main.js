(function () {
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  fetch(url)
  .then(function(response) {
    const aa = response.json();
    console.log(response);
    console.log(aa);
    console.log("testtt");
    
    return aa;
  })
  .then(function(gifs) {
    console.log("testtt2");
    console.log(gifs);
    console.log("testtt3");

    var gifDrop = document.querySelector(".gif");
    var link = gifs.data[1].images.downsized_medium.url;
    gifDrop.src = link;
  })
  .catch(function(error) {
    console.log(error);
  })
})();
