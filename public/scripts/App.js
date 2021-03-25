"use strict";

var root = document.getElementById('root');
var number = 0;

var addOneHandler = function addOneHandler() {
  number++;
  renderApp();
  console.log("add one");
};

var minusOneHandler = function minusOneHandler() {
  number--;
  renderApp();
  console.log("minus one");
};

function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "number:  ", number, " "), /*#__PURE__*/React.createElement("button", {
    onClick: addOneHandler
  }, " + "), /*#__PURE__*/React.createElement("button", {
    onClick: minusOneHandler
  }, " - "));
  ReactDOM.render(template, root);
}

renderApp();
