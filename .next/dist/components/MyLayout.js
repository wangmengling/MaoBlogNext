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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jackwang/Documents/github/MaoBlogNext/components/MyLayout.js';

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
      lineNumber: 14
    }
  }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _antd2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _fontAwesome2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(Content, { style: { padding: '0 0px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.children), _react2.default.createElement(Footer, { style: { textAlign: 'center' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Ant Design \xA92016 Created by Ant UED'));
};

exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsImFudGRTdHlsZSIsImZvbnRhd2Vzb21lU3R5bGUiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiTXlMYXlvdXQiLCJwcm9wcyIsIl9faHRtbCIsImNoaWxkcmVuIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7SUFFQyxBLDBCQUFBLEE7SUFBUSxBLDJCQUFBLEE7SSxBQUFTLDBCLEFBQUE7O0FBRXpCLElBQU07VUFBYyxBQUNWLEFBQ1I7V0FGa0IsQUFFVCxBQUNUO1VBSEYsQUFBb0IsQUFHVjtBQUhVLEFBQ2xCOztBQUtGLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7eUJBQ2Ysa0NBQVEsV0FBUixBQUFrQjtnQkFBbEI7a0JBQUEsQUFDSTtBQURKO0dBQUEsMENBQ1UsU0FBTixBQUFjO2dCQUFkO2tCQURKLEFBQ0ksQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFGSixBQUVJLEFBQ0E7QUFEQTsrQ0FDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO2dCQUExQztrQkFISixBQUdJLEFBQ0E7QUFEQTsrQ0FDTyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO2dCQUExQztrQkFKSixBQUlJLEFBRUY7QUFGRTtzQkFFRCxjQUFELFdBQVMsT0FBTyxFQUFFLFNBQWxCLEFBQWdCLEFBQVc7Z0JBQTNCO2tCQUFBLEFBQ0c7QUFESDtXQU5GLEFBTUUsQUFDUyxBQUVULDJCQUFDLGNBQUQsVUFBUSxPQUFPLEVBQUUsV0FBakIsQUFBZSxBQUFhO2dCQUE1QjtrQkFBQTtBQUFBO0tBVmEsQUFDZixBQVNFO0FBVkosQUFnQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phY2t3YW5nL0RvY3VtZW50cy9naXRodWIvTWFvQmxvZ05leHQifQ==