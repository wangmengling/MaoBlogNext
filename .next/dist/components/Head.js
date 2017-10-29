'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jackwang/Documents/github/MaoBlogNext/components/Head.js';

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer;

var Head = function Head() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_menu2.default, {
    theme: 'light',
    mode: 'horizontal',
    defaultSelectedKeys: ['2'],
    style: { lineHeight: '64px', alignContent: 'right' },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_menu2.default.Item, { key: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'nav 1'), _react2.default.createElement(_menu2.default.Item, { key: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'nav 2'), _react2.default.createElement(_menu2.default.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'nav 3'))));
};

exports.default = Head;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIkhlYWQiLCJsaW5lSGVpZ2h0IiwiYWxpZ25Db250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7OztJLEFBRUMsMEIsQUFBQTtJLEFBQVEsMkIsQUFBQTtJQUFTLEEsMEJBQUEsQTs7QUFFekIsSUFBTSxPQUFPLFNBQVAsQUFBTyxPQUFBO3lCQUNYLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDQTtBQURBO0FBQUEsNENBQ0ssV0FBTCxBQUFlO2dCQUFmO2tCQURBLEFBQ0EsQUFDQTtBQURBO3NCQUNBO1dBQUEsQUFDUSxBQUNOO1VBRkYsQUFFTyxBQUNMO3lCQUFxQixDQUh2QixBQUd1QixBQUFDLEFBQ3RCO1dBQU8sRUFBRSxZQUFGLEFBQWMsUUFBUSxjQUovQixBQUlTLEFBQW1DOztnQkFKNUM7a0JBQUEsQUFNRTtBQU5GO0FBQ0UscUJBS0EsNkJBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQTtBQUFBO0tBTkYsQUFNRSxBQUNBLDBCQUFBLDZCQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUE7QUFBQTtLQVBGLEFBT0UsQUFDQSwwQkFBQSw2QkFBQSxBQUFNLFFBQUssS0FBWCxBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0FaTyxBQUNYLEFBQ0UsQUFFQSxBQVFFO0FBWk4sQUFrQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFja3dhbmcvRG9jdW1lbnRzL2dpdGh1Yi9NYW9CbG9nTmV4dCJ9