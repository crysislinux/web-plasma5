import React, { Component } from 'react';
// import { connect } from 'react-redux';
import SddmLoading from '../components/Sddm/SddmLoading';

class SddmLoadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0, // emulate login loading progress
    };
  }

  startRunning() {
    this.timer = setInterval(() => {
      if (this.state.progress !== 100) {
        this.setState({
          progress: this.state.progress + 10
        });
      } else {
        clearInterval(this.timer);
      }
    }, 100);
  }

  componentDidMount() {
    // delay process running until the progress bar slide animation stop
    setTimeout(() => {
      this.startRunning();
    }, 1200);
  }

  componentWillUmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <SddmLoading
        progress={this.state.progress}
      />
    );
  }
}

export default SddmLoadingContainer;
