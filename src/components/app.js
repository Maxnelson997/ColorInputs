import React, { Component } from 'react';
import ColorInput from './ColorInput';
import {Col, Row, Card} from 'reactstrap';

export default class App extends Component {
  render() {
    return (

      <div className="card-wrapper">
        <Card className="card-wrapper__card">
          <h2>Type in color names and the background will change when a valid color is entered</h2>
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
            <ColorInput color='cornflowerblue'/>
          </Row>
        </Card>
      </div>

    );
  }
}
