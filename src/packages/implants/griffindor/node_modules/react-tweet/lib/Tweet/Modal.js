'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _utils = require('./utils');

var Modal = (function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    _React$Component.call(this, props, context);
  }

  Modal.prototype.close = function close() {
    this.context.closeModal();
  };

  Modal.prototype.render = function render() {
    if (typeof window === "undefined") return null;

    var _props = this.props;
    var data = _props.data;
    var modalIndex = _props.modalIndex;var isRT = false;
    var MediaComponent = null;

    // use retweet as data if its a RT
    if (data.retweeted_status) {
      data = data.retweeted_status;
      isRT = true;
    }

    var media = data.entities.media[modalIndex];

    if (data.extended_entities && data.extended_entities.media) {
      media = data.extended_entities.media[modalIndex];
    }

    var tweetStyle = _utils.cloneDeep(_styles2['default'].tweet);
    tweetStyle.padding = 0;
    var contentStyle = _utils.cloneDeep(_styles2['default'].content);
    contentStyle.padding = _styles2['default'].tweet.padding;

    var modalWrap = {
      'position': 'relative',
      'display': 'inline-block',
      'verticalAlign': 'middle',
      'width': media.sizes.large.w,
      'margin': '0 auto',
      'zIndex': 20,
      'minWidth': '590px'
    };

    var imgStyle = {
      'width': 'auto',
      'margin': '0 auto',
      'display': 'block'
    };

    var imgWrapStyle = {
      'width': '100%',
      'background': 'black'
    };

    if (media.sizes.large.h > window.innerHeight) {
      var newHeight = window.innerHeight / 100 * 80;

      imgStyle = {
        'height': newHeight + 'px',
        'width': 'auto',
        'display': 'block',
        'margin': '0 auto'
      };
    }

    return _react2['default'].createElement(
      'div',
      { className: 'Modal', style: _styles2['default'].Modal },
      _react2['default'].createElement('span', { style: { 'height': '100%', 'display': 'inline-block', 'verticalAlign': 'middle' } }),
      _react2['default'].createElement('div', { className: 'ModalClose', style: _styles2['default'].ModalClose, onClick: this.close.bind(this) }),
      _react2['default'].createElement(
        'div',
        { className: 'Modal-wrap', style: modalWrap },
        _react2['default'].createElement(
          'div',
          { className: 'tweet', style: tweetStyle },
          _react2['default'].createElement(
            'div',
            { className: 'media-wrap', style: imgWrapStyle },
            _react2['default'].createElement('img', { src: media.media_url, style: imgStyle })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'content', style: contentStyle },
            _react2['default'].createElement(_Header2['default'], { data: data }),
            _react2['default'].createElement(_Text2['default'], { data: data }),
            _react2['default'].createElement(_Footer2['default'], { data: data })
          )
        )
      )
    );
  };

  return Modal;
})(_react2['default'].Component);

Modal.contextTypes = {
  'closeModal': _propTypes2['default'].func
};

Modal.propTypes = {
  'data': _propTypes2['default'].object,
  'active': _propTypes2['default'].number
};

Modal.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'active': 0
};

exports['default'] = Modal;
module.exports = exports['default'];