import React, { Component } from 'react';
import ColorInput from './ColorInput';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <ColorInput className="col-1-of-3" color='red'/>
          <ColorInput className="col-1-of-3" color='white'/>
          <ColorInput className="col-1-of-3" color='blue'/>
        </div>
        <div className="row">
          <ColorInput className="col-1-of-3" color='red'/>
          <ColorInput className="col-1-of-3" color='white'/>
          <ColorInput className="col-1-of-3" color='blue'/>
        </div>
        {/* <ColorInput color='coral'/>

        <ColorInput color='ghostwhite'/>
        <ColorInput color='aqua'/>
        <ColorInput color='blueviolet'/>
        <ColorInput color='burlywood'/>
        <ColorInput color='cadetblue'/>
        <ColorInput color='chartreuse'/>
        <ColorInput color='cornflowerblue'/> */}
      </div>
    );
  }
}
