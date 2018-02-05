'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var Context = (function (_React$Component) {
  _inherits(Context, _React$Component);

  function Context() {
    _classCallCheck(this, Context);

    _React$Component.apply(this, arguments);
  }

  Context.prototype.render = function render() {
    var _props = this.props;
    var data = _props.data;
    var linkProps = _props.linkProps;

    return _react2['default'].createElement(
      'div',
      { className: 'context', style: _styles2['default'].context },
      _react2['default'].createElement(
        'div',
        { className: 'tweet-context' },
        _react2['default'].createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 75 72', style: _styles2['default'].IconContext },
          _react2['default'].createElement('path', { d: 'M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z' })
        ),
        _react2['default'].createElement(
          'span',
          { className: 'retweet-text', style: _styles2['default'].retweet },
          _react2['default'].createElement(
            'a',
            _extends({ className: 'pretty-link', href: 'http://twitter.com/' + data.user.screen_name, style: _styles2['default'].link }, linkProps),
            _react2['default'].createElement(
              'b',
              { style: _styles2['default'].b },
              data.user.name
            )
          ),
          ' Retweeted'
        )
      )
    );
  };

  return Context;
})(_react2['default'].Component);

Context.propTypes = {
  'data': _propTypes2['default'].object
};

Context.displayName = 'Context';

exports['default'] = Context;
module.exports = exports['default'];