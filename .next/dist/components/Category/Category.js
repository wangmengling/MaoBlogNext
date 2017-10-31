"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = require("antd/lib/button");

var _button2 = _interopRequireDefault(_button);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _tag = require("antd/lib/tag");

var _tag2 = _interopRequireDefault(_tag);

var _input = require("antd/lib/input");

var _input2 = _interopRequireDefault(_input);

var _menu = require("antd/lib/menu");

var _menu2 = _interopRequireDefault(_menu);

var _collapse = require("antd/lib/collapse");

var _collapse2 = _interopRequireDefault(_collapse);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Category = require("../../styles/Category.scss");

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jackwang/Documents/github/MaoBlogNext/components/Category/Category.js";


var Panel = _collapse2.default.Panel;
var SubMenu = _menu2.default.SubMenu;
var Search = _input2.default.Search;
var CheckableTag = _tag2.default.CheckableTag;

var tagsFromServer = ['Movie', 'Books', 'Music'];

var Category = function (_Component) {
    (0, _inherits3.default)(Category, _Component);

    function Category(props) {
        (0, _classCallCheck3.default)(this, Category);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _getPrototypeOf2.default)(Category)).call(this, props));

        _this.state = {
            selectedTags: [],
            loading: false
        };

        _this.toggle = function (value) {
            _this.setState({ loading: value });
        };

        return _this;
    }

    (0, _createClass3.default)(Category, [{
        key: "handleChange",
        value: function handleChange(tag, checked) {
            var selectedTags = this.state.selectedTags;

            var nextSelectedTags = checked ? [].concat((0, _toConsumableArray3.default)(selectedTags), [tag]) : selectedTags.filter(function (t) {
                return t !== tag;
            });
            console.log('You are interested in: ', nextSelectedTags);
            this.setState({ selectedTags: nextSelectedTags });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var selectedTags = this.state.selectedTags;

            return _react2.default.createElement("div", { className: "CategoryList", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: _Category2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement("div", { className: "RightSearch", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(Search, {
                placeholder: "input search text",
                style: { width: 200 },
                onSearch: function onSearch(value) {
                    return console.log(value);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement("div", { className: "RightCategory", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_button2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, "\u5B89\u5353")), _react2.default.createElement("div", { className: "RightArchive", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement("strong", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, "Hot Tags: "), tagsFromServer.map(function (tag) {
                return _react2.default.createElement(CheckableTag, {
                    key: tag,
                    checked: selectedTags.indexOf(tag) > -1,
                    onChange: function onChange(checked) {
                        return _this2.handleChange(tag, checked);
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }, tag);
            })));
        }
    }]);

    return Category;
}(_react.Component);

exports.default = Category;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2F0ZWdvcnkvQ2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXRlZ29yeVNjc3MiLCJQYW5lbCIsIlN1Yk1lbnUiLCJTZWFyY2giLCJDaGVja2FibGVUYWciLCJ0YWdzRnJvbVNlcnZlciIsIkNhdGVnb3J5IiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkVGFncyIsImxvYWRpbmciLCJ0b2dnbGUiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGFnIiwiY2hlY2tlZCIsIm5leHRTZWxlY3RlZFRhZ3MiLCJmaWx0ZXIiLCJ0IiwiY29uc29sZSIsImxvZyIsIl9faHRtbCIsIndpZHRoIiwibWFwIiwiaW5kZXhPZiIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFFBQVEsbUJBQWQsQUFBdUI7QUFDdkIsSUFBTSxVQUFVLGVBQWhCLEFBQXFCO0FBQ3JCLElBQU0sU0FBUyxnQkFBZixBQUFxQjtBQUNyQixJQUFNLGVBQWUsY0FBckIsQUFBeUI7O0FBRXpCLElBQU0saUJBQWlCLENBQUEsQUFBQyxTQUFELEFBQVUsU0FBakMsQUFBdUIsQUFBbUI7O0ksQUFDcEM7c0NBQ0Y7O3NCQUFBLEFBQVksT0FBTTs0Q0FBQTs7OElBQUEsQUFDUjs7Y0FEUSxBQUlsQjswQkFBUSxBQUNVLEFBQ2Q7cUJBTmMsQUFJVixBQUVLO0FBRkwsQUFDSjs7Y0FMYyxBQWdCaEIsU0FBUyxVQUFBLEFBQUMsT0FBVSxBQUNsQjtrQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVcsQUFDMUI7QUFsQmU7O2VBRWpCOzs7OztxQ0FNYyxBLEssQUFBSyxTQUFTO2dCQUFBLEFBQ2pCLGVBQWlCLEtBREEsQUFDSyxNQURMLEFBQ2pCLEFBQ1I7O2dCQUFNLG1CQUFtQixxREFBQSxBQUNiLGdCQURhLEFBQ0MscUJBQ2xCLEFBQWEsT0FBTyxhQUFBO3VCQUFLLE1BQUwsQUFBVztBQUZ2QyxBQUVRLEFBQ1IsYUFEUTtvQkFDUixBQUFRLElBQVIsQUFBWSwyQkFBWixBQUF1QyxBQUN2QztpQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFoQixBQUFjLEFBQWdCLEFBQy9COzs7O2lDQUtNO3lCQUFBOztnQkFBQSxBQUNHLGVBQWlCLEtBRHBCLEFBQ3lCLE1BRHpCLEFBQ0csQUFDUjs7bUNBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7YUFBQSwyQ0FDVyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFROzhCQUExQztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDOzZCQUFELEFBQ2dCLEFBQ1o7dUJBQU8sRUFBRSxPQUZiLEFBRVcsQUFBUyxBQUNoQjswQkFBVSx5QkFBQTsyQkFBUyxRQUFBLEFBQVEsSUFBakIsQUFBUyxBQUFZO0FBSG5DOzs4QkFBQTtnQ0FIUixBQUVJLEFBQ0ksQUFNSjtBQU5JO0FBQ0ksaUNBS1IsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0k7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVZSLEFBU0ksQUFDSSxBQUVKLGtDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQyw4QkFBQSxBQUFlLElBQUksZUFBQTt1Q0FDbkIsY0FBRDt5QkFBQSxBQUNTLEFBQ0w7NkJBQVMsYUFBQSxBQUFhLFFBQWIsQUFBcUIsT0FBTyxDQUZ6QyxBQUUwQyxBQUN0Qzs4QkFBVSwyQkFBQTsrQkFBVyxPQUFBLEFBQUssYUFBTCxBQUFrQixLQUE3QixBQUFXLEFBQXVCO0FBSGhEOztrQ0FBQTtvQ0FBQSxBQUtLO0FBTEw7QUFDSSxpQkFESixFQURvQixBQUNwQjtBQWhCWixBQUNJLEFBWUksQUFFSyxBQVloQjs7Ozs7QUFsRGtCLEEsQUFvRHZCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWNrd2FuZy9Eb2N1bWVudHMvZ2l0aHViL01hb0Jsb2dOZXh0In0=