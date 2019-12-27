import React from 'react';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {

  render() {
    return (
      <div className="ui secondary pointing menu">
      <div className="item">
        Streamy Home
      </div>
      <div className="right menu">
        <div className="item">
          All Streams
        </div>
        <GoogleAuth />
      </div>
    </div>
    )
  }
}

export default Header;
