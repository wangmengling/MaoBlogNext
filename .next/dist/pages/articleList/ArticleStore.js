'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobx = require('mobx');

var _Apis = require('../../Config/Apis');

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