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

var _utils = require('./utils');

var Photos = (function (_React$Component) {
  _inherits(Photos, _React$Component);

  function Photos(props, context) {
    _classCallCheck(this, Photos);

    _React$Component.call(this, props, context);
  }

  Photos.prototype.onClick = function onClick(idx) {
    this.context.toggleModal(idx);
  };

  Photos.prototype.render = function render() {
    var _this = this;

    var media = this.props.media;

    var mediaElements = [],
        mediaStyle = _utils.cloneDeep(_styles2['default'].AdaptiveMedia);
    if (media.length === 2) mediaStyle.height = '253px';
    if (media.length === 3) mediaStyle.height = '337px';
    if (media.length === 4) mediaStyle.height = '380px';

    // start media loop
    media.forEach(function (m, i) {
      // set initial sizes / styles
      var containStyle = { 'width': '100%', 'position': 'relative', 'overflow': 'hidden' };
      var photoStyle = { 'width': '100%', 'position': 'relative' };
      var mediaHeight = m.sizes.large.h,
          mediaWidth = m.sizes.large.w;

      /*
       * format single photo
       */
      if (media.length === 1) {
        // 508 is the width of a tweet media wrapper
        // if image is wider than this, it's height will be reduced
        // proportionally, so we adjust our calculation
        if (mediaWidth > 508) {
          var ratio = 100 / mediaWidth * 508;
          mediaHeight = mediaHeight * (ratio / 100);
        }

        // check if image is taller than maxHeight, if so
        // center it with a negative top value
        var maxHeight = parseInt(mediaStyle.maxHeight.replace('px', ''));

        if (mediaHeight > maxHeight) {
          photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
        }
      }

      /*
       * format two photos
       */
      if (media.length === 2) {
        var maxHeight = 253;
        photoStyle.width = 'auto';
        photoStyle.height = '100%';
        containStyle.display = 'inline-block';
        containStyle.height = '100%';
        // give first image 1px margin right and calc width to adjust
        if (i === 0) containStyle.marginRight = '1px';
        containStyle.width = 'calc(50% - .5px)';

        var ratio = 100 / mediaWidth * (508 / 2);
        mediaHeight = mediaHeight * (ratio / 100);

        if (mediaHeight > maxHeight) {
          photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
          photoStyle.width = '100%';
          photoStyle.height = 'auto';
        } else if (mediaWidth > 508 / 2) {
          var _ratio = 100 / m.sizes.large.h * 253;
          mediaWidth = mediaWidth * (_ratio / 100);
          photoStyle.left = (508 / 2 - mediaWidth) / 2 + 'px';
        }
      }

      /*
       * format three photos
       */
      if (media.length === 3) {
        if (i === 0) {
          var maxHeight = 337;
          containStyle.width = 100 * (2 / 3) + '%';
          containStyle.marginRight = '1px';
          containStyle.height = '337px';
          containStyle.float = 'left';
          var firstWrapWidth = 508 * (2 / 3);

          var ratio = 100 / mediaHeight * 337;
          mediaWidth = mediaWidth * (ratio / 100);

          var newRatio = 100 / m.sizes.medium.w * firstWrapWidth;
          mediaHeight = mediaHeight * (newRatio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
          }

          if (mediaWidth > firstWrapWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            photoStyle.left = (508 * (2 / 3) - mediaWidth) / 2 + 'px';
          }
        }
        if (i !== 0) {
          mediaHeight = m.sizes.medium.h;
          mediaWidth = m.sizes.medium.w;
          var maxHeight = 337 / 2;
          var maxWidth = 508 * 1 / 3;

          var ratio = 100 / mediaWidth * maxWidth;
          mediaHeight = mediaHeight * (ratio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
          } else if (mediaWidth > maxWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            var newRatio = 100 / m.sizes.medium.h * maxWidth;
            mediaWidth = mediaWidth * (newRatio / 100);
            photoStyle.left = (maxWidth - mediaWidth) / 2 + 'px';
          }

          containStyle.float = 'left';
          containStyle.marginBottom = '1px';
          containStyle.height = 'calc(100% / 2 - 1px/2)';
          containStyle.width = 'calc(100% / 3 - 1px)';
        }
      }

      /*
       * format four photos
       */
      if (media.length === 4) {
        if (i === 0) {
          containStyle.width = '75%';
          containStyle.marginRight = '1px';
          containStyle.height = '380px';
          containStyle.float = 'left';
          var firstWrapWidth = 508 * 0.75;
          var maxHeight = 380;

          var ratio = 100 / mediaHeight * 380;
          mediaWidth = mediaWidth * (ratio / 100);

          var newRatio = 100 / m.sizes.medium.w * firstWrapWidth;
          mediaHeight = mediaHeight * (newRatio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
          }

          if (mediaWidth > firstWrapWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            photoStyle.left = (508 * 0.75 - mediaWidth) / 2 + 'px';
          }
        }
        if (i !== 0) {
          mediaHeight = m.sizes.medium.h;
          mediaWidth = m.sizes.medium.w;
          var maxHeight = 380 / 3;
          var maxWidth = 508 * 1 / 4;

          var ratio = 100 / mediaWidth * maxWidth;
          mediaHeight = mediaHeight * (ratio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = (maxHeight - mediaHeight) / 2 + 'px';
          } else if (mediaWidth > maxWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            var newRatio = 100 / m.sizes.medium.h * maxWidth;
            mediaWidth = mediaWidth * (newRatio / 100);
            photoStyle.left = (maxWidth - mediaWidth) / 2 + 'px';
          }

          containStyle.height = 'calc(100% / 3 - 2px/3)';
          containStyle.marginBottom = '1px';
          containStyle.float = 'left';
          containStyle.width = 'calc(25% - 1px)';
        }
      }

      mediaElements.push(_react2['default'].createElement(
        'div',
        { onClick: _this.onClick.bind(_this, i), className: 'AdaptiveMedia-photoContainer', style: containStyle, key: i },
        _react2['default'].createElement('img', { src: m.media_url, style: photoStyle })
      ));
    });
    // end media loop

    return _react2['default'].createElement(
      'div',
      { className: 'AdaptiveMedia', style: mediaStyle },
      mediaElements
    );
  };

  return Photos;
})(_react2['default'].Component);

Photos.contextTypes = {
  'toggleModal': _propTypes2['default'].func
};

Photos.propTypes = {
  'media': _propTypes2['default'].array
};

Photos.displayName = 'Photos';

exports['default'] = Photos;
module.exports = exports['default'];