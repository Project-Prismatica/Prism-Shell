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

var _Photos = require('./Photos');

var _Photos2 = _interopRequireDefault(_Photos);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

var Media = (function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    _React$Component.apply(this, arguments);
  }

  Media.prototype.render = function render() {
    switch (this.props.media[0].type) {
      case 'photo':
        return _react2['default'].createElement(_Photos2['default'], this.props);
      case 'video':
        return _react2['default'].createElement(_Video2['default'], this.props);
      case 'animated_gif':
        return _react2['default'].createElement(_Video2['default'], _extends({ gif: true }, this.props));
      default:
        return _react2['default'].createElement('div', null);
    }
  };

  return Media;
})(_react2['default'].Component);

Media.propTypes = {
  'media': _propTypes2['default'].array
};

Media.defaultProps = {
  'media': [{ 'type': '' }]
};

Media.displayName = 'Media';

exports['default'] = Media;
module.exports = exports['default'];