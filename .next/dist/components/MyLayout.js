'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _antd = require('antd/dist/antd.css');

var _antd2 = _interopRequireDefault(_antd);

var _fontAwesome = require('font-awesome/css/font-awesome.css');

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

var _common = require('../styles/common.scss');

var _common2 = _interopRequireDefault(_common);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/utouu-imac/Documents/GIT/MaoBlogNext/components/MyLayout.js';

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer;

var layoutStyle = {
  margin: 0,
  padding: 0,
  border: '0px solid #DDD'
  // const mockedRouter = { push: () => {} }
  // Router.router = mockedRouter
};var mockedRouter = { push: function push() {}, prefetch: function prefetch() {} };
_index2.default.router = mockedRouter;

// let headerView = null
// if (Router.pathname != "/") {
//   headerView = <Head />;
// }else {
//   headerView = null;
// }
// const MyLayout = (props) => (
//   <Layout className="layout">
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//       <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
//       <style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} />
//       {Router.pathname != "/"  &&
//         <Head />
//       } 
//     <Content style={{ padding: '0 0px' }}>
//       {props.children}
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>
//       Ant Design ©2016 Created by Ant UED
//     </Footer>
//   </Layout>
// )

var MyLayout = function (_Component) {
  (0, _inherits3.default)(MyLayout, _Component);

  function MyLayout() {
    (0, _classCallCheck3.default)(this, MyLayout);

    return (0, _possibleConstructorReturn3.default)(this, (MyLayout.__proto__ || (0, _getPrototypeOf2.default)(MyLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyLayout, [{
    key: 'render',
    value: function render() {
      var headerView = _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      });
      if (_index2.default.pathname == "/") {
        headerView = _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        });
      } else {
        headerView = _react2.default.createElement(_Head2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        });
      }
      console.log(_index2.default.pathname + "da");
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_layout2.default, { className: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _antd2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _fontAwesome2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _common2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(Content, { style: { padding: '0 0px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.props.children), _react2.default.createElement(Footer, { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Wang\'s Blog \xA92017 Created by Wang')));
    }
  }]);

  return MyLayout;
}(_react.Component);

exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsImFudGRTdHlsZSIsImZvbnRhd2Vzb21lU3R5bGUiLCJjb21tb25TY3NzIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlJvdXRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwibW9ja2VkUm91dGVyIiwicHVzaCIsInByZWZldGNoIiwicm91dGVyIiwiTXlMYXlvdXQiLCJoZWFkZXJWaWV3IiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiX19odG1sIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVE7Ozs7Ozs7O0lBRlAsQSwwQixBQUFBO0ksQUFBUSwyQixBQUFBO0lBQVMsQSwwQkFBQSxBOztBQUd6QixJQUFNO1VBQWMsQUFDVixBQUNSO1dBRmtCLEFBRVQsQUFDVDtVQUFRLEFBRVY7QUFDQTtBQU5BLEFBQW9CO0FBQUEsQUFDbEIsRUFNRixJQUFNLGVBQWUsRUFBRSxNQUFNLGdCQUFNLEFBQUUsQ0FBaEIsR0FBa0IsVUFBVSxvQkFBTSxBQUFFLENBQXpELEFBQXFCO0FBQ3JCLGdCQUFBLEFBQU8sU0FBUCxBQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTSxBOzs7Ozs7Ozs7Ozs2QkFFSyxBQUNQO1VBQUk7O29CQUFhO3NCQUFqQixBQUFpQixBQUNqQjtBQURpQjtBQUFBLE9BQUE7VUFDYixnQkFBQSxBQUFPLFlBQVgsQUFBdUIsS0FBSyxBQUMxQjs7O3NCQUFhO3dCQUFiLEFBQWEsQUFDZDtBQURjO0FBQUEsU0FBQTtBQURmLGFBRU0sQUFDSjtxQ0FBYSxBQUFDOztzQkFBRDt3QkFBYixBQUFhLEFBQ2Q7QUFEYztBQUFBLFNBQUE7QUFFZjtjQUFBLEFBQVEsSUFBSSxnQkFBQSxBQUFPLFdBQW5CLEFBQTRCLEFBQzVCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0Esa0NBQVEsV0FBUixBQUFrQjtvQkFBbEI7c0JBQUEsQUFDSTtBQURKO2lEQUNVLFNBQU4sQUFBYztvQkFBZDtzQkFESixBQUNJLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBRkosQUFFSSxBQUNBO0FBREE7bURBQ08seUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtvQkFBMUM7c0JBSEosQUFHSSxBQUNBO0FBREE7bURBQ08seUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtvQkFBMUM7c0JBSkosQUFJSSxBQUNBO0FBREE7bURBQ08seUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtvQkFBMUM7c0JBTEosQUFLSSxBQUNGO0FBREU7MEJBQ0QsY0FBRCxXQUFTLE9BQU8sRUFBRSxTQUFsQixBQUFnQixBQUFXO29CQUEzQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BUFYsQUFNRSxBQUNjLEFBRWQsMkJBQUMsY0FBRCxVQUFRLE9BQU8sRUFBRSxXQUFqQixBQUFlLEFBQWE7b0JBQTVCO3NCQUFBO0FBQUE7U0FYSixBQUNFLEFBQ0EsQUFTRSxBQU1MOzs7OztBQTNCb0IsQSxBQThCdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3V0b3V1LWltYWMvRG9jdW1lbnRzL0dJVC9NYW9CbG9nTmV4dCJ9