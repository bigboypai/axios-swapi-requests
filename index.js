const getCharButton = document.querySelector('.get-char-btn');
const getPlanetButton = document.querySelector('.get-planet-btn');
const getShipButton = document.querySelector('.get-spaceship-btn');

const baseURL = 'https://swapi.dev/api/';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max - min + min);
}

function catchNotFoundError() {
  Swal.fire('Not found', '404 ERROR', 'error');
}

function getCharacter() {
  const charName = document.querySelector('.char-name');
  const charGender = document.querySelector('.char-gender');
  const charBirth = document.querySelector('.char-birth');
  const charSkin = document.querySelector('.char-skin');

  axios({
    url: `${baseURL}/people/${generateRandomNumber(1, 25)}`,
  })
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
    });
}

function getPlanet() {
  const planetName = document.querySelector('.planet-name');
  const planetClimate = document.querySelector('.planet-climate');
  const planetTerrain = document.querySelector('.planet-terrain');
  const planetRotation = document.querySelector('.planet-rotation');

  axios({
    url: `${baseURL}/planets/${generateRandomNumber(1, 25)}`,
  })
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
    });
}

function getSpaceship() {
  {
    const shipName = document.querySelector('.ship-name');
    const shipModel = document.querySelector('.ship-model');
    const shipManufact = document.querySelector('.ship-manufact');
    const shipCrew = document.querySelector('.ship-crew');

    axios({
      url: `${baseURL}/starships/${generateRandomNumber(1, 15)}`,
    })
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
      });
  }
}

getCharButton.addEventListener('click', getCharacter);
getPlanetButton.addEventListener('click', getPlanet);
getShipButton.addEventListener('click', getSpaceship);
