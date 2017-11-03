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
        _this.pageIndex = pageIndex;
        _this.articleList = response.data.data.list;
        console.log(response);
        _this.pageTotal = response.data.data.pageTotal;
      }).catch(function (error) {});
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
        method: 'POST',
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
    return new Array(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGVMaXN0L0FydGljbGVTdG9yZS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlIiwiYWN0aW9uIiwidXNlU3RyaWN0IiwiYWpheCIsIkFydGljbGVTdG9yZSIsInBhZ2VJbmRleCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJwYWdlU2l6ZSIsInRoZW4iLCJyZXNwb25zZSIsImFydGljbGVMaXN0IiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlVG90YWwiLCJjYXRjaCIsImVycm9yIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaWQiLCJhcnRpY2xlSWQiLCJkZWxldGVEYXRhIiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFRLEFBQVksQUFBUTs7QUFDNUIsQUFBTyxBQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRmpCOztBQUdBLHFCQUFBLEFBQVU7SUFDSixBLHFDQU1GOzBCQUFjO3dDQUFBOztzREFBQTs7cURBQUE7O29EQUFBOztxREFBQTs7c0RBRWI7Ozs7O21DQUV1QixBLFdBQVc7a0JBQ2pDOztBQUNBO0FBQ0Y7QUFDRTs7YUFBSyxBQUNJLEFBQ0w7Z0JBRkMsQUFFTyxBQUNSOztxQkFBSyxBQUNRLEFBQ1g7b0JBTE4sQUFBSyxBQUdJLEFBRU87QUFGUCxBQUNIO0FBSkQsQUFDRCxTQURKLEFBT0csS0FBSyxVQUFBLEFBQUMsVUFBYSxBQUNsQjtjQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtjQUFBLEFBQUssY0FBYyxTQUFBLEFBQVMsS0FBVCxBQUFjLEtBQWpDLEFBQXNDLEFBQ3RDO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFLLFlBQVksU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUEvQixBQUFvQyxBQUN2QztBQVpELFNBQUEsQUFhQyxNQUFNLFVBQUEsQUFBQyxPQUFVLEFBRWpCLENBZkQsQUFnQkQ7Ozs7dUNBRTJCLEEsV0FBVSxBLFVBQVU7bUJBQzVDOztBQUNBO0FBQ0E7VUFBTSxRQUFRLGFBQUEsQUFBYSxRQUEzQixBQUFjLEFBQXFCLEFBQ25DOzthQUFLLEFBQ0ksQUFDTDtnQkFGQyxBQUVPLEFBQ1I7O2lCQUFLLEFBQ0ksQUFDUDtxQkFGRyxBQUVRLEFBQ1g7b0JBTk4sQUFBSyxBQUdJLEFBR087QUFIUCxBQUNIO0FBSkQsQUFDRCxTQURKLEFBUUcsS0FBSyxVQUFBLEFBQUMsVUFBYSxBQUNsQjtlQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtlQUFBLEFBQUssY0FBYyxTQUFBLEFBQVMsS0FBVCxBQUFjLEtBQWpDLEFBQXNDLEFBQ3RDO2VBQUEsQUFBSyxZQUFZLFNBQUEsQUFBUyxLQUFULEFBQWMsS0FBL0IsQUFBb0MsQUFDdkM7QUFaRCxTQUFBLEFBYUMsTUFBTSxVQUFBLEFBQUMsT0FBVSxBQUVqQixDQWZELEFBZ0JEOzs7O2tDQUVvQixBLElBQUk7bUJBQ3pCOztBQUNBO0FBQ0E7VUFBTSxRQUFRLGFBQUEsQUFBYSxRQUEzQixBQUFjLEFBQXFCLEFBQ25DOzthQUFLLEFBQ0ksQUFDTDtnQkFGQyxBQUVPLEFBQ1I7O2lCQUFLLEFBQ0ksQUFDUDtxQkFMTixBQUFLLEFBR0ksQUFFTztBQUZQLEFBQ0g7QUFKRCxBQUNELFNBREosQUFPRyxLQUFLLFVBQUEsQUFBQyxVQUFhLEFBQ2xCO2VBQUEsQUFBSyxhQUFhLFNBQWxCLEFBQTJCLEFBQzNCO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Z0JBQUEsQUFBUSxJQUFJLFNBQVosQUFBcUIsQUFDckI7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQVpELFNBQUEsQUFhQyxNQUFNLFVBQUEsQUFBQyxPQUFVLEFBQ2hCO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFmRCxBQWdCRDs7Ozs7K0UsQUF6RUE7OztXQUF5QixJQUFBLEFBQUksTUFBSixBQUFVLEE7OzRFQUNuQyxBOzs7VyxBQUF1Qjs7MkVBQ3ZCLEE7OztXQUFzQixBOzs0RSxBQUN0Qjs7O1dBQXVCLEE7OzZFQUN2QixBOzs7V0FBd0IsQTs7a0VBS3hCLEEsa0xBc0JBLEEsaUxBc0JBLEEsZ0hBdUJMOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFydGljbGVTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdXRvdXUtaW1hYy9Eb2N1bWVudHMvR0lUL01hb0Jsb2dOZXh0In0=