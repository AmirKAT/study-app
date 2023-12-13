import React from 'react';

class Timer extends React.Component {
  // Initialize state
  state = { seconds: 0 };

  componentDidMount() {
    // Set up a timer when the component is mounted
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    clearInterval(this.timerID);
  }

  tick() {
    // Increment the seconds in state every second
    this.setState(state => ({ seconds: state.seconds + 1 }));
  }

  render() {
    // Render the number of seconds
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

export default Timer;
