import React, { Component } from 'react';
import ImageContainer from '../containers/ImageContainer.js';
import LabelContainer from '../containers/LabelContainer.js';
import UndoRedo from '../containers/UndoRedo.js'
import SubmitButton from './SubmitButton.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css'


class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     imageWidth:
  //     imageHeight:
  //     imageOffsetX:
  //     imageOffsetY:
  //   }
  // }
  render() {

    return (
      <div>
        <nav id="navbar">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <div className='row  valign-wrapper '>
          <div className='col l10 m12' >
            <div id="imagelabelcontainer" className="center-align">
              <ImageContainer />
              <div id="labelcontainer" className="center-align">
                <LabelContainer />
              </div>
            </div>


          </div>
          <div className='col l2 m12 valign-wrapper'>
            <div className='col center-align valign-wrapper'>
              <UndoRedo />
            </div>
            <div>
              <SubmitButton />
            </div>

          </div>
        </div>
      </div>



    );
  }
}

export default App;
