mapboxgl.accessToken = 'pk.eyJ1IjoicGF6enoiLCJhIjoiY2p0aTR5b2FjMDcwMDQzbDk4b2l5OXZ0cCJ9.MG1w6Xn4FvvZC8lrB6lVNA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pazzz/cjtp37hn00hi61fs5jem1jd8x',
    center: [150.938272, -33.838341],
    zoom: 10.3
});

// const mapLayers = map.getStyle().layers;


const layersData = {
       DT_0204: {
            layerIds: [],
            menuName: 'Old DTs'
        }, 
        DT_0801: {
            layerIds:[],
            menuName: 'New DTs'
        },
        'DT in common': {
            layerIds:[],
            menuName:'Overlap'
        },
        DT_outlines: {
            layerIds:[],
            menuName:'DT Outlines'
        },
        road: {
            layerIds: [],
            menuName: 'Roads'
        },
        tunnel: {
            layerIds: [],
            menuName: 'Tunnels'
        },
        bridge: {
            layerIds: [],
            menuName: 'Bridges'
        }
    };


