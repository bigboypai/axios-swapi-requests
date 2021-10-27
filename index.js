const baseURL = 'https://swapi.dev/api/';

// With this small algorith I create a random number between min and max numbers

let generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * max - min + min);

// This is part of a CDN imported through HTML. I use this function to catch the possible 404 errors.

function catchNotFoundError() {
  Swal.fire('Not found', '404 ERROR', 'error');
}

// This part selects the HTML elements to be manipulated, after that, I use the AXIOS HTTP client to make the request. A catch method is used in case a 404 error is thrown during the request.

function getCharacter() {
  const charName = document.querySelector('.char-name');
  const charGender = document.querySelector('.char-gender');
  const charBirth = document.querySelector('.char-birth');
  const charSkin = document.querySelector('.char-skin');

  axios({ url: `${baseURL}/people/${generateRandomNumber(1, 25)}` })
    .then(
      (res) => (
        (charName.innerText = res.data.name),
        (charGender.innerText = res.data.gender),
        (charBirth.innerText = res.data.birth_year),
        (charSkin.innerText = res.data.skin_color)
      )
    )
    .catch((err) => {
      catchNotFoundError();
      console.log(err);
    });
}

function getPlanet() {
  const planetName = document.querySelector('.planet-name');
  const planetClimate = document.querySelector('.planet-climate');
  const planetTerrain = document.querySelector('.planet-terrain');
  const planetRotation = document.querySelector('.planet-rotation');

  axios({ url: `${baseURL}/planets/${generateRandomNumber(1, 25)}` })
    .then(
      (res) => (
        (planetName.innerText = res.data.name),
        (planetClimate.innerText = res.data.climate),
        (planetTerrain.innerText = res.data.terrain),
        (planetRotation.innerText = res.data.rotation_period)
      )
    )
    .catch((err) => {
      catchNotFoundError();
      console.log(err);
    });
}

function getSpaceship() {
  {
    const shipName = document.querySelector('.ship-name');
    const shipModel = document.querySelector('.ship-model');
    const shipManufact = document.querySelector('.ship-manufact');
    const shipCrew = document.querySelector('.ship-crew');

    axios({ url: `${baseURL}/starships/${generateRandomNumber(1, 15)}` })
      .then(
        (res) => (
          (shipName.innerText = res.data.name),
          (shipModel.innerText = res.data.model),
          (shipManufact.innerText = res.data.manufacturer),
          (shipCrew.innerText = res.data.crew)
        )
      )
      .catch((err) => {
        catchNotFoundError();
        console.log(err);
      });
  }
}

// Event listeners which triggers the AXIOS requests

const getCharButton = document
  .querySelector('.get-char-btn')
  .addEventListener('click', getCharacter);
const getPlanetButton = document
  .querySelector('.get-planet-btn')
  .addEventListener('click', getPlanet);
const getShipButton = document
  .querySelector('.get-spaceship-btn')
  .addEventListener('click', getSpaceship);
