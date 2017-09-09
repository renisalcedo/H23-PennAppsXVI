import React, {Component} from 'react';

import NavBar from './NavBar';
import Panels from './Panels';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />

        <Panels />

        <Footer />
      </div>
    );
  }
};
