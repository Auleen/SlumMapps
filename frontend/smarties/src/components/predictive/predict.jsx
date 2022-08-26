import React, { Component } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './predict.css'
import Slums from 'E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/assets/differenceSlums.png'
import Airslum from 'E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/assets/AirportSlum1.png'
import Cnn from 'E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/assets/maskcnn.jpeg'
import Dharavi from 'E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/assets/DharaviMap1.png'
function Predict() {
    const navigate = useNavigate();
    return ( 
        <>
        <div className='head'>
            <h2>Slum Geo-Segmentation</h2>
            <h4>Geographical Slum Segmentation and Change Detection on Satellite Images.</h4>
            <button className='btnagain'><Link style={{ textDecoration: "none",color:"white"}} to="/interactivemaps">
              View Maps
            </Link></button>
            <button className='btnagain' onclick="location.href='https://github.com/Auleen/Kafka'">View ReadMe</button>
        </div>
        <div className='textbox'>
            <h3>Geographical Slum Segmentation</h3>
            <p>More than one billion people live in slums around the world. In some developing countries, slum residents make up for more than half of the population and lack reliable sanitation services, clean water, electricity, other basic services. Any intitative on slum rehabitiation and improvement relies heavily on slum mapping and monitoring. When we spoke to the relevant authorities, we found out that they mapped slums manually (human annotators), which takes a substantial amount of time. We realised we could automate this and used a deep learning approach to segment and map individual slums from satellite imagery. In addition, we also wrote code to perform change detection and monitor slum change over time. Slum change detection is an important task and analysing increase/decrease of a slum can provide valuable insights.</p>
        </div>
        <div className='textbox'>
            <h3>How do we go about it?</h3>
            <p>We curated a dataset containing 3-band (RGB) satellite imagery with 65 cm per pixel resolution collected from Google Earth. Each image has a pixel size of 1280x720. The satellite imagery covers most of Mumbai and we include images from 2002 to 2018, to analyze slum change. We used 513 images for training, and 97 images for testing. 
            The model trained here can be deployed on ArcGIS Pro as well as ArcGIS Enterprise and even support distributed processing for quick results.
            <br></br>
            <b>In this workflow we will basically have three steps.</b>
            <br></br>
            <ul>
            <li>Export Training Data using ArcGIS Pro</li>
            <li>Train a Model using learn module in ArcGIS API for Python</li>
            <li>Deploying the Model on ArcGIS Pro</li>
            </ul>
            <img src={Dharavi}/>
            <p>For slum segmentation and mapping, we trained a Mask R-CNN on our custom dataset. </p>
            </p>
            <img src={Cnn}/>
            <p>
            The Kurla-Ghatokopar slums (below) are one of the first things you see when you land in Mumbai, given their proximity to the Chhatrapati Shivaji Maharaj International Airport.
            </p>
            <img src={Airslum}/>
        </div>
        <div className='textbox'>
            <h3>Tracking Changes in Slum Areas</h3>
            <p>For slum change detection, we took a pair of satellite images, representing the same location at different points of time. We predicted masks for both these images and then subtracted the masks to obtain a percentage icrease/decrease.<br></br><b>Given below is a GIS representation of Dharavi Slums in the year 2004 and 2014</b></p>
            <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="600"
    src="https://geosaurus.maps.arcgis.com/apps/dashboards/809e82a098264c38bfd608e7cc08d5f3">
</iframe>
<p>The following images (below) show a change of +35.25% between 2018 (top row) and 2005 (bottom row) of the same slum.</p>
        <img src={Slums}/>
        </div>
        </>
     );
}

export default Predict;