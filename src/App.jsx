import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TransparentTV from "./img/TransparentTV.png";
import staticgif from "./img/static.gif";
import './App.css';



const App = () => {
    return (
        <div className="imgContainer">
            <img src={TransparentTV} height="100%" className="crt"></img>
            <img src={staticgif}  className="staticgif"></img>
            <h1 className='titleText'>Under10Hours</h1>
            <a id="PatreonLink" className="links" href="https://www.patreon.com/under10hours">
                <h1>Patreon</h1>
            </a>
        </div>
      );
};

export default App;