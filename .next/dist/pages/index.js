'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/utouu-imac/Documents/GIT/MaoBlogNext/pages/index.js?entry';
// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

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
// import 'antd/lib/date-picker/style/css';
// import stylesheet from 'styles/index.scss'


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
      var _this2 = this;

      return _react2.default.createElement('div', { style: { width: 400, margin: '100px auto' }, className: 'DatePic', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_datePicker2.default, { onChange: function onChange(value) {
          return _this2.handleChange(value);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('div', { style: { marginTop: 20 }, className: 'DatePic', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, '\u5F53\u524D\u65E5\u671F\uFF1A', this.state.date.toString()));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJJbmRleCIsInByb3BzIiwic3RhdGUiLCJkYXRlIiwiaW5mbyIsInRvU3RyaW5nIiwic2V0U3RhdGUiLCJ3aWR0aCIsIm1hcmdpbiIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwibWFyZ2luVG9wIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBS1AsQUFBTzs7Ozs7QUFyQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBOzs7SSxBQUVNO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7O29JQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO1lBRlksQUFFakIsQUFBYSxBQUNMO0FBREssQUFDWDtXQUVIOzs7OztpQyxBQUNZLE1BQU0sQUFDakI7d0JBQUEsQUFBUSxLQUFLLGNBQWMsS0FBM0IsQUFBMkIsQUFBSyxBQUNoQztXQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFDZjs7Ozs2QkFDUTttQkFDUDs7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsS0FBSyxRQUExQixBQUFZLEFBQXNCLGdCQUFnQixXQUFsRCxBQUE0RDtvQkFBNUQ7c0JBQUEsQUFDRTtBQURGO09BQUEsd0RBQ2MsVUFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssYUFBZCxBQUFTLEFBQWtCO0FBQWpEO29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWEsTUFBTSxXQUEvQixBQUF5QztvQkFBekM7c0JBQUE7QUFBQTtTQUF5RCx1Q0FBQSxBQUFLLE1BQUwsQUFBVyxLQUh4RSxBQUNFLEFBRUUsQUFBeUQsQUFBZ0IsQUFHOUU7Ozs7O0VBbEJpQixnQkFBTSxBLEFBcUIxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdXRvdXUtaW1hYy9Eb2N1bWVudHMvR0lUL01hb0Jsb2dOZXh0In0=