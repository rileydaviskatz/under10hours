import React, { Fragment } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransparentTV from "./img/TransparentTV.png";
import staticgif from "./img/static.gif";
import './App.css';




const App = () => {
    let links = ['Patreon', 'Twitch', 'Youtube', 'Patreon', 'Twitch', 'Youtube'];
    let urls = ['https://www.patreon.com/under10hours'];

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