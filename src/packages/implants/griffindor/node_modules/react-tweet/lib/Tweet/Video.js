'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _reactVideojs = require('react-videojs');

var _reactVideojs2 = _interopRequireDefault(_reactVideojs);

var Video = (function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    _classCallCheck(this, Video);

    _React$Component.apply(this, arguments);
  }

  Video.prototype.render = function render() {
    var _props = this.props;
    var media = _props.media;
    var gif = _props.gif;var videoSrc = '';

    media[0].video_info.variants.forEach(function (v) {
      if (v.url.indexOf('.mp4') > -1) {
        videoSrc = v.url;
      }
    });

    var VideoComponent = _react2['default'].createElement(
      'video',
      { src: videoSrc, controls: !gif, autoPlay: gif, loop: gif, style: _styles2['default'].video },
      'Your browser does not support the ',
      _react2['default'].createElement(
        'code',
        null,
        'video '
      ),
      'element.'
    );

    if (typeof videojs !== 'undefined') {
      VideoComponent = _react2['default'].createElement(
        _reactVideojs2['default'],
        { src: videoSrc, controls: !gif, autoPlay: gif, loop: gif, style: _styles2['default'].video },
        'Your browser does not support the ',
        _react2['default'].createElement(
          'code',
          null,
          'video '
        ),
        'element.'
      );
    }

    return _react2['default'].createElement(
      'div',
      { className: 'AdaptiveMedia', style: _styles2['default'].AdaptiveMedia },
      VideoComponent,
      gif ? _react2['default'].createElement(
        'div',
        { className: 'AdaptiveMedia-badge', style: _styles2['default'].AdaptiveMediaBadge },
        'GIF'
      ) : null
    );
  };

  return Video;
})(_react2['default'].Component);

Video.propTypes = {
  'media': _propTypes2['default'].array,
  'gif': _propTypes2['default'].bool
};

Video.defaultProps = {
  'media': [],
  'gif': false
};

Video.displayName = 'Video';

exports['default'] = Video;
module.exports = exports['default'];