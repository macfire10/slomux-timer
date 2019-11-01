import React, { Component } from 'react'
import { connect } from './../slomux/';

import { changeInterval } from './actions';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0
        }
        
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }
  
    render() {
      return (
        <div>
          <div>
            <span>Интервал обновления секундомера: {this.props.currentInterval} сек.</span>
            <span>
                <button onClick={() => this.props.changeInterval(-1)}>-</button>
                <button onClick={() => this.props.changeInterval(1)}>+</button>
            </span>
        </div>
          <div>
            Секундомер: {this.state.currentTime} сек.
          </div>
          <div>
            <button onClick={this.handleStart}>Старт</button>
            <button onClick={this.handleStop}>Стоп</button>
          </div>
        </div>
      )
    }
  
    handleStart() {
        // cancer previous timer,
        const { timerId } = this.state;
        timerId && clearTimeout(timerId);
        this.setState({ currentTime: 0, })

        const { currentInterval } = this.props;

        // bind a setInterval function
        const timer = setInterval(function () {
            this.setState({ currentTime: this.state.currentTime + currentInterval });
        }.bind(this), currentInterval * 1000)

        this.setState({ timerId: timer, })
    }
    
    handleStop() {
     // reset a timer and cancel the timer
      const { timerId } = this.state;
      this.setState({ currentTime: 0 })
      clearTimeout(timerId);
    }
}

export default connect(
    state => ({
        currentInterval: state.currentInterval,
    }),
    dispatch => ({
        changeInterval: value => dispatch(changeInterval(value)),
    })
)(Timer)