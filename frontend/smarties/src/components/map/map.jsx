import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon1 from "E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/components/map/iconyay.png"


function Map() {
    return ( 
    
    <div className='container'>
        <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="650"
    height="650"
    src="https://geosaurus.maps.arcgis.com/apps/mapviewer/index.html?layers=88b6a607eb8645979649055077bdd514">
</iframe>

<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="650"
    height="650"
    src="https://www.arcgis.com/apps/mapviewer/index.html?url=https://gmis.smartcities.gov.in/server/rest/services/UrbanObservatory/UrbanStatistics/FeatureServer/10">
</iframe>
    </div> );
}

export default Map;