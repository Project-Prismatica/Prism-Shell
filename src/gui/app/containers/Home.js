import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';
import Dashboard from '../components/Dashboard';
import Search from '../components/Search';
import Results from '../components/Results';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getStyles() {
    const bgcolor = {
      default: "white"
    }
    return {
      mainContainer: {
        width: "100%",
        height: "100%"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <StyleRoot>
        <div style={[styles.mainContainer]} className="mainContainer">
          <Dashboard />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(Layout);
