// // This array contains the coordinates for all bus stops between MIT and Harvard
// const busStops = [
//   [-71.093729, 42.359244],
//   [-71.094915, 42.360175],
//   [-71.0958, 42.360698],
//   [-71.099558, 42.362953],
//   [-71.103476, 42.365248],
//   [-71.106067, 42.366806],
//   [-71.108717, 42.368355],
//   [-71.110799, 42.369192],
//   [-71.113095, 42.370218],
//   [-71.115476, 42.372085],
//   [-71.117585, 42.373016],
//   [-71.118625, 42.374863],
// ];

// // TODO: add your own access token
// mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhLXR1bnRpIiwiYSI6ImNscm80MHEyZzBodGwyam9idG9kaXE2Z20ifQ.UtO9YjmTBKWqUtdlwEF7mw';

// // This is the map instance
// let map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [-71.104081, 42.365554],
//   zoom: 14,
// });

// // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
// var marker = new mapboxgl.Marker({
//   color: '#08734c',
//   size: 'large',
//   rotation: 45,
// })
//   .setLngLat([-71.093729, 42.359244])
//   .addTo(map);

// // counter here represents the index of the current bus stop
// let counter = 0;
// function move() {
//   // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
//   // Use counter to access bus stops in the array busStops
//   // Make sure you call move() after you increment the counter.
//   setTimeout(() => {
//     if (counter >= busStops.length) return;
//     const randomColor = getRandomColor();
//     marker.setMarkerColor(randomColor);
//     marker.setLngLat(busStops[counter]);
//     counter++;
//     move();
//   }, 1000);
// }


// if (typeof module !== 'undefined') {
//   module.exports = { move, counter, marker, busStops };
// }

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhLXR1bnRpIiwiYSI6ImNscm80MHEyZzBodGwyam9idG9kaXE2Z20ifQ.UtO9YjmTBKWqUtdlwEF7mw';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker({
  color: '#08734c',
  size: 'large',
  rotation: 45,
})
  .setLngLat([-71.093729, 42.359244])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= busStops.length) return;
    // const randomColor = getRandomColor();
    // marker.setMarkerColor(randomColor);
    // marker.color(getRandomColor)
    // Remove the existing marker
    marker.remove();

    // Generate a random color
    const randomColor = getRandomColor();

    // Create a new marker with the new color
    marker = new mapboxgl.Marker({
      color: randomColor,
      size: 'large',
      rotation: 45,
    }).setLngLat(busStops[counter]).addTo(map);
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}


if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}