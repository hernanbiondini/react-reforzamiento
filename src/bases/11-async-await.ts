import type { GiphyRandomResponse, Gif } from "../data/giphy.response";

const API_KEY = "K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB";
const API_URL = `https://api.giphy.com/v1/gifs/random?`;
const URL = `${API_URL}&api_key=${API_KEY}`;


const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.appendChild(imgElement);
};


const getRandomGifUrl = async() => {  
  const response = await fetch(URL);
  const {data} : GiphyRandomResponse = await response.json();
  return data.images.original.url;
}


//getRandomGifUrl().then((URL) => createImageInsideDOM(URL));
getRandomGifUrl().then(createImageInsideDOM);