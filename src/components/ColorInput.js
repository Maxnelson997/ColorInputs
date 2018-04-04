import React, { Component } from 'react'
import { Col } from 'reactstrap';

class ColorInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: props.color
        }
    }

    handleIt = function() {
        return function(event) {
            this.setState({color: event.target.value})
        }.bind(this)
    }

    render() {
        return (
            <Col md="4" className="color-input">
                <input placeholder={this.state.color} value={this.state.color} style={{backgroundColor: this.state.color}} type="text" onChange={this.handleIt()} />
            </Col>
        )
    }

}

export default ColorInput 