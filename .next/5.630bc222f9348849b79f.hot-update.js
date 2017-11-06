webpackHotUpdate(5,{

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(438);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobx = __webpack_require__(405);

var _Apis = __webpack_require__(441);

var _Apis2 = _interopRequireDefault(_Apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;

  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

// import React,{ Component } from 'react';

(0, _mobx.useStrict)(true);
var ArticleStore = (_class = function () {
  function ArticleStore() {
    (0, _classCallCheck3.default)(this, ArticleStore);

    _initDefineProp(this, 'articleList', _descriptor, this);

    _initDefineProp(this, 'pageIndex', _descriptor2, this);

    _initDefineProp(this, 'pageSize', _descriptor3, this);

    _initDefineProp(this, 'pageTotal', _descriptor4, this);

    _initDefineProp(this, 'deleteData', _descriptor5, this);
  }

  (0, _createClass3.default)(ArticleStore, [{
    key: 'getArticleList',

    // constructor() {

    // }

    value: function getArticleList(pageIndex) {
      var _this = this;

      // this.pageIndex = pageIndex;
      //发送摘苹果请求
      //   const token = window.localStorage.getItem('token');
      (0, _Apis2.default)({
        url: '/api/v1/article/list',
        method: 'POST',
        data: {
          pageIndex: pageIndex,
          pageSize: 10
        }
      }).then(function (response) {
        console.log(response);
        console.log("-----");
        _this.articleList = response.data.data.list;
        _this.pageIndex = pageIndex;
        _this.articleList = response.data.data.list;
        _this.pageTotal = response.data.data.pageTotal;
      }).catch(function (error) {
        console.log("======");
        console.log(error);
      });
    }
  }, {
    key: 'getHomeArticleList',
    value: function getHomeArticleList(pageIndex, pageSize) {
      var _this2 = this;

      // this.pageIndex = pageIndex;
      //发送摘苹果请求
      var token = localStorage.getItem('token');
      (0, _Apis2.default)({
        url: '/api/v1/article/getList',
        method: 'POST',
        data: {
          token: token,
          pageIndex: pageIndex,
          pageSize: pageSize
        }
      }).then(function (response) {
        _this2.pageIndex = pageIndex;
        _this2.articleList = response.data.data.list;
        _this2.pageTotal = response.data.data.pageTotal;
      }).catch(function (error) {});
    }
  }, {
    key: 'deleteArticle',
    value: function deleteArticle(id) {
      var _this3 = this;

      // this.pageIndex = pageIndex;
      //发送摘苹果请求
      var token = localStorage.getItem('token');
      (0, _Apis2.default)({
        url: '/api/v1/article/deleteArticle',
        method: 'GET',
        data: {
          token: token,
          articleId: id
        }
      }).then(function (response) {
        _this3.deleteData = response.data;
        console.log("-----");
        console.log(response.data);
        console.log("=====");
      }).catch(function (error) {
        console.log("-----");
      });
    }
  }]);

  return ArticleStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'articleList', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pageIndex', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'pageTotal', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'deleteData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'getArticleList', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getArticleList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getHomeArticleList', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getHomeArticleList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'deleteArticle', [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'deleteArticle'), _class.prototype)), _class);

exports.default = ArticleStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVMaXN0L0FydGljbGVTdG9yZS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlIiwiYWN0aW9uIiwidXNlU3RyaWN0IiwiYWpheCIsIkFydGljbGVTdG9yZSIsInBhZ2VJbmRleCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJwYWdlU2l6ZSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhcnRpY2xlTGlzdCIsImxpc3QiLCJwYWdlVG90YWwiLCJjYXRjaCIsImVycm9yIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaWQiLCJhcnRpY2xlSWQiLCJkZWxldGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBUSxBQUFZLEFBQVE7O0FBQzVCLEFBQU8sQUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZqQjs7QUFHQSxxQkFBQSxBQUFVO0lBQ0osQTs7Ozs7Ozs7Ozs7Ozs7OztTQU1GOztBQUVBOzs7O21DQUV3QixBLFdBQVc7a0JBQ2pDOztBQUNBO0FBQ0Y7QUFDRTs7YUFBSyxBQUNJLEFBQ0w7Z0JBRkMsQUFFTyxBQUNSOztxQkFBSyxBQUNRLEFBQ1g7b0JBTE4sQUFBSyxBQUdJLEFBRU87QUFGUCxBQUNIO0FBSkQsQUFDRCxTQURKLEFBT0csS0FBSyxVQUFBLEFBQUMsVUFBYSxBQUNwQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFLLGNBQWMsU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUFqQyxBQUFzQyxBQUNwQztjQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtjQUFBLEFBQUssY0FBYyxTQUFBLEFBQVMsS0FBVCxBQUFjLEtBQWpDLEFBQXNDLEFBQ3RDO2NBQUEsQUFBSyxZQUFZLFNBQUEsQUFBUyxLQUFULEFBQWMsS0FBL0IsQUFBb0MsQUFFdkM7QUFmRCxTQUFBLEFBZ0JDLE1BQU0sVUFBQSxBQUFDLE9BQVUsQUFDaEI7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBbkJELEFBb0JEOzs7O3VDLEFBRTJCLFcsQUFBVSxVQUFVO21CQUM1Qzs7QUFDQTtBQUNBO1VBQU0sUUFBUSxhQUFBLEFBQWEsUUFBM0IsQUFBYyxBQUFxQixBQUNuQzs7YUFBSyxBQUNJLEFBQ0w7Z0JBRkMsQUFFTyxBQUNSOztpQkFBSyxBQUNJLEFBQ1A7cUJBRkcsQUFFUSxBQUNYO29CQU5OLEFBQUssQUFHSSxBQUdPO0FBSFAsQUFDSDtBQUpELEFBQ0QsU0FESixBQVFHLEtBQUssVUFBQSxBQUFDLFVBQWEsQUFDbEI7ZUFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7ZUFBQSxBQUFLLGNBQWMsU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUFqQyxBQUFzQyxBQUN0QztlQUFBLEFBQUssWUFBWSxTQUFBLEFBQVMsS0FBVCxBQUFjLEtBQS9CLEFBQW9DLEFBQ3ZDO0FBWkQsU0FBQSxBQWFDLE1BQU0sVUFBQSxBQUFDLE9BQVUsQUFFakIsQ0FmRCxBQWdCRDs7OztrQ0FFb0IsQSxJQUFJO21CQUN6Qjs7QUFDQTtBQUNBO1VBQU0sUUFBUSxhQUFBLEFBQWEsUUFBM0IsQUFBYyxBQUFxQixBQUNuQzs7YUFBSyxBQUNJLEFBQ0w7Z0JBRkMsQUFFTyxBQUNSOztpQkFBSyxBQUNJLEFBQ1A7cUJBTE4sQUFBSyxBQUdJLEFBRU87QUFGUCxBQUNIO0FBSkQsQUFDRCxTQURKLEFBT0csS0FBSyxVQUFBLEFBQUMsVUFBYSxBQUNsQjtlQUFBLEFBQUssYUFBYSxTQUFsQixBQUEyQixBQUMzQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2dCQUFBLEFBQVEsSUFBSSxTQUFaLEFBQXFCLEFBQ3JCO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QUFaRCxTQUFBLEFBYUMsTUFBTSxVQUFBLEFBQUMsT0FBVSxBQUNoQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBZkQsQUFnQkQ7Ozs7OytFQTdFQSxBOzs7V0FBeUIsQTs7NEVBQ3pCLEE7OztXQUF1QixBOzsyRUFDdkIsQTs7O1dBQXNCLEE7OzRFQUN0QixBOzs7V0FBdUIsQTs7NkVBQ3ZCLEE7OztXQUF3QixBOztrRUFLeEIsQSxrTEEwQkEsQSxpTEFzQkEsQSxnSEF1Qkw7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQXJ0aWNsZVN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy91dG91dS1pbWFjL0RvY3VtZW50cy9HSVQvTWFvQmxvZ05leHQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/utouu-imac/Documents/GIT/MaoBlogNext/pages/articleList/ArticleStore.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/utouu-imac/Documents/GIT/MaoBlogNext/pages/articleList/ArticleStore.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/articleList/ArticleStore")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42MzBiYzIyMmY5MzQ4ODQ5Yjc5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXJ0aWNsZUxpc3QvQXJ0aWNsZVN0b3JlLmpzP2IzYjYyNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtvYnNlcnZhYmxlLCBhY3Rpb24sIHVzZVN0cmljdH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgYWpheCBmcm9tICcuLi8uLi9Db25maWcvQXBpcyc7IFxudXNlU3RyaWN0KHRydWUpO1xuY2xhc3MgQXJ0aWNsZVN0b3JlIHtcbiAgICBAb2JzZXJ2YWJsZSBhcnRpY2xlTGlzdCA9IFtdO1xuICAgIEBvYnNlcnZhYmxlIHBhZ2VJbmRleCA9IDA7XG4gICAgQG9ic2VydmFibGUgcGFnZVNpemUgPSAxMDtcbiAgICBAb2JzZXJ2YWJsZSBwYWdlVG90YWwgPSAwO1xuICAgIEBvYnNlcnZhYmxlIGRlbGV0ZURhdGEgPSBudWxsO1xuICAgIC8vIGNvbnN0cnVjdG9yKCkge1xuICAgICAgXG4gICAgLy8gfVxuICBcbiAgICBAYWN0aW9uICBnZXRBcnRpY2xlTGlzdChwYWdlSW5kZXgpIHtcbiAgICAgIC8vIHRoaXMucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICAgICAgLy/lj5HpgIHmkZjoi7nmnpzor7fmsYJcbiAgICAvLyAgIGNvbnN0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgYWpheCh7XG4gICAgICAgICAgdXJsOiAnL2FwaS92MS9hcnRpY2xlL2xpc3QnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgcGFnZUluZGV4OiBwYWdlSW5kZXgsXG4gICAgICAgICAgICBwYWdlU2l6ZTogMTBcbiAgICAgICAgICB9XG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS1cIik7XG4gICAgICAgIHRoaXMuYXJ0aWNsZUxpc3QgPSByZXNwb25zZS5kYXRhLmRhdGEubGlzdDtcbiAgICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICAgICAgICB0aGlzLmFydGljbGVMaXN0ID0gcmVzcG9uc2UuZGF0YS5kYXRhLmxpc3Q7XG4gICAgICAgICAgdGhpcy5wYWdlVG90YWwgPSByZXNwb25zZS5kYXRhLmRhdGEucGFnZVRvdGFsO1xuICAgICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIEBhY3Rpb24gIGdldEhvbWVBcnRpY2xlTGlzdChwYWdlSW5kZXgscGFnZVNpemUpIHtcbiAgICAgICAgLy8gdGhpcy5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gICAgICAgIC8v5Y+R6YCB5pGY6Iu55p6c6K+35rGCXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS92MS9hcnRpY2xlL2dldExpc3QnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleCxcbiAgICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICAgICAgICAgIHRoaXMuYXJ0aWNsZUxpc3QgPSByZXNwb25zZS5kYXRhLmRhdGEubGlzdDtcbiAgICAgICAgICAgIHRoaXMucGFnZVRvdGFsID0gcmVzcG9uc2UuZGF0YS5kYXRhLnBhZ2VUb3RhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gIFxuICAgIEBhY3Rpb24gIGRlbGV0ZUFydGljbGUoaWQpIHtcbiAgICAgIC8vIHRoaXMucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICAgICAgLy/lj5HpgIHmkZjoi7nmnpzor7fmsYJcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICBhamF4KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL3YxL2FydGljbGUvZGVsZXRlQXJ0aWNsZScsXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgIGFydGljbGVJZDppZFxuICAgICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWxldGVEYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tXCIpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PVwiKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLVwiKVxuICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYXJ0aWNsZUxpc3QvQXJ0aWNsZVN0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFBQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWlCQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBWEE7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7O0FBRUE7QUFBQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=