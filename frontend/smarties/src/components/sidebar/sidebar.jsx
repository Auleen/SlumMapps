import React, { Component } from 'react';
import 'E:/defsmart Finale/defsmart draft 1/frontend/smarties/src/components/sidebar/sidebar.css'
function Sidebar() {
    return (<>
    <div className='sidecont'>
            <h2><strong>Search 🔎</strong></h2>
    <div className='row'>
    <strong>Select State: </strong>
    <select className='dropdown'>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>
    </div>

    <div className='row'>
    <strong>Select District: </strong>
    <select className='dropdown'>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>
    </div>

    <div className='row'>
    <strong>Select City: </strong>
    <select className='dropdown'>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>
    </div>

    <div className='row'>
    <strong>Select Slum: </strong>
    <select className='dropdown'>
        <option value="grapefruit">Dharavi</option>
        <option value="lime">Geeta Colony</option>
        <option selected value="coconut">Kurla-Ghatkopar</option>
        <option value="mango">Mankhurd-Govandi</option>
    </select>
    </div>

    <button className="btn">Search</button>


    </div>
    </>  );
}

export default Sidebar;