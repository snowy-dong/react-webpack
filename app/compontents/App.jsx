import React, { Component } from 'react'
require('../style/index.scss');
import Header from 'compontents/Header'
import Sidebar from 'compontents/Sidebar'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}
module.exports = App;