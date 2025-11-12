const API_KEY = "K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB";
const API_URL = `https://api.giphy.com/v1/gifs/random?`;
const URL = `${API_URL}&api_key=${API_KEY}`;

const myRequest = fetch(URL);

myRequest
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const img = document.createElement("img");
    img.src = imageUrl;
    document.body.appendChild(img);
  })
  .catch((error) => {
    console.error("Error en la petición:", error);
  });
