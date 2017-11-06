'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apis;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const host = 'HTTP://localhost:3000' ;

var host = 'http://localhost:3002';
/**
 * Created by kee on 15/10/21.
 */
function apis(_ref) {
  var url = _ref.url,
      method = _ref.method,
      others = (0, _objectWithoutProperties3.default)(_ref, ['url', 'method']);

  return (0, _axios2.default)((0, _extends3.default)({
    url: host + url,
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }, others));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy9BcGlzLmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiaG9zdCIsImFwaXMiLCJ1cmwiLCJtZXRob2QiLCJvdGhlcnMiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQSxBQUFPOzs7Ozs7QUFDUDs7QUFFQSxJQUFNLE9BQU4sQUFBYSxBQUViO0FBUkE7OztBQVFlLFNBQUEsQUFBUyxXQUFpQztNQUExQixBQUEwQixXQUExQixBQUEwQjtNQUFyQixBQUFxQixjQUFyQixBQUFxQjtNQUFWLEFBQVUsOERBQ3ZEOztTQUFPO1NBQ0EsT0FEQSxBQUNPLEFBQ1o7WUFGSyxBQUVHLEFBQ1I7O3NCQUhLLEFBR0ksQUFDUztBQURULEFBQ1A7QUFIRixLQURGLEFBQU8sQUFNRixBQUVOIiwiZmlsZSI6IkFwaXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3V0b3V1LWltYWMvRG9jdW1lbnRzL0dJVC9NYW9CbG9nTmV4dCJ9