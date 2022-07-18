import React, { Fragment } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransparentTV from "./img/uthcrt.png";
import staticgif from "./img/static.gif";
import './App.css';




const App = () => {
    let links = ['YouTube', 'Patreon','T-Shirt', 'Stickers', 'Game Collection', 'Fun' + "\n" + 'Stuff'];
    let urls = ['https://www.youtube.com/under10hoursgaming','https://www.patreon.com/under10hours', 'https://www.etsy.com/shop/Under10Hours', 'https://www.redbubble.com/people/under10hours/shop'];

    const buildGrid = () => (
        links.map((link, i) => (
            <Fragment>
                <div id='PatreonLink'>
                    <a href={urls[i]}>
                        <div className='link'>{link}</div>
                    </a>
                </div>
            </Fragment>
        ))
    )
        
    return (
        <div className="imgContainer">
            <img src={TransparentTV} height="100%" className="crt"></img>
            <img src={staticgif}  className="staticgif"></img>
            <h1 className='titleText'>Under10Hours</h1>
            <div className="grid">
                { buildGrid() }
            </div>
        </div>
      );
};

export default App;