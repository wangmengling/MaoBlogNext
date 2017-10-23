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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jackwang/Documents/github/MaoBlogNext/pages/index.js?entry';


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
      _antd.message.info('您选择的日期是: ' + date.toString());
      this.setState({ date: date });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { style: { width: 400, margin: '100px auto' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_antd.DatePicker, { onChange: function onChange(value) {
          return _this2.handleChange(value);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('div', { style: { marginTop: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, '\u5F53\u524D\u65E5\u671F\uFF1A', this.state.date.toString()));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJEYXRlUGlja2VyIiwibWVzc2FnZSIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImRhdGUiLCJpbmZvIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsIndpZHRoIiwibWFyZ2luIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7O29JQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO1lBRlksQUFFakIsQUFBYSxBQUNMO0FBREssQUFDWDtXQUVIOzs7OztpQ0FDWSxBLE1BQU0sQUFDakI7b0JBQUEsQUFBUSxLQUFLLGNBQWMsS0FBM0IsQUFBMkIsQUFBSyxBQUNoQztXQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFDZjs7Ozs2QkFDUTttQkFDUDs7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsS0FBSyxRQUExQixBQUFZLEFBQXNCO29CQUFsQztzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLGtDQUFXLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLGFBQWQsQUFBUyxBQUFrQjtBQUFqRDtvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFNBQUssT0FBTyxFQUFFLFdBQWQsQUFBWSxBQUFhO29CQUF6QjtzQkFBQTtBQUFBO1NBQXFDLHVDQUFBLEFBQUssTUFBTCxBQUFXLEtBSHBELEFBQ0UsQUFFRSxBQUFxQyxBQUFnQixBQUcxRDs7Ozs7RUFsQmlCLGdCQUFNLEEsQUFxQjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWNrd2FuZy9Eb2N1bWVudHMvZ2l0aHViL01hb0Jsb2dOZXh0In0=