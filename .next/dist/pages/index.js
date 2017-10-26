'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

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

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

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
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('div', { style: { background: '#fff', padding: 0, minHeight: 880 }, className: 'AllContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'ResumeContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'RightIcon', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_button2.default, { icon: 'bars', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement('div', { className: 'HeaderIcon', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('img', { src: './static/images/index/top.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement('div', { className: 'FullStackEngineer', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Full Stack Engineer'), _react2.default.createElement('div', { className: 'Motto', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'The Harder The More Fortunate'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_button2.default, { type: 'primary', icon: 'download', size: 'default', className: 'DownLoadButton', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Download My Resume'))), _react2.default.createElement('div', { className: 'MySkills', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'Title', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'MY SKILLS'), _react2.default.createElement('div', { className: 'Line', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('div', { className: 'LineLeft', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_icon2.default, { type: 'tool', className: 'LineIcon', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement('div', { className: 'LineRight', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement('div', { className: 'SkillCategory', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, '\u79FB\u52A8\u7AEF'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Ios\uFF0CAndroid')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, '\u670D\u52A1\u7AEF'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Nodejs,PHP')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '\u524D\u7AEF'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'React,Vue,CSS,HTML5')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, '\u4EBA\u5DE5\u667A\u80FD'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Learning'))))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15TGF5b3V0IiwiTGluayIsImZldGNoIiwiUmVhY3QiLCJSZWFjdERPTSIsImluZGV4U2NzcyIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImRhdGUiLCJpbmZvIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsIl9faHRtbCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQStCUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU87Ozs7Ozs7O0FBakNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7OztJQUdNLEE7aUNBQ0o7O2lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0lBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7WUFGWSxBQUVqQixBQUFhLEFBQ0w7QUFESyxBQUNYO1dBRUg7Ozs7O2lDQUNZLEEsTUFBTSxBQUNqQjt3QkFBQSxBQUFRLEtBQUssY0FBYyxLQUEzQixBQUEyQixBQUFLLEFBQ2hDO1dBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUNmOzs7OzZCQUNRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSwyQ0FDUyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFRO29CQUExQztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFNBQUssT0FBTyxFQUFFLFlBQUYsQUFBYyxRQUFRLFNBQXRCLEFBQStCLEdBQUcsV0FBOUMsQUFBWSxBQUE2QyxPQUFPLFdBQWhFLEFBQTBFO29CQUExRTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUVFO0FBRkY7MkRBRVUsTUFBUixBQUFhO29CQUFiO3NCQUhOLEFBQ0ksQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7Z0RBQ1EsS0FBTCxBQUFTO29CQUFUO3NCQU5QLEFBS0ksQUFDRyxBQUVIO0FBRkc7MkJBRUgsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBUkosQUFRSSxBQUdBLHdDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQVhKLEFBV0ksQUFHQSxrREFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxrQ0FBUSxNQUFSLEFBQWEsV0FBVSxNQUF2QixBQUE0QixZQUFXLE1BQXZDLEFBQTRDLFdBQVUsV0FBdEQsQUFBZ0U7b0JBQWhFO3NCQUFBO0FBQUE7U0FoQk4sQUFDRSxBQWNJLEFBQ0EsQUFHSix5Q0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsOEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7Z0RBQ08sV0FBTCxBQUFlO29CQUFmO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBEQUNNLE1BQU4sQUFBVyxRQUFPLFdBQWxCLEFBQTRCO29CQUE1QjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtpREFDSyxXQUFMLEFBQWU7b0JBQWY7c0JBUEosQUFJRSxBQUdFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSE4sQUFDSSxBQUVFLEFBS0Ysc0NBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNFLHVDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVZOLEFBUUksQUFFRSxBQUlGLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDRSxpQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FoQk4sQUFjSSxBQUVFLEFBSUYseUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXJEZCxBQUNFLEFBRUUsQUFtQkUsQUFTRSxBQW9CSSxBQUVFLEFBU2Y7Ozs7O0VBMUVpQixnQkFBTSxBLEFBNkUxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdXRvdXUtaW1hYy9Eb2N1bWVudHMvR0lUL01hb0Jsb2dOZXh0In0=