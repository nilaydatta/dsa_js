"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Hashtable = /*#__PURE__*/function () {
  function Hashtable(size) {
    _classCallCheck(this, Hashtable);
    this.table = new Array(size);
    this.size = size;
  }
  _createClass(Hashtable, [{
    key: "hash",
    value: function hash(key) {
      var total = 0;
      for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var index = this.hash(key);
      this.table[index] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = this.hash(key);
      return this.table[index];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var index = this.hash(key);
      this.table[index] = undefined;
    }
  }, {
    key: "display",
    value: function display(key, value) {
      for (var i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }]);
  return Hashtable;
}();
var table = new Hashtable(50);
table.set("name", "Bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
table.set("mame", "Clark");
table.display();