"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = require("antd/lib/icon");

var _icon2 = _interopRequireDefault(_icon);

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require("../../components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Category = require("../../components/Category");

var _Category2 = _interopRequireDefault(_Category);

var _ArticleDetail = require("../../styles/ArticleDetail.scss");

var _ArticleDetail2 = _interopRequireDefault(_ArticleDetail);

var _Head = require("../../components/Head");

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jackwang/Documents/github/MaoBlogNext/pages/articleDetail/ArticleDetail.js";


var ArticleDetail = function (_Component) {
    (0, _inherits3.default)(ArticleDetail, _Component);

    function ArticleDetail(props) {
        (0, _classCallCheck3.default)(this, ArticleDetail);

        return (0, _possibleConstructorReturn3.default)(this, (ArticleDetail.__proto__ || (0, _getPrototypeOf2.default)(ArticleDetail)).call(this, props));
    }

    (0, _createClass3.default)(ArticleDetail, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_MyLayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_Head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: _ArticleDetail2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement("div", { className: "ArticleDetail", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement("div", { className: "ArticleDetailBack", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement("div", { className: "ArticleDetailLeft", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement("div", { className: "ArticleDetailTitle", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, "wodeceshi"), _react2.default.createElement("div", { className: "ArticleDetailTags", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement("div", { className: "ArticleRowHeaderCategory", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_icon2.default, { type: "tag", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), " React"), _react2.default.createElement("div", { className: "ArticleRowHeaderTime", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_icon2.default, { type: "schedule", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), " 14/09/12"), _react2.default.createElement("div", { className: "ArticleRowHeaderReadNum", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_icon2.default, { type: "message", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), " 5")), _react2.default.createElement("div", { className: "ArticleDetailContent", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, "\u6700\u8FD1\u65B0\u95FB\u4E0A ICO \u5F88\u706B\uFF0C\u51FA\u4E8E\u597D\u5947\uFF0C\u6211\u7814\u7A76\u4E86\u4E00\u4E0B ICO\uFF0C\u5206\u4EAB\u4E00\u4E0B\u6211\u7684\u770B\u6CD5\u3002 \u4EC0\u4E48\u662F ICO \u9996\u5148\u6211\u4EEC\u9700\u8981\u641E\u6E05\u695A ICO \u662F\u4EC0\u4E48\u3002\u7F51\u4E0A\u6709\u4E00\u53E5\u5F88\u6DF7\u86CB\u7684\u8BDD\uFF1A\u300C\u770B\u61C2 ICO \u7684\u90FD\u5FD9\u7740\u6323\u94B1\u53BB\u4E86\u300D\uFF0C\u597D\u50CF\u8FD9\u4E2A\u4E8B\u60C5\u591A\u4E48\u96BE\u61C2\u3002\u4F46\u968F\u540E\u7814\u7A76\u4E0B\u6765\uFF0C\u6211\u89C9\u5F97 ICO \u5E76\u4E0D\u590D\u6742\u3002\u7A0D\u52A0\u5206\u6790\uFF0C\u6211\u4EEC\u5F88\u5BB9\u6613\u5C31\u80FD\u7406\u89E3\u5B83\u662F\u4EC0\u4E48\u3002 \u6211\u7528 Google \u67E5\u5230\u4E86\u4E00\u4E2A ICO \u7684\u4E2D\u6587\u89E3\u91CA\uFF0C\u6211\u4EEC\u5148\u770B\u770B\uFF0C\u7A0D\u540E\u518D\u5206\u6790\u4E00\u4E0B\uFF1A ICO\uFF08\u5168\u79F0 Initial Coin Offering\uFF0C\u9996\u6B21\u4EE3\u5E01\u53D1\u884C\u4F17\u7B79\uFF09\u5C31\u662F\u533A\u5757\u94FE\u754C\u7684 IPO\uFF0C\u4E00\u822C\u662F\u6307\u533A\u5757\u94FE\u76F8\u5173\u7684\u521D\u521B\u9879\u76EE\u5728 ICO \u5E73\u53F0\u4E0A\u53D1\u884C\u8BE5\u9879\u76EE\u72EC\u6709\u7684\u52A0\u5BC6\u4EE3\u5E01\uFF08\u5BF9\u5E94 IPO \u4E2D\u7684\u80A1\u7968\uFF09\uFF0C\u6295\u8D44\u8005\u5219\u4F7F\u7528\u6570\u5B57\u8D27\u5E01\uFF08\u5982\u6BD4\u7279\u5E01\u3001\u4EE5\u592A\u5E01\uFF09\u8D2D\u4E70\u8BE5\u9879\u76EE\u7684\u4EE3\u5E01\uFF0C\u5B9E\u73B0\u52DF\u8D44\u3002\u6295\u8D44\u4EBA\u624B\u4E2D\u6301\u6709\u7684\u4EE3\u5E01\u4EE3\u8868\u5176\u6301\u6709\u7684\u80A1\u6743\u4EFD\u989D\uFF0C\u968F\u7740\u9879\u76EE\u6210\u679C\u843D\u5730\uFF0C\u8FD9\u4E9B\u4EE3\u5E01\u4F5C\u4E3A\u4EA4\u6613\u5A92\u4ECB\u548C\u6743\u76CA\u7684\u4EF7\u503C\u4E5F\u4E0D\u65AD\u63D0\u5347\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8F6C\u8BA9\u3002 \u597D\u4E86\uFF0C\u6211\u4EEC\u518D\u6765\u5206\u6790\u4E00\u4E0B\u8FD9\u4E2A\u5B9A\u4E49\u3002 \u4EA4\u6613\u7684\u8BA1\u4EF7\u8D27\u5E01\u53CA\u5F71\u54CD \u5728\u5B9A\u4E49\u4E2D\uFF0C ICO \u5FC5\u987B\u4F7F\u7528\u6570\u5B57\u8D27\u5E01\u8D2D\u4E70\u3002\u8FD9\u79CD\u8BBE\u8BA1\u5176\u5B9E\u662F\u589E\u52A0\u4E86\u4EE3\u5E01\u4EF7\u683C\u6CE2\u52A8\u7684\u98CE\u9669\uFF0C\u56E0\u4E3A\u5F88\u591A\u6570\u5B57\u8D27\u5E01\uFF08\u5305\u62EC\u6BD4\u7279\u5E01\uFF09\u672C\u8EAB\u4EF7\u683C\u5C31\u4E0D\u7A33\u5B9A\u3002ICO \u57FA\u4E8E\u4E00\u4E2A\u4EF7\u683C\u6CE2\u52A8\u5267\u70C8\u7684\u8D27\u5E01\u4E4B\u4E0A\uFF0C\u81EA\u7136\u5C31\u4F1A\u53D7\u5230\u76F8\u5173\u6570\u5B57\u8D27\u5E01\u7684\u6CE2\u52A8\u5F71\u54CD\u3002\u800C\u5982\u679C\u4EE5\u6CD5\u5B9A\u8D27\u5E01\uFF08\u6BD4\u5982\u4EBA\u6C11\u5E01\uFF09\u6765\u4EA4\u6613\uFF0C\u660E\u663E\u53EF\u4EE5\u907F\u514D\u8FD9\u79CD\u98CE\u9669\u3002 \u90A3\u4E48\u4E3A\u4EC0\u4E48 ICO \u8981\u9009\u62E9\u6570\u5B57\u8D27\u5E01\u5462\uFF1F\u6211\u4E2A\u4EBA\u8BA4\u4E3A\u662F\u4E3A\u4E86\u89C4\u907F\u5404\u79CD\u91D1\u878D\u673A\u6784\u7684\u76D1\u7BA1\u3002\u5728\u4E2D\u56FD\u4EE5\u53CA\u4E00\u4E9B\u522B\u7684\u56FD\u5BB6\uFF0C\u5982\u679C\u5C06 ICO \u89C6\u4E3A\u80A1\u6743\u4F17\u7B79\u6216\u8005\u8BC1\u5238\u53D1\u884C\uFF0C\u7406\u5E94\u6709\u8BC1\u76D1\u4F1A\u76D1\u7BA1\uFF1B\u4F46\u662F ICO \u52DF\u96C6\u7684\u8D44\u91D1\u4E0D\u662F\u6CD5\u5E01\u800C\u662F\u6570\u5B57\u865A\u62DF\u8D27\u5E01\uFF0C\u6570\u5B57\u8D27\u5E01\u53C8\u5E94\u8BE5\u7531\u592E\u884C\u76D1\u7BA1\u3002ICO \u8FD9\u6837\u7684\u89C4\u5219\u4F7F\u5F97\u5728\u4E2D\u56FD\u53EF\u4EE5\u89C4\u907F\u6389\u76D1\u7BA1\u4E3B\u4F53\uFF0C\u6240\u4EE5\u624D\u4F1A\u6ECB\u751F\u51FA\u5404\u79CD\u975E\u6CD5\u96C6\u8D44\u7684\u73B0\u8C61\u3002 \u5728\u89C4\u907F\u76D1\u7BA1\u4E3B\u4F53\u7684\u540C\u65F6\uFF0CICO \u4E5F\u89C4\u907F\u6389\u4E86\u76F8\u5173\u7684\u76D1\u7BA1\u6CD5\u89C4\u3002\u80A1\u6743\u4F17\u7B79\u6216\u8005\u8BC1\u5238\u53D1\u884C\u5176\u5B9E\u6709\u5927\u91CF\u7684\u6CD5\u5F8B\u5B58\u5728\uFF0C\u6BD4\u5982\u56FD\u5185\u6709\u300A\u4E2D\u56FD\u8BC1\u5238\u6295\u8D44\u57FA\u91D1\u6CD5\u300B\uFF0C\u8FD9\u4F7F\u5F97\u5927\u5BB6\u5728\u505A\u4E8B\u60C5\u7684\u65F6\u5019\u6709\u89C4\u5219\u53EF\u4EE5\u4F9D\u636E\u3002\u4F46\u662F ICO \u8FD9\u79CD\u673A\u5236\u4F7F\u5F97\u5B83\u53EF\u4EE5\u968F\u610F\u5236\u5B9A\u81EA\u5DF1\u7684\u89C4\u5219\u3002"), _react2.default.createElement("div", { className: "ArticleDetailPage", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement("div", { className: "ArticleDetailPagePre", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_icon2.default, { type: "left", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), "Backward"), _react2.default.createElement("div", { className: "ArticleDetailPageNext", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, "Forward", _react2.default.createElement(_icon2.default, { type: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })))), _react2.default.createElement("div", { className: "ArticleDetailRight", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_Category2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })))));
        }
    }]);

    return ArticleDetail;
}(_react.Component);

exports.default = ArticleDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVEZXRhaWwvQXJ0aWNsZURldGFpbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk15TGF5b3V0IiwiQ2F0ZWdvcnkiLCJBcnRpY2xlRGV0YWlsU2NzcyIsIkhlYWQiLCJBcnRpY2xlRGV0YWlsIiwicHJvcHMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFDWDsyQ0FDRjs7MkJBQUEsQUFBWSxPQUFNOzRDQUFBOzttSkFBQSxBQUNSLEFBQ1Q7Ozs7O2lDQUNRLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHlEQUNPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7OEJBQTFDO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFHQSw4QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrREFDVSxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQUZSLEFBQ0ksQUFHQSwyQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrREFDVSxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQUxSLEFBSUksQUFHQSw4QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrREFDVSxNQUFOLEFBQVc7OEJBQVg7Z0NBREosQUFDSTtBQUFBO2dCQVpaLEFBSUksQUFPSSxBQUlKLHdCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQWZKLEFBZUksQUFZQSx5cklBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0RBQ1UsTUFBTixBQUFXOzhCQUFYO2dDQURKLEFBQ0k7QUFBQTtnQkFGUixBQUNJLEFBR0EsNkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBQ1csMkRBQU0sTUFBTixBQUFXOzhCQUFYO2dDQWpDdkIsQUFDSSxBQTJCSSxBQUlJLEFBQ1csQUFJbkI7QUFKbUI7bUNBSW5CLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQTNDcEIsQUFDSSxBQUdJLEFBQ0ksQUFxQ0ksQUFDSSxBQU12QjtBQU51QjtBQUFBOzs7OztBQWhEQSxBLEFBeUQ1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcnRpY2xlRGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWNrd2FuZy9Eb2N1bWVudHMvZ2l0aHViL01hb0Jsb2dOZXh0In0=