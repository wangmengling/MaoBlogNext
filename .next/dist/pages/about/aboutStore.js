'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobx = require('mobx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = null;

// class AboutStore {
//   @observable lastUpdate = 0
//   @observable light = false

//   constructor (isServer, lastUpdate) {
//     this.lastUpdate = lastUpdate
//   }

//   @action start = () => {
//     this.timer = setInterval(() => {
//       this.lastUpdate = Date.now()
//       this.light = true
//     })
//   }

//   stop = () => clearInterval(this.timer)
// }

// export function initStore (isServer, lastUpdate = Date.now()) {
//   if (isServer) {
//     return new Store(isServer, lastUpdate)
//   } else {
//     if (store === null) {
//       store = new Store(isServer, lastUpdate)
//     }
//     return store
//   }
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0L2Fib3V0U3RvcmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJvYnNlcnZhYmxlIiwiYWN0aW9uIiwidXNlU3RyaWN0Iiwic3RvcmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsQUFBTyxBQUFQLEFBQWUsQUFBZjs7OztBQUNBLEFBQVMsQUFBVCxBQUFxQixBQUFyQixBQUE0QixBQUE1Qjs7OztBQUNBLElBQUksUUFBUSxBQUFaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWJvdXRTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdXRvdXUtaW1hYy9Eb2N1bWVudHMvR0lUL01hb0Jsb2dOZXh0In0=