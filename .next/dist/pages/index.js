'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

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

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('../styles/about.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/utouu-imac/Documents/GIT/MaoBlogNext/pages/index.js?entry';

// import  "./index.scss"

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} 
//             href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

// import 'antd/dist/antd.css';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = {
      date: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'handleChange',
    value: function handleChange(date) {
      _message3.default.info('您选择的日期是: ' + date.toString());
      this.setState({ date: date });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_breadcrumb2.default, { style: { margin: '12px 0' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_breadcrumb2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Home'), _react2.default.createElement(_breadcrumb2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'List'), _react2.default.createElement(_breadcrumb2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'App')), _react2.default.createElement('div', { style: { background: '#fff', padding: 24, minHeight: 880 }, className: 'DatePic', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Content'));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15TGF5b3V0IiwiTGluayIsImZldGNoIiwiUmVhY3QiLCJSZWFjdERPTSIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImRhdGUiLCJpbmZvIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBK0JQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBR1A7Ozs7OztBQWpDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUtBOzs7SSxBQUVNO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7O29JQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO1lBRlksQUFFakIsQUFBYSxBQUNMO0FBREssQUFDWDtXQUVIOzs7OztpQyxBQUNZLE1BQU0sQUFDakI7d0JBQUEsQUFBUSxLQUFLLGNBQWMsS0FBM0IsQUFBMkIsQUFBSyxBQUNoQztXQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFDZjs7Ozs2QkFDUSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0k7QUFESjtBQUFBLE9BQUEsa0JBQ0ksc0NBQVksT0FBTyxFQUFFLFFBQXJCLEFBQW1CLEFBQVU7b0JBQTdCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxtQ0FBQSxBQUFZOztvQkFBWjtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0EseUJBQUEsbUNBQUEsQUFBWTs7b0JBQVo7c0JBQUE7QUFBQTtBQUFBLFNBRkEsQUFFQSxBQUNBLHlCQUFBLG1DQUFBLEFBQVk7O29CQUFaO3NCQUFBO0FBQUE7QUFBQSxTQUpKLEFBQ0ksQUFHQSxBQUVKLHlCQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUUsWUFBRixBQUFjLFFBQVEsU0FBdEIsQUFBK0IsSUFBSSxXQUEvQyxBQUFZLEFBQThDLE9BQU8sV0FBakUsQUFBMkU7b0JBQTNFO3NCQUFBO0FBQUE7U0FQRixBQUNFLEFBTUEsQUFHSDs7Ozs7RUF0QmlCLGdCQUFNLEEsQUF5QjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy91dG91dS1pbWFjL0RvY3VtZW50cy9HSVQvTWFvQmxvZ05leHQifQ==