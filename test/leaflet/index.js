var L = window.L;

var map = L.map('map').setView([47.91333333333333, 7.585], 11);

L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
var myStyle = {
  'color': '#000000',
  fillColor: '#ff7800'
};

L.geoJson(data, {
  style: myStyle
}).addTo(map);