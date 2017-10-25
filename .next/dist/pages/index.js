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

var _about = require('../styles/about.scss');

var _about2 = _interopRequireDefault(_about);

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
          lineNumber: 53
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _about2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_breadcrumb2.default, { style: { margin: '12px 0' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_breadcrumb2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Home'), _react2.default.createElement(_breadcrumb2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'List'), _react2.default.createElement(_breadcrumb2.default.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'App')), _react2.default.createElement('div', { style: { background: '#fff', padding: 24, minHeight: 880 }, className: 'DatePic', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Content'));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15TGF5b3V0IiwiTGluayIsImZldGNoIiwiUmVhY3QiLCJSZWFjdERPTSIsImFib3V0U2NzcyIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImRhdGUiLCJpbmZvIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsIl9faHRtbCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBK0JQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBR1AsQUFBTzs7Ozs7Ozs7QUFqQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7O0lBR00sQTtpQ0FDSjs7aUJBQUEsQUFBWSxPQUFPO3dDQUFBOztvSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztZQUZZLEFBRWpCLEFBQWEsQUFDTDtBQURLLEFBQ1g7V0FFSDs7Ozs7aUNBQ1ksQSxNQUFNLEFBQ2pCO3dCQUFBLEFBQVEsS0FBSyxjQUFjLEtBQTNCLEFBQTJCLEFBQUssQUFDaEM7V0FBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQ2Y7Ozs7NkJBQ1EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDJDQUNTLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7b0JBQTFDO3NCQURGLEFBQ0UsQUFDRTtBQURGOzBCQUNFLHNDQUFZLE9BQU8sRUFBRSxRQUFyQixBQUFtQixBQUFVO29CQUE3QjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsbUNBQUEsQUFBWTs7b0JBQVo7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLHlCQUFBLG1DQUFBLEFBQVk7O29CQUFaO3NCQUFBO0FBQUE7QUFBQSxTQUZBLEFBRUEsQUFDQSx5QkFBQSxtQ0FBQSxBQUFZOztvQkFBWjtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUVJLEFBR0EsQUFFSix5QkFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLFlBQUYsQUFBYyxRQUFRLFNBQXRCLEFBQStCLElBQUksV0FBL0MsQUFBWSxBQUE4QyxPQUFPLFdBQWpFLEFBQTJFO29CQUEzRTtzQkFBQTtBQUFBO1NBUkYsQUFDRSxBQU9BLEFBR0g7Ozs7O0VBdkJpQixnQkFBTSxBLEFBMEIxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdXRvdXUtaW1hYy9Eb2N1bWVudHMvR0lUL01hb0Jsb2dOZXh0In0=