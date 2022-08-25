import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon1 from "E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/components/map/iconyay.png"


function Map() {
    return ( <div>
        <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="650"
    height="650"
    src="https://geosaurus.maps.arcgis.com/apps/mapviewer/index.html?layers=88b6a607eb8645979649055077bdd514">
</iframe>
    </div> );
}

const covidIcon = new Icon({
    iconUrl: icon1,
    iconSize: [25, 25]
  })
function MapAgain(){

    return (
        <div className='container>'>
        <MapContainer 
            center = { [ 30, 78.00] }
            zoom = { 5 }
            scrollWheelZoom = { true } 
  
        >
        <TileLayer 
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />
        
        </MapContainer></div> )

}

export default Map;