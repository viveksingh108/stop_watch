import React, { Component } from 'react';
import './display.css'

export default class Display extends Component {
    render() {
        return (
            <div className="display">
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </div>
        )
    }
}
