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

var _twemoji = require('twemoji');

var _twemoji2 = _interopRequireDefault(_twemoji);

var _twitterText = require('twitter-text');

var _twitterText2 = _interopRequireDefault(_twitterText);

var Text = (function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text() {
    _classCallCheck(this, Text);

    _React$Component.apply(this, arguments);
  }

  Text.prototype.render = function render() {
    var data = this.props.data;var text = data.text;
    var entities = data.entities;

    // remove any embedded media links
    if (entities && entities.media) {
      entities.media.forEach(function (e) {
        text = text.replace(e.url, '');
      });
    }

    // remove any quote links
    if (entities && data.quoted_status) {
      entities.urls.forEach(function (u) {
        if (u.expanded_url.indexOf('/status/') > -1) {
          text = text.replace(u.url, '');
        }
      });
    }

    // replace + style links and mentions
    text = _twitterText2['default'].autoLinkWithJSON(text, entities || {}, { 'usernameIncludeSymbol': true });
    text = text.replace(/href=/g, 'style="text-decoration: none;color:#6CCCF9;" href=');

    // replace + style emoji
    text = _twemoji2['default'].parse(text);
    text = text.replace(/<img class="emoji"/g, '<img class="emoji" style="height:14px;margin-right:5px;"');
    // browsers add http which causes isomorphic rendering probs
    text = text.replace(/src="\/\/twemoji/g, 'src="http://twemoji');

    var tweetProps = {
      'className': 'tweet-text',
      'style': _styles2['default'].tweetText,
      'dangerouslySetInnerHTML': {
        '__html': text
      }
    };

    return _react2['default'].createElement('p', tweetProps);
  };

  return Text;
})(_react2['default'].Component);

Text.propTypes = {
  'data': _propTypes2['default'].object
};

Text.displayName = 'Text';

exports['default'] = Text;
module.exports = exports['default'];