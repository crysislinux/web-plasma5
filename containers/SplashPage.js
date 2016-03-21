import React, { Component } from 'react';
import { connect } from 'react-redux';
import Splash from '../components/Splash';
import backgroundImage from '../assets/images/background.png';

const accounts = [
  {
    id: 1,
    name: 'lg',
    icon: 'http://img4.duitang.com/uploads/blog/201307/17/20130717220646_FxWvw.png',
    active: false,
  },
  {
    id: 2,
    name: 'mmmm',
    icon: 'http://imgsrc.baidu.com/forum/w%3D580/sign=19fe6a8c6609c93d07f20effaf3ff8bb/fb289f99a9014c08beef08270b7b02087af4f46c.jpg',
    active: true,
  }
];

class SplashPage extends Component {
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
      <div>
        <Splash
          onAccountClick={this.handleAccountClick}
          accounts={accounts}
          windowWidth={this.state.windowWidth}
          background={backgroundImage}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {

})(SplashPage);
