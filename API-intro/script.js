const INPUT = document.querySelector('input')
const BUTTON = document.querySelector('button')
BUTTON.addEventListener("click", searchGIF)

function searchGIF() {
    // const key = API KEY GOES HERE
    const term = INPUT.value
    const img = document.querySelector('img')
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${term}`, {mode: 'cors'})
        .then(function(response) {
        return response.json()
        })
        .then(function(response) {
        img.src = response.data.images.original.url
    });
}