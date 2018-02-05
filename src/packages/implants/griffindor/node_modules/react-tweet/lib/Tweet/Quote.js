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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var Quote = (function (_React$Component) {
  _inherits(Quote, _React$Component);

  function Quote() {
    _classCallCheck(this, Quote);

    _React$Component.apply(this, arguments);
  }

  Quote.prototype.render = function render() {
    var _props = this.props;
    var data = _props.data;
    var linkProps = _props.linkProps;

    return _react2['default'].createElement(
      'div',
      { className: 'QuoteTweet', style: _styles2['default'].QuoteTweet },
      _react2['default'].createElement('a', _extends({ className: 'QuoteTweet-link', style: _styles2['default'].QuoteLink, href: 'https://twitter.com/' + data.user.screen_name + '/status/' + data.id_str }, linkProps)),
      _react2['default'].createElement(
        'div',
        { className: 'QuoteTweet-innerContainer', style: _styles2['default'].QuoteTweetInner },
        _react2['default'].createElement(
          'div',
          { className: 'QuoteTweet-originalAuthor', style: _styles2['default'].QuoteTweetAuthor },
          _react2['default'].createElement(
            'b',
            null,
            data.user.name
          ),
          _react2['default'].createElement(
            'span',
            { className: 'QuoteTweet-screenname', style: _styles2['default'].time },
            ' ',
            '@',
            data.user.screen_name
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'QuoteTweet-text', style: _styles2['default'].QuoteTweetText },
          _react2['default'].createElement(_Text2['default'], { data: data })
        )
      )
    );
  };

  return Quote;
})(_react2['default'].Component);

Quote.propTypes = {
  'data': _propTypes2['default'].object
};

Quote.displayName = 'Quote';

exports['default'] = Quote;
module.exports = exports['default'];