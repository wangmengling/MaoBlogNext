webpackHotUpdate(5,{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(679);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _message2 = __webpack_require__(631);

var _message3 = _interopRequireDefault(_message2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _MyLayout = __webpack_require__(636);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(677);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(351);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(681);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/utouu-imac/Documents/GIT/MaoBlogNext/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/utouu-imac/Documents/GIT/MaoBlogNext/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var BreadcrumbItem = function (_React$Component) {
    (0, _inherits3['default'])(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        (0, _classCallCheck3['default'])(this, BreadcrumbItem);
        return (0, _possibleConstructorReturn3['default'])(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BreadcrumbItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                separator = _a.separator,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "separator", "children"]);
            var link = void 0;
            if ('href' in this.props) {
                link = _react2['default'].createElement(
                    'a',
                    (0, _extends3['default'])({ className: prefixCls + '-link' }, restProps),
                    children
                );
            } else {
                link = _react2['default'].createElement(
                    'span',
                    (0, _extends3['default'])({ className: prefixCls + '-link' }, restProps),
                    children
                );
            }
            if (children) {
                return _react2['default'].createElement(
                    'span',
                    null,
                    link,
                    _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-separator' },
                        separator
                    )
                );
            }
            return null;
        }
    }]);
    return BreadcrumbItem;
}(_react2['default'].Component);

exports['default'] = BreadcrumbItem;

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: _propTypes2['default'].string,
    separator: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element]),
    href: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Breadcrumb = __webpack_require__(680);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _BreadcrumbItem = __webpack_require__(678);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Breadcrumb2['default'].Item = _BreadcrumbItem2['default'];
exports['default'] = _Breadcrumb2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(404);

var _warning2 = _interopRequireDefault(_warning);

var _BreadcrumbItem = __webpack_require__(678);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var _classnames = __webpack_require__(397);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? _react2['default'].createElement(
        'span',
        null,
        name
    ) : _react2['default'].createElement(
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    (0, _inherits3['default'])(Breadcrumb, _React$Component);

    function Breadcrumb() {
        (0, _classCallCheck3['default'])(this, Breadcrumb);
        return (0, _possibleConstructorReturn3['default'])(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Breadcrumb, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            (0, _warning2['default'])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
        }
    }, {
        key: 'render',
        value: function render() {
            var crumbs = void 0;
            var _props = this.props,
                separator = _props.separator,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                routes = _props.routes,
                _props$params = _props.params,
                params = _props$params === undefined ? {} : _props$params,
                children = _props.children,
                _props$itemRender = _props.itemRender,
                itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

            if (routes && routes.length > 0) {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    return _react2['default'].createElement(
                        _BreadcrumbItem2['default'],
                        { separator: separator, key: route.breadcrumbName || path },
                        itemRender(route, params, routes, paths)
                    );
                });
            } else if (children) {
                crumbs = _react2['default'].Children.map(children, function (element, index) {
                    if (!element) {
                        return element;
                    }
                    (0, _warning2['default'])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb only accepts Breadcrumb.Item as it\'s children');
                    return (0, _react.cloneElement)(element, {
                        separator: separator,
                        key: index
                    });
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(className, prefixCls), style: style },
                crumbs
            );
        }
    }]);
    return Breadcrumb;
}(_react2['default'].Component);

exports['default'] = Breadcrumb;

Breadcrumb.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: _propTypes2['default'].string,
    separator: _propTypes2['default'].node,
    routes: _propTypes2['default'].array,
    params: _propTypes2['default'].object,
    linkRender: _propTypes2['default'].func,
    nameRender: _propTypes2['default'].func
};
module.exports = exports['default'];

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMmFhM2Y2Zjk1ZjM4OWI0NWZlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTA1NWJlZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS5qcz9jN2U3NzQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9icmVhZGNydW1iL2luZGV4LmpzP2M3ZTc3NDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qcz9jN2U3NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7QnJlYWRjcnVtYn0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCAgXCIuL2luZGV4LnNjc3NcIlxuXG4vLyBjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuLy8gICA8TGF5b3V0PlxuLy8gICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gICAgIDx1bD5cbi8vICAgICAgIHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxuLy8gICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbi8vICAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBcbi8vICAgICAgICAgICAgIGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4vLyAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgICApKX1cbi8vICAgICA8L3VsPlxuLy8gICA8L0xheW91dD5cbi8vIClcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd3M6IGRhdGFcbi8vICAgfVxuLy8gfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG4vLyBpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgXCJzdHlsZXMvYWJvdXQuc2Nzc1wiO1xuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0ZTogJycsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZGF0ZSkge1xuICAgIG1lc3NhZ2UuaW5mbygn5oKo6YCJ5oup55qE5pel5pyf5pivOiAnICsgZGF0ZS50b1N0cmluZygpKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZSB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNeUxheW91dD5cbiAgICAgICAgICA8QnJlYWRjcnVtYiBzdHlsZT17eyBtYXJnaW46ICcxMnB4IDAnIH19PlxuICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+SG9tZTwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+TGlzdDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+QXBwPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYnLCBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiA4ODAgfX0gY2xhc3NOYW1lPVwiRGF0ZVBpY1wiPkNvbnRlbnQ8L2Rpdj5cbiAgICAgIDwvTXlMYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX19yZXN0ID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5cbnZhciBCcmVhZGNydW1iSXRlbSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoQnJlYWRjcnVtYkl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQnJlYWRjcnVtYkl0ZW0oKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIEJyZWFkY3J1bWJJdGVtKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKEJyZWFkY3J1bWJJdGVtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQnJlYWRjcnVtYkl0ZW0pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShCcmVhZGNydW1iSXRlbSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IF9hLnNlcGFyYXRvcixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwic2VwYXJhdG9yXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICAgICAgdmFyIGxpbmsgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoJ2hyZWYnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBsaW5rID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saW5rJyB9LCByZXN0UHJvcHMpLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpbmsnIH0sIHJlc3RQcm9wcyksXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXNlcGFyYXRvcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBCcmVhZGNydW1iSXRlbTtcbn0oX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJyZWFkY3J1bWJJdGVtO1xuXG5CcmVhZGNydW1iSXRlbS5fX0FOVF9CUkVBRENSVU1CX0lURU0gPSB0cnVlO1xuQnJlYWRjcnVtYkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1icmVhZGNydW1iJyxcbiAgICBzZXBhcmF0b3I6ICcvJ1xufTtcbkJyZWFkY3J1bWJJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBwcmVmaXhDbHM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICAgIHNlcGFyYXRvcjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRdKSxcbiAgICBocmVmOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZ1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2JyZWFkY3J1bWIvQnJlYWRjcnVtYkl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDY3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQnJlYWRjcnVtYiA9IHJlcXVpcmUoJy4vQnJlYWRjcnVtYicpO1xuXG52YXIgX0JyZWFkY3J1bWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnJlYWRjcnVtYik7XG5cbnZhciBfQnJlYWRjcnVtYkl0ZW0gPSByZXF1aXJlKCcuL0JyZWFkY3J1bWJJdGVtJyk7XG5cbnZhciBfQnJlYWRjcnVtYkl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnJlYWRjcnVtYkl0ZW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbl9CcmVhZGNydW1iMlsnZGVmYXVsdCddLkl0ZW0gPSBfQnJlYWRjcnVtYkl0ZW0yWydkZWZhdWx0J107XG5leHBvcnRzWydkZWZhdWx0J10gPSBfQnJlYWRjcnVtYjJbJ2RlZmF1bHQnXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2JyZWFkY3J1bWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJy4uL191dGlsL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0JyZWFkY3J1bWJJdGVtID0gcmVxdWlyZSgnLi9CcmVhZGNydW1iSXRlbScpO1xuXG52YXIgX0JyZWFkY3J1bWJJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JyZWFkY3J1bWJJdGVtKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0QnJlYWRjcnVtYk5hbWUocm91dGUsIHBhcmFtcykge1xuICAgIGlmICghcm91dGUuYnJlYWRjcnVtYk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBwYXJhbXNLZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKS5qb2luKCd8Jyk7XG4gICAgdmFyIG5hbWUgPSByb3V0ZS5icmVhZGNydW1iTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJzooJyArIHBhcmFtc0tleXMgKyAnKScsICdnJyksIGZ1bmN0aW9uIChyZXBsYWNlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwYXJhbXNba2V5XSB8fCByZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJdGVtUmVuZGVyKHJvdXRlLCBwYXJhbXMsIHJvdXRlcywgcGF0aHMpIHtcbiAgICB2YXIgaXNMYXN0SXRlbSA9IHJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gcm91dGVzLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5hbWUgPSBnZXRCcmVhZGNydW1iTmFtZShyb3V0ZSwgcGFyYW1zKTtcbiAgICByZXR1cm4gaXNMYXN0SXRlbSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG5hbWVcbiAgICApIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgeyBocmVmOiAnIy8nICsgcGF0aHMuam9pbignLycpIH0sXG4gICAgICAgIG5hbWVcbiAgICApO1xufVxuXG52YXIgQnJlYWRjcnVtYiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoQnJlYWRjcnVtYiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBCcmVhZGNydW1iKCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBCcmVhZGNydW1iKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKEJyZWFkY3J1bWIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCcmVhZGNydW1iKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoQnJlYWRjcnVtYiwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSghKCdsaW5rUmVuZGVyJyBpbiBwcm9wcyB8fCAnbmFtZVJlbmRlcicgaW4gcHJvcHMpLCAnYGxpbmtSZW5kZXJgIGFuZCBgbmFtZVJlbmRlcmAgYXJlIHJlbW92ZWQsIHBsZWFzZSB1c2UgYGl0ZW1SZW5kZXJgIGluc3RlYWQsICcgKyAnc2VlOiBodHRwczovL3UuYW50LmRlc2lnbi9pdGVtLXJlbmRlci4nKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBjcnVtYnMgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3IgPSBfcHJvcHMuc2VwYXJhdG9yLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICByb3V0ZXMgPSBfcHJvcHMucm91dGVzLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRwYXJhbXMgPSBfcHJvcHMucGFyYW1zLFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IF9wcm9wcyRwYXJhbXMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3Byb3BzJHBhcmFtcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBfcHJvcHMkaXRlbVJlbmRlciA9IF9wcm9wcy5pdGVtUmVuZGVyLFxuICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIgPSBfcHJvcHMkaXRlbVJlbmRlciA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdEl0ZW1SZW5kZXIgOiBfcHJvcHMkaXRlbVJlbmRlcjtcblxuICAgICAgICAgICAgaWYgKHJvdXRlcyAmJiByb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IFtdO1xuICAgICAgICAgICAgICAgIGNydW1icyA9IHJvdXRlcy5tYXAoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLnBhdGggPSByb3V0ZS5wYXRoIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IHJvdXRlLnBhdGgucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJzonICsga2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfQnJlYWRjcnVtYkl0ZW0yWydkZWZhdWx0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHNlcGFyYXRvcjogc2VwYXJhdG9yLCBrZXk6IHJvdXRlLmJyZWFkY3J1bWJOYW1lIHx8IHBhdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXIocm91dGUsIHBhcmFtcywgcm91dGVzLCBwYXRocylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjcnVtYnMgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuX19BTlRfQlJFQURDUlVNQl9JVEVNLCAnQnJlYWRjcnVtYiBvbmx5IGFjY2VwdHMgQnJlYWRjcnVtYi5JdGVtIGFzIGl0XFwncyBjaGlsZHJlbicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsIHByZWZpeENscyksIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgIGNydW1ic1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQnJlYWRjcnVtYjtcbn0oX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJyZWFkY3J1bWI7XG5cbkJyZWFkY3J1bWIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1icmVhZGNydW1iJyxcbiAgICBzZXBhcmF0b3I6ICcvJ1xufTtcbkJyZWFkY3J1bWIucHJvcFR5cGVzID0ge1xuICAgIHByZWZpeENsczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG4gICAgc2VwYXJhdG9yOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm5vZGUsXG4gICAgcm91dGVzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5LFxuICAgIHBhcmFtczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gICAgbGlua1JlbmRlcjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuICAgIG5hbWVSZW5kZXI6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuY1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2JyZWFkY3J1bWIvQnJlYWRjcnVtYi5qc1xuLy8gbW9kdWxlIGlkID0gNjgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQThCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQWxDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBdEJBO0FBQ0E7QUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9