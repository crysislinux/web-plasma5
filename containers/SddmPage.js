import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sddm from '../components/Sddm';
import backgroundImage from '../assets/images/background.png';
import accountLogo from '../assets/images/default.face.icon.png';

const accounts = [
  {
    id: 1,
    name: 'lg',
    icon: accountLogo,
    active: false,
  },
  {
    id: 2,
    name: 'mmmm',
    icon: accountLogo,
    active: true,
  }
];

class SddmPage extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleAccountClick = () => {

  };

  render() {
    return (
      <Sddm
        onAccountClick={this.handleAccountClick}
        accounts={accounts}
        windowWidth={this.state.windowWidth}
        background={backgroundImage}
      />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {

})(SddmPage);
