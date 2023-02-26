const COMPANY_COORDINATES = {
  lat: 59.96831,
  lng: 30.31748
}

const DEFAULT_ZOOM =  16;

const MAP_SETTINGS = {
  layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

let mapPicture = document.querySelector('.map picture');
let map;

const pinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainMarker = L.marker(
  COMPANY_COORDINATES,
  {
    icon: pinIcon,
  }
);

const initMap = () => {
  map = L.map('map').setView(COMPANY_COORDINATES, DEFAULT_ZOOM);

  L.tileLayer(MAP_SETTINGS.layer, MAP_SETTINGS.attribution).addTo(map);

  mainMarker.addTo(map);

  mapPicture.classList.add('visually-hidden');
}

export {initMap};
