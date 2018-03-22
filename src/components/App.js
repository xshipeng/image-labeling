import React, { Component } from 'react';
import AddPolygon from './AddPolygon.js';
import UndoRedo from '../containers/UndoRedo.js'
import SubmitButton from './SubmitButton.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css'
import ImageContainer from '../containers/ImageContainer.js';
import LabelContainer from '../containers/LabelContainer.js';


class App extends Component {
  render() {

    return (
      <div>
        <div id="topbar">
          <nav id="navbar">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul className="right">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
        </div>


        <div id="container">

          <div id="left">
            <div id="imagelabelcontainer">
              <div id="imagelabel">
                <LabelContainer />
              </div>
            </div>
          </div>

          <div id="right">
            <div id="buttonset">
              <div className="UndoRedo">
                <UndoRedo />
              </div>
              <div className="Submit">
                <SubmitButton />
              </div>
            </div>
          </div>

        </div>


      </div>




    );
  }
}

export default App;
