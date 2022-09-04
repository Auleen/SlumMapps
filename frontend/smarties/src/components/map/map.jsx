import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon1 from "./iconyay.png"


function Map() {
    return ( 
    
    <div className='container'>
        <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="650"
    src="https://geosaurus.maps.arcgis.com/apps/mapviewer/index.html?layers=88b6a607eb8645979649055077bdd514">
</iframe>
    </div> );
}

export default Map;