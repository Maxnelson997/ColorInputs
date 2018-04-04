import React, { Component } from 'react';
import ColorInput from './ColorInput';
import {Col, Row, Card} from 'reactstrap';

export default class App extends Component {
  render() {
    return (

      <div className="card-wrapper">
        <Card className="card-wrapper__card">
          <h2>ColorInputs</h2>
          <p>Type in color names and the background will change when a valid color is entered -  <a href="https://www.w3schools.com/cssref/css_colors.asp" target="_blank">This Link To CSS Colors</a> contains a bunch of CSS colors you can try. Just click the link, get a few color names, and type them in the inputs below</p>
          <Row>
            <ColorInput color='red'/>
            <ColorInput color='white'/>
            <ColorInput color='blue'/>
          </Row>
          <Row>
            <ColorInput color='coral'/>
            <ColorInput color='ghostwhite'/>
            <ColorInput color='aqua'/>
          </Row>
          <Row>
            <ColorInput color='blueviolet'/>
            <ColorInput color='burlywood'/>
            <ColorInput color='cadetblue'/>
          </Row>
          <Row>
            <ColorInput color='chartreuse'/>
            <ColorInput color='chartreuse'/>
            <ColorInput color='cadetblue'/>
            <ColorInput color='springgreen'/>
            <ColorInput color='violet'/>
          </Row>
        </Card>
      </div>


    );
  }
}
