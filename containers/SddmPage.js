import React, { Component } from 'react';
import Sddm from '../components/Sddm';
import backgroundImage from '../assets/images/background.png';

class SddmPage extends Component {
  render() {
    return (
      <Sddm background={backgroundImage} />
    );
  }
}

export default SddmPage;
