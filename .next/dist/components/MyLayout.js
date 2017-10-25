'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _antd = require('antd/dist/antd.css');

var _antd2 = _interopRequireDefault(_antd);

var _fontAwesome = require('font-awesome/css/font-awesome.css');

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/utouu-imac/Documents/GIT/MaoBlogNext/components/MyLayout.js';


var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer;

var layoutStyle = {
  margin: 0,
  padding: 0,
  border: '0px solid #DDD'
};

var MyLayout = function MyLayout(props) {
  return _react2.default.createElement(_layout2.default, { className: 'layout', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _antd2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _fontAwesome2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(Content, { style: { padding: '0 50px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.children), _react2.default.createElement(Footer, { style: { textAlign: 'center' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Ant Design \xA92016 Created by Ant UED'));
};

exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsImFudGRTdHlsZSIsImZvbnRhd2Vzb21lU3R5bGUiLCJzdHlsZXNoZWV0IiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsImxheW91dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsIk15TGF5b3V0IiwicHJvcHMiLCJfX2h0bWwiLCJjaGlsZHJlbiIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFHQyxBLDBCLEFBQUE7SSxBQUFRLDJCLEFBQUE7SUFBUyxBLDBCLEFBQUE7O0FBRXpCLElBQU07VUFBYyxBQUNWLEFBQ1I7V0FGa0IsQUFFVCxBQUNUO1VBSEYsQUFBb0IsQUFHVjtBQUhVLEFBQ2xCOztBQUtGLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7eUJBQ2Ysa0NBQVEsV0FBUixBQUFrQjtnQkFBbEI7a0JBQUEsQUFDSTtBQURKO0dBQUEsMENBQ1UsU0FBTixBQUFjO2dCQUFkO2tCQURKLEFBQ0ksQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFGSixBQUVJLEFBQ0E7QUFEQTsrQ0FDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO2dCQUExQztrQkFISixBQUdJLEFBQ0E7QUFEQTsrQ0FDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO2dCQUExQztrQkFKSixBQUlJLEFBQ0E7QUFEQTsrQ0FDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO2dCQUExQztrQkFMSixBQUtJLEFBQ0Y7QUFERTtzQkFDRixBQUFDOztnQkFBRDtrQkFORixBQU1FLEFBQ0E7QUFEQTtBQUFBLHNCQUNDLGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztnQkFBM0I7a0JBQUEsQUFDRztBQURIO1dBUEYsQUFPRSxBQUNTLEFBRVQsMkJBQUMsY0FBRCxVQUFRLE9BQU8sRUFBRSxXQUFqQixBQUFlLEFBQWE7Z0JBQTVCO2tCQUFBO0FBQUE7S0FYYSxBQUNmLEFBVUU7QUFYSixBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdXRvdXUtaW1hYy9Eb2N1bWVudHMvR0lUL01hb0Jsb2dOZXh0In0=