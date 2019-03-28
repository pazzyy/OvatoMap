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


    //Calls all layers used in the style 
    const mapLayers = map.getStyle().layers;


    //Goes through each keys of the layersData object to create a menu item out of the menuName and will also run a function when each item is clicked to check the visibility of the layer by using its ID
    Object.keys(layersData).forEach(key => {

        mapLayers.forEach(mapLayer => {
            if (mapLayer.id.includes(key) && mapLayer.id !== 'road-label') {
                layersData[key].layerIds.push(mapLayer.id);
            }
        })

        //Creates the menu items
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.id = layersData[key].menuName;
        link.textContent = layersData[key].menuName;

        var layers = document.getElementById('menu');
        layers.appendChild(link);

        //function that triggers when one of the item is clicked on
        link.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();

            //loops through each item in the layerIds array of each key to check the visibility of that item (each item is a layer represented by its Id)
            layersData[key].layerIds.forEach(id => {

                // stores the visibility property of the layer in a variable
                var visibility = map.getLayoutProperty(id, 'visibility');

                //compare the visibility value and change it
                if (visibility === 'visible') {
                    map.setLayoutProperty(id, 'visibility', 'none');
                    this.className = '';
                } else {
                    this.className = 'active';
                    map.setLayoutProperty(id, 'visibility', 'visible');
                };
            });
        };
    });

    map.getCanvas().style.cursor = 'default';

});



