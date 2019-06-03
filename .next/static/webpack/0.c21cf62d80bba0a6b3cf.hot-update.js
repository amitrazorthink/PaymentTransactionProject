webpackHotUpdate(0,{

/***/ "./components/Transactions.js":
/*!************************************!*\
  !*** ./components/Transactions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserButton */ "./components/UserButton.js");
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadioButton */ "./components/RadioButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Table */ "./components/Table.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../selector */ "./selector.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");










var btnName = [{
  id: 1,
  name: 'USER-A'
}, {
  id: 2,
  name: 'USER-B'
}, {
  id: 3,
  name: 'USER-C'
}];
var radioBtn = [{
  id: 1,
  name: 'American Express'
}, {
  id: 2,
  name: 'VISA'
}, {
  id: 3,
  name: 'DBS PayLa'
}];

function Example(props) {
  // Declare a new state variable
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      userName = _useState2[0],
      setUserName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      paymentMode = _useState4[0],
      setPaymentMode = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      amount = _useState6[0],
      setAmount = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getTransaction"])());
  }, []);

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["saveTransaction"])({
      userName: userName,
      paymentMode: paymentMode,
      amount: amount
    }));
    setPaymentMode('');
    setAmount('');
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1229194759"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "jsx-1229194759"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1229194759" + " " + "formButton"
  }, btnName.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_UserButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: item.name,
      onClickHandler: function onClickHandler(name) {
        setUserName(name);
      }
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1229194759" + " " + "formButton radioPosition"
  }, radioBtn.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_RadioButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: item.name,
      onClickHandler: function onClickHandler(payment) {
        setPaymentMode(payment);
      },
      value: paymentMode
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1229194759" + " " + "submitButton"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1229194759"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "number",
    min: "1",
    max: "5000",
    value: amount,
    onChange: function onChange(e) {
      setAmount(e.target.value);
    },
    className: "jsx-1229194759" + " " + "inputValue"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-1229194759"
  }, "some")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "submit",
    value: "Transfer",
    className: "jsx-1229194759" + " " + "transferButton"
  }, "Transfer"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: props.transactions
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1229194759"
  }, "form.jsx-1229194759{background:#d9d8d9;margin:auto;width:75%;padding:21px;}.formButton.jsx-1229194759{width:25%;display:inline-block;}button.jsx-1229194759{display:block;}.radioPosition.jsx-1229194759{position:absolute;}.submitButton.jsx-1229194759{width:31%;display:inline-block;position:absolute;right:18%;top:8%;}.inputValue.jsx-1229194759{height:25px;width:200px;border:2px solid #e87c7c;}.transferButton.jsx-1229194759{padding:6px;background:#0076ff;color:#ffff;float:right;position:relative;bottom:7vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RyYW5zYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRndCLEFBRzhCLEFBTVQsQUFJSSxBQUdJLEFBR1IsQUFPRSxBQUtBLFVBckJTLEFBVUEsRUFPVCxBQUtPLEVBbEJyQixJQUdBLENBYk0sS0F3QnFCLE9BdkJ2QixBQU1KLEFBVW9CLEFBWU4sVUEzQlAsRUE0Qk8sTUFaRixBQU9aLEtBdEJBLENBNEJvQixJQVpYLE9BQ1QsT0FZYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RyYW5zYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQnV0dG9uIGZyb20gXCIuL1VzZXJCdXR0b25cIjtcbmltcG9ydCBSYWRpb0J1dHRvbiBmcm9tIFwiLi9SYWRpb0J1dHRvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAge3NhdmVUcmFuc2FjdGlvbiwgZ2V0VHJhbnNhY3Rpb259ICBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xuaW1wb3J0IHNlbGVjdEV4YW1wbGVQYWdlIGZyb20gXCIuLi9zZWxlY3RvclwiO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQnO1xuXG5jb25zdCBidG5OYW1lID0gW3tcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnVVNFUi1BJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1VTRVItQidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsICAgIFxuICAgICAgICAgICAgbmFtZTogJ1VTRVItQydcbiAgICAgICAgICAgIH0sXG5dO1xuY29uc3QgcmFkaW9CdG4gPSBbe1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdBbWVyaWNhbiBFeHByZXNzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1ZJU0EnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgbmFtZTogJ0RCUyBQYXlMYSdcbiAgICAgICAgICAgIH0sXG5dO1xuXG5mdW5jdGlvbiBFeGFtcGxlKHByb3BzKSB7XG4gICAgLy8gRGVjbGFyZSBhIG5ldyBzdGF0ZSB2YXJpYWJsZVxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXltZW50TW9kZSwgc2V0UGF5bWVudE1vZGVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKCk7XG5cblxuICAgICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIHByb3BzLmRpc3BhdGNoKGdldFRyYW5zYWN0aW9uKCkpO1xuICAgfSwgW10pXG5cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJvcHMuZGlzcGF0Y2goc2F2ZVRyYW5zYWN0aW9uKFxuICAgICAgICB7XG4gICAgICAgICAgdXNlck5hbWUsXG4gICAgICAgICAgcGF5bWVudE1vZGUsXG4gICAgICAgICAgYW1vdW50XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgKTtcbiAgICBzZXRQYXltZW50TW9kZSgnJyk7XG4gICAgc2V0QW1vdW50KCcnKTtcbiAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQnV0dG9uXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBidG5OYW1lLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAgPFVzZXJCdXR0b24gbmFtZT17aXRlbS5uYW1lfSBvbkNsaWNrSGFuZGxlcj17KG5hbWUpID0+IHsgc2V0VXNlck5hbWUobmFtZSl9fS8+XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUJ1dHRvbiByYWRpb1Bvc2l0aW9uXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByYWRpb0J0bi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuICA8UmFkaW9CdXR0b24gbmFtZT17aXRlbS5uYW1lfSBvbkNsaWNrSGFuZGxlcj17KHBheW1lbnQpID0+IHsgc2V0UGF5bWVudE1vZGUocGF5bWVudCl9fSB2YWx1ZT17cGF5bWVudE1vZGV9Lz5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PVwiNTAwMFwiIHZhbHVlID0ge2Ftb3VudH0gY2xhc3NOYW1lPVwiaW5wdXRWYWx1ZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICA8cD5zb21lPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJUcmFuc2ZlclwiICBjbGFzc05hbWU9XCJ0cmFuc2ZlckJ1dHRvblwiPlRyYW5zZmVyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPFRhYmxlIGRhdGE9e3Byb3BzLnRyYW5zYWN0aW9uc30vPlxuICAgICAgICAgICAgPENoYXJ0Lz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtQnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5yYWRpb1Bvc2l0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Ym1pdEJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAxOCU7XG4gICAgICAgICAgdG9wOiA4JTtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXRWYWx1ZSB7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTg3YzdjO1xuICAgICAgICB9XG4gICAgICAgIC50cmFuc2ZlckJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDc2ZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm90dG9tOiA3dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiBzZWxlY3RFeGFtcGxlUGFnZShzdGF0ZSwgcHJvcHMpO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV4YW1wbGUpO1xuIl19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Transactions.js */"));
}

var mapStateToProps = function mapStateToProps(state, props) {
  return Object(_selector__WEBPACK_IMPORTED_MODULE_8__["default"])(state, props);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Example));

/***/ })

})
//# sourceMappingURL=0.c21cf62d80bba0a6b3cf.hot-update.js.map