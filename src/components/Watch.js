import React, { Component } from 'react';
import Display from './Display';
import './app.css';

export default class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      running:false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.start && !this.state.running) {
      this.setState({ start: true });
      this.watch = setInterval(() => this.timer(), 10);
    }
  };

  stop = () => {
    this.setState({ running: true });
    clearInterval(this.watch);
  };

  timer = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      start:false,
      running:false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  render() {
    return (
      <div className="app">
      <Display {...this.state}
          formatTime={this.formatTime}
        />
      <div className={'stopwatch'}>
        {this.state.start === false && this.state.running === false && (
          <button onClick={this.start} className="button">START</button>
        )}
        {this.state.start === true && this.state.running === false && (
          <button onClick={this.stop}  className="button">STOP</button>
        )}
        {this.state.start === true && this.state.running === true && (
          <button onClick={this.reset}  className="button">RESET</button>
        )}
    
      </div>
      </div>
    );
  }
}


