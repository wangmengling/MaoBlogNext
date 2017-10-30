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
          lineNumber: 45
        }
      });
      if (_index2.default.pathname == "/") {
        headerView = _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        });
      } else {
        headerView = _react2.default.createElement(_Head2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        });
      }
      console.log(_index2.default.pathname + "da");
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_layout2.default, { className: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _antd2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _fontAwesome2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(Content, { style: { padding: '0 0px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.props.children), _react2.default.createElement(Footer, { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Ant Design \xA92016 Created by Ant UED')));
    }
  }]);

  return MyLayout;
}(_react.Component);

exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsImFudGRTdHlsZSIsImZvbnRhd2Vzb21lU3R5bGUiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiUm91dGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJsYXlvdXRTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJtb2NrZWRSb3V0ZXIiLCJwdXNoIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJNeUxheW91dCIsImhlYWRlclZpZXciLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJfX2h0bWwiLCJwcm9wcyIsImNoaWxkcmVuIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFROzs7Ozs7OztJQUZQLEEsMEJBQUEsQTtJLEFBQVEsMkIsQUFBQTtJQUFTLEEsMEIsQUFBQTs7QUFHekIsSUFBTTtVQUFjLEFBQ1YsQUFDUjtXQUZrQixBQUVULEFBQ1Q7VUFBUSxBQUVWO0FBQ0E7QUFOQSxBQUFvQjtBQUFBLEFBQ2xCLEVBTUYsSUFBTSxlQUFlLEVBQUUsTUFBTSxnQkFBTSxBQUFFLENBQWhCLEdBQWtCLFVBQVUsb0JBQU0sQUFBRSxDQUF6RCxBQUFxQjtBQUNyQixnQkFBQSxBQUFPLFNBQVAsQUFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU0sQTs7Ozs7Ozs7Ozs7NkJBRUssQUFDUDtVQUFJOztvQkFBYTtzQkFBakIsQUFBaUIsQUFDakI7QUFEaUI7QUFBQSxPQUFBO1VBQ2IsZ0JBQUEsQUFBTyxZQUFYLEFBQXVCLEtBQUssQUFDMUI7OztzQkFBYTt3QkFBYixBQUFhLEFBQ2Q7QUFEYztBQUFBLFNBQUE7QUFEZixhQUVNLEFBQ0o7cUNBQWEsQUFBQzs7c0JBQUQ7d0JBQWIsQUFBYSxBQUNkO0FBRGM7QUFBQSxTQUFBO0FBRWY7Y0FBQSxBQUFRLElBQUksZ0JBQUEsQUFBTyxXQUFuQixBQUE0QixBQUM1Qjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGtDQUFRLFdBQVIsQUFBa0I7b0JBQWxCO3NCQUFBLEFBQ0k7QUFESjtpREFDVSxTQUFOLEFBQWM7b0JBQWQ7c0JBREosQUFDSSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQUZKLEFBRUksQUFDQTtBQURBO21EQUNPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7b0JBQTFDO3NCQUhKLEFBR0ksQUFDQTtBQURBO21EQUNPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7b0JBQTFDO3NCQUpKLEFBSUksQUFDRjtBQURFOzBCQUNELGNBQUQsV0FBUyxPQUFPLEVBQUUsU0FBbEIsQUFBZ0IsQUFBVztvQkFBM0I7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQU5WLEFBS0UsQUFDYyxBQUVkLDJCQUFDLGNBQUQsVUFBUSxPQUFPLEVBQUUsV0FBakIsQUFBZSxBQUFhO29CQUE1QjtzQkFBQTtBQUFBO1NBVkosQUFDRSxBQUNBLEFBUUUsQUFNTDs7Ozs7QUExQm9CLEEsQUE2QnZCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik15TGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy91dG91dS1pbWFjL0RvY3VtZW50cy9HSVQvTWFvQmxvZ05leHQifQ==