import React, { Component } from 'react';
import UndoRedo from '../containers/UndoRedo.js'

import LabelContainer from '../containers/LabelContainer.js';
import SubmitButtonContainer from '../containers/SubmitButtonContainer.js';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css'

class App extends Component {
  render() {

    return (
      <div>
        <div id="topbar">
          <nav id="navbar">
            <div className="nav-wrapper">
              <a className="brand-logo">Logo</a>
              <ul className="right">
                <li><a href="collapsible.html">About</a></li>
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
                <SubmitButtonContainer />
              </div>
            </div>
          </div>

        </div>


      </div>




    );
  }
}

export default App;
