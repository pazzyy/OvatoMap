mapboxgl.accessToken = 'pk.eyJ1IjoicGF6enoiLCJhIjoiY2p0aTR5b2FjMDcwMDQzbDk4b2l5OXZ0cCJ9.MG1w6Xn4FvvZC8lrB6lVNA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/pazzz/cjtp37hn00hi61fs5jem1jd8x',
  center: [150.938272, -33.838341],
  zoom: 10.3
});

map.on('load', function() {


map.on('mousemove', function(e) {
  var territory = map.queryRenderedFeatures(e.point, {
    layers: ['DT_0204', 'DT_0801', 'DT in common']
  });
    // console.log(territory);
    document.getElementById('pd').innerHTML = '<h3><strong>' + territory[0].properties.r_a_t + '</strong></h3><p><strong><em>' + territory[0].properties.Resi + '</strong> RESI in this DT</em></p>';
});

map.getCanvas().style.cursor = 'default';


});

var toggleableLayerIds = [ 'DT_0204', 'DT_0801', 'DT in common'];
 
for (var i = 0; i < toggleableLayerIds.length; i++) {
var id = toggleableLayerIds[i];
 
var link = document.createElement('a');
link.href = '#';
link.className = 'active';
link.textContent = id;
 
link.onclick = function (e) {
var clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();
 
var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
 
if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
}
};
 
var layers = document.getElementById('menu');
layers.appendChild(link);
}

