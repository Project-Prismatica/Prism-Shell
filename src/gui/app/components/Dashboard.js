import React, { Component } from 'react';
import { connect } from "react-redux"
import drawTerminal from '../actions/termActions';
import terminal from 'jquery.terminal';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getStyles() {
    return {
      terminalWindow: {
        position: "absolute",
        color: "yellow",
        backgroundColor: "white",
        width: "100%"
      }
    };
  }
  //componentWillMount() {
  //  this.props.dispatch(mountTerminal())
  //}

  renderTerminal() {
    // render the buy button with jQuery
    $(this.refs.termContainer).html(
          //fail
    );
  }
  componentDidMount() {
    this.renderTerminal();
  }

  render(props) {
    const styles = this.getStyles();
    /* we need to keep a ref to the
     * button-container so we can update it with jQuery
     */
    return (
      <div>
        <span className="term_container" ref="termContainer"></span>

        //{terminal.window}
      </div>
    );
  }
}
