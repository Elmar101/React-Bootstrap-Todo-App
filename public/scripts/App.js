"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this;

    _classCallCheck(this, TodoApp);

    _this = _super.call(this, props);
    _this.state = {
      items: ["item 1", "item 2", "item 3", "item 4"]
    };
    _this.clearItem = _this.clearItem.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem("items");
      var items = JSON.parse(json);

      if (items) {
        this.setState({
          items: items
        });
      }

      console.log(items);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length !== this.state.items.length) {
        var str = JSON.stringify(this.state.items);
        localStorage.setItem('items', str);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log(' Komponent silindikde');
    }
  }, {
    key: "clearItem",
    value: function clearItem() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return " Item Elave edin";
      } else if (this.state.items.indexOf(item) > -1) {
        return " Item Listede var";
      } else {
        this.setState(function (prevState) {
          return {
            items: [].concat(_toConsumableArray(prevState.items), [item])
          };
        });
      }
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(_item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (item) {
          return item !== _item;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var app = {
        title: "Iphone",
        description: " Telefon"
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        description: app.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.items,
        onClearItem: this.clearItem,
        onDeleteItem: this.deleteItem
      }), /*#__PURE__*/React.createElement(Actions, {
        onAddItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " ", this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.description));
    }
  }]);

  return Header;
}(React.Component);

var TodoList = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoList, _React$Component3);

  var _super3 = _createSuper(TodoList);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _super3.apply(this, arguments);
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(TodoItem, {
          item: item,
          key: index,
          onDeleteItem: _this2.props.onDeleteItem
        });
      })), /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("button", {
        onClick: this.props.onClearItem
      }, " Clear Item"), " "));
    }
  }]);

  return TodoList;
}(React.Component);

var TodoItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(TodoItem, _React$Component4);

  var _super4 = _createSuper(TodoItem);

  function TodoItem(props) {
    var _this3;

    _classCallCheck(this, TodoItem);

    _this3 = _super4.call(this, props);
    _this3.deleteItemHandler = _this3.deleteItemHandler.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(TodoItem, [{
    key: "deleteItemHandler",
    value: function deleteItemHandler() {
      this.props.onDeleteItem(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, this.props.item, " "), /*#__PURE__*/React.createElement("button", {
        style: {
          marginLeft: '15px'
        },
        onClick: this.deleteItemHandler
      }, " x "));
    }
  }]);

  return TodoItem;
}(React.Component);

var Actions = /*#__PURE__*/function (_React$Component5) {
  _inherits(Actions, _React$Component5);

  var _super5 = _createSuper(Actions);

  function Actions(props) {
    var _this4;

    _classCallCheck(this, Actions);

    _this4 = _super5.call(this, props);
    _this4.state = {
      error: ''
    };
    _this4.addItemhandleSubmit = _this4.addItemhandleSubmit.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(Actions, [{
    key: "addItemhandleSubmit",
    value: function addItemhandleSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.textItem.value.trim();
      var err = this.props.onAddItem(item);
      this.setState({
        error: err
      });
      e.target.elements.textItem.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, " ", this.state.error, " "), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.addItemhandleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "textItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, " Add Item ")));
    }
  }]);

  return Actions;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), document.getElementById('root'));
