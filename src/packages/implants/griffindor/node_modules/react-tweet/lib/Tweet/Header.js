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

var _twemoji = require('twemoji');

var _twemoji2 = _interopRequireDefault(_twemoji);

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    _React$Component.call(this, props);
    this.state = {
      mounted: false
    };
  }

  Header.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      mounted: true
    });
  };

  Header.prototype.createTimestamp = function createTimestamp(time) {
    if (!time || !this.state.mounted) return null;

    var parseTwitterDate = function parseTwitterDate(tdate) {
      var system_date = new Date(Date.parse(tdate));
      var user_date = new Date();

      var diff = Math.floor((user_date - system_date) / 1000);
      if (diff < 59) {
        return diff + "s";
      }
      if (diff <= 3540) {
        return Math.round(diff / 60) + "m";
      }
      if (diff <= 86400) {
        return Math.round(diff / 3600) + "h";
      }
      if (diff < 604800) {
        return Math.round(diff / 86400) + "d";
      }
      return system_date.toString().substring(4, 10);
    };

    return parseTwitterDate(time);
  };

  Header.prototype.render = function render() {
    var _props = this.props;
    var data = _props.data;
    var linkProps = _props.linkProps;

    var timestamp = this.createTimestamp(data.created_at);

    var name = data.user.name;

    name = _twemoji2['default'].parse(name);
    name = name.replace(/<img class="emoji"/g, '<img class="emoji" style="height:14px;margin-right:5px;"');

    return _react2['default'].createElement(
      'div',
      { className: 'header' },
      _react2['default'].createElement(
        'a',
        _extends({ className: 'account-group', style: _styles2['default'].accountGroup, href: 'http://twitter.com/' + data.user.screen_name }, linkProps),
        _react2['default'].createElement('img', { className: 'avatar', src: data.user.profile_image_url, style: _styles2['default'].avatar }),
        _react2['default'].createElement(
          'strong',
          { className: 'fullname', style: _styles2['default'].fullname },
          data.user.name,
          ' '
        ),
        _react2['default'].createElement(
          'span',
          null,
          '‏'
        ),
        _react2['default'].createElement(
          'span',
          { className: 'username', style: _styles2['default'].username },
          _react2['default'].createElement(
            's',
            { style: _styles2['default'].s },
            '@'
          ),
          _react2['default'].createElement(
            'b',
            { style: _styles2['default'].b },
            data.user.screen_name
          )
        )
      ),
      _react2['default'].createElement(
        'small',
        { className: 'time', style: _styles2['default'].time },
        _react2['default'].createElement(
          'a',
          _extends({ href: 'http://twitter.com/' + data.user.screen_name + '/status/' + data.id_str, className: 'tweet-timestamp', style: _styles2['default'].timestamp }, linkProps),
          ' • ',
          timestamp
        )
      )
    );
  };

  return Header;
})(_react2['default'].Component);

Header.defaultProps = {
  'data': {
    'user': {}
  }
};

Header.displayName = 'Header';

exports['default'] = Header;
module.exports = exports['default'];