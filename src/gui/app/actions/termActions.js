import React, { Component } from 'react';
import terminal from 'jquery.terminal';

export function drawTerminal() {
  $('.term_container').terminal(function(command) {
      if (command !== '') {
          var result = window.eval(command);
          if (result != undefined) {
              this.echo(String(result));
          }
      }
  }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        height: 200,
        width: 450,
        prompt: 'js> '
  });
}
