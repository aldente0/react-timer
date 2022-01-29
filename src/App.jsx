import React from 'react';
import './App.css';
//
//class App extends React.Component {
//
//  constructor(props) {
//    super(props);
//    this.state = {
//      timer: 0,
//      isRun: false,
//    }
//  }
//
//  startTimer = () => {
//    this.setState({isRun: true});
//    this.timerID = setInterval(() =>  this.tick(), 1000);
//    document.getElementById('startStop').innerText = 'STOP';
//  }
//
//  stopTimer = () => {
//    this.setState({isRun: false});
//    clearInterval(this.timerID);
//    document.getElementById('startStop').innerText = 'START';
//  }
//
//  handleStartOrStop = () => {
//    if (!this.state.isRun) {
//      this.startTimer();
//    } else {
//      this.stopTimer();
//    }
//  }
//
//  handleReset = () => {
//    clearInterval(this.timerID);
//    this.setState({
//      timer: 0,
//      isRun: false
//    });
//  }
//
//  tick = () => {
//    this.setState({timer: this.state.timer + 1});
//  }
//
//  componentDidMount = () => {
//    if (!localStorage.timer) {
//      setInterval(() => {
//        localStorage.timer = this.state.timer;
//      }, 1000);
//    } else {
//      this.setState({timer: Number(localStorage.getItem('timer')) /* this.getTimer() */});
//      setInterval(() => {
//        localStorage.timer = this.state.timer;
//      }, 1000);
//    }
//    /* this.setToLocalStorage = setInterval(() => {
//      localStorage.setItem('timer', toString(this.state.timer));
//      localStorage.timer = String(this.state.timer);
//    }, 1000);  */
//  }
//
//  componentWillUnmount = () => {
//    this.stopTimer();
//  }
//
//  render() {
//    return (
//      <div className="Timer">
//        <h1>React Timer</h1>
//        <div id="timer">{this.state.timer}</div>
//        <div id="btns">
//          <button onClick={this.handleStartOrStop} id="startStop">START</button>
//          <button onClick={this.handleReset} id="reset">RESET</button>
//        </div>
//      </div>
//    );
//  }
//  
//}

export default class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };
    
    handleStart = () => {
        this.setState({isCounting: true});
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1});
            //localStorage.setItem('count', this.state.count);
        }, 1000);
    }
    
    handleStop = () => {
        this.setState({isCounting: false});
        clearInterval(this.timerId);
    }
    
    handleReset = () => {
        this.handleStop();
        this.setState({count: 0});
    }

    componentDidMount() {
        if (localStorage.count) {
            this.setState({count: Number(localStorage.getItem('count'))});
        }
    }

    componentDidUpdate() {
        localStorage.count = this.state.count;
    }

    componentWillUnmount() {
        this.handleStop();
    }

    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

/* export default App; */

