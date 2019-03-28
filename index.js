mapboxgl.accessToken = 'pk.eyJ1IjoicGF6enoiLCJhIjoiY2p0aTR5b2FjMDcwMDQzbDk4b2l5OXZ0cCJ9.MG1w6Xn4FvvZC8lrB6lVNA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pazzz/cjtp37hn00hi61fs5jem1jd8x',
    center: [150.938272, -33.838341],
    zoom: 10.3
});

map.on('load', function () {
    console.log(map.getStyle())

    //Displays the DT information on mouseover
    map.on('mousemove', function (e) {
        var territory = map.queryRenderedFeatures(e.point, {
            layers: [
                'DT_0204', 
                'DT_0801', 
                'DT in common'
            ]
        });

        if (territory.length > 1) {
            document.getElementById('pd').innerHTML = '<h3><strong>' + territory[0].properties.r_a_t + '</strong></h3><p><strong>' + territory[0].properties.Resi + '</strong> RESI in this DT</p>';
        } else {
            document.getElementById('pd').innerHTML = '<p><strong>No DT selected</strong></p>'
        };
    });

    const layersData = {
       DT_0204: {
            layerIds: ['DT_0204'],
            menuName: 'Old DTs'
        }, 
        DT_0801: {
            layerIds:['DT_0801'],
            menuName: 'New DTs'
        },
        DT_Common: {
            layerIds:['DT in common'],
            menuName:'Overlap'
        },
        roads: {
            layerIds: [],
            menuName: 'Roads'
        }
    }

    const mapLayers = map.getStyle().layers;
    mapLayers.forEach(mapLayer => {
        if (mapLayer["source-layer"] === "road" && mapLayer.id !== 'road-label') {
                layersData.roads.layerIds.push(mapLayer.id)
        }
    })

    Object.keys(layersData).forEach(key => {
        var layerData = layersData[key]

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.id = layerData.menuName;
        link.textContent = layerData.menuName;

        link.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();

            layerData.layerIds.forEach(id => {
                var visibility = map.getLayoutProperty(id, 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty(id, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(id, 'visibility', 'visible');
            }
            })
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
    });

    map.getCanvas().style.cursor = 'default';

});



