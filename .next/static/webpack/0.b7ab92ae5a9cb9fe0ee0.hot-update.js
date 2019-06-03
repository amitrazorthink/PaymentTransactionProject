webpackHotUpdate(0,{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Table(props) {
  console.log('props in Table', props);
  var tableData = props.data;
  var tData = tableData && tableData.length ? tableData.map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-1302621058" + " " + "rowClass"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1302621058"
    }, i.transactionId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1302621058"
    }, i.userName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1302621058"
    }, i.paymentMode), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-1302621058"
    }, i.amount)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1302621058"
    }, ".rowClass.jsx-1302621058,td.jsx-1302621058{border:1px solid #000 !important;padding:5px;text-align:center;}tr.jsx-1302621058 td.jsx-1302621058{width:27vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUc4QyxBQUt4QixXQUNiLHNCQUxnQixZQUNNLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcyBpbiBUYWJsZScsIHByb3BzKTtcbiAgY29uc3QgdGFibGVEYXRhID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgdERhdGEgPSAodGFibGVEYXRhICYmIHRhYmxlRGF0YS5sZW5ndGgpID9cbiAgICB0YWJsZURhdGEubWFwKGkgPT4ge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3dDbGFzc1wiPlxuICAgICAgICA8dGQ+e2kudHJhbnNhY3Rpb25JZH08L3RkPlxuICAgICAgICA8dGQ+e2kudXNlck5hbWV9PC90ZD5cbiAgICAgICAgPHRkPntpLnBheW1lbnRNb2RlfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5hbW91bnR9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgLnJvd0NsYXNzICwgdGR7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHIgdGQge1xuICAgICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICAgICAgIClcbiAgICAgICB9KSA6IDxwPkxvYWRpbmcgLi4uPC9wPlxuXG4gcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlRGl2XCI+XG4gICAgICAgPHRhYmxlPlxuICAgICAgICAgPHRyPlxuICAgICAgICAgICA8dGg+VHJhbnNhY3Rpb24gSUQ8L3RoPlxuICAgICAgICAgICA8dGg+VXNlciBOYW1lPC90aD5cbiAgICAgICAgICAgPHRoPlBheW1lbnQgTW9kZTwvdGg+XG4gICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgPC90cj5cbiAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAge3REYXRhfVxuICAgICAgICAgPC90Ym9keT5cbiAgICAgICA8L3RhYmxlPlxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBcblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB3aWR0aDogMTAwJTtcbn1cbiAgdGJvZHl7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIHRib2R5LHRyLHRke1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIH1cbiAgdGJvZHlcbiAgICB0ZHtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgfVxuICBcbiAgdGhlYWQge1xuICAgIHRyXG4gICAgICB0aFxuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gICAgICAgYm9yZGVyLWNvbG9yOiNlNjdlMjI7XG4gICAgICB9XG4gICAgICB0aCwgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgICB9XG4gICAgICAgICAudGFibGVEaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgcGFkZGluZzogMjFweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuXG4iXX0= */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading ...");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-659587557" + " " + "tableDiv"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-659587557"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-659587557"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-659587557"
  }, "Transaction ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-659587557"
  }, "User Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-659587557"
  }, "Payment Mode"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-659587557"
  }, "Amount")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-659587557"
  }, tData)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "659587557"
  }, "table.jsx-659587557{width:100%;border:1px solid #7a7a7a;background-color:#f3f3f3;border-collapse:collapse;background:#ccc;font-weight:normal;font-family:sans-serif;font-size:12px;width:100%;}tbody.jsx-659587557{height:200px;overflow-y:auto;width:100%;}tbody.jsx-659587557,tr.jsx-659587557,td.jsx-659587557{display:inline-block;border:1px solid #7a7a7a;}tbody.jsx-659587557 td.jsx-659587557{float:left;}thead.jsx-659587557{tr th float:left;background-color:#f39c12;border-color:#e67e22;}th.jsx-659587557,td.jsx-659587557{padding:5px;text-align:center;width:27vw;}.tableDiv.jsx-659587557{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDbUIsQUFLYyxBQVdHLEFBS1EsQUFLUixBQU1FLEFBS0UsQUFLUyxXQXBDRixBQXFCdkIsQ0FXc0IsQ0FyQlAsSUFnQmEsRUFVVixFQXJCTyxRQUpkLENBcUJJLENBS0MsS0FyQ08sSUFZdkIsQ0FxQkssQUFLYyxDQVhJLElBWHpCLFFBdUJ3QixPQXRDQyxFQTJCckIsT0FZRSxnQkF0Q1UsZ0JBQ0ssbUJBQ0ssdUJBQ1YsZUFDRixXQUNoQiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcyBpbiBUYWJsZScsIHByb3BzKTtcbiAgY29uc3QgdGFibGVEYXRhID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgdERhdGEgPSAodGFibGVEYXRhICYmIHRhYmxlRGF0YS5sZW5ndGgpID9cbiAgICB0YWJsZURhdGEubWFwKGkgPT4ge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3dDbGFzc1wiPlxuICAgICAgICA8dGQ+e2kudHJhbnNhY3Rpb25JZH08L3RkPlxuICAgICAgICA8dGQ+e2kudXNlck5hbWV9PC90ZD5cbiAgICAgICAgPHRkPntpLnBheW1lbnRNb2RlfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5hbW91bnR9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgLnJvd0NsYXNzICwgdGR7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHIgdGQge1xuICAgICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICAgICAgIClcbiAgICAgICB9KSA6IDxwPkxvYWRpbmcgLi4uPC9wPlxuXG4gcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlRGl2XCI+XG4gICAgICAgPHRhYmxlPlxuICAgICAgICAgPHRyPlxuICAgICAgICAgICA8dGg+VHJhbnNhY3Rpb24gSUQ8L3RoPlxuICAgICAgICAgICA8dGg+VXNlciBOYW1lPC90aD5cbiAgICAgICAgICAgPHRoPlBheW1lbnQgTW9kZTwvdGg+XG4gICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgPC90cj5cbiAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAge3REYXRhfVxuICAgICAgICAgPC90Ym9keT5cbiAgICAgICA8L3RhYmxlPlxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBcblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB3aWR0aDogMTAwJTtcbn1cbiAgdGJvZHl7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIHRib2R5LHRyLHRke1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIH1cbiAgdGJvZHlcbiAgICB0ZHtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgfVxuICBcbiAgdGhlYWQge1xuICAgIHRyXG4gICAgICB0aFxuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gICAgICAgYm9yZGVyLWNvbG9yOiNlNjdlMjI7XG4gICAgICB9XG4gICAgICB0aCwgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgICB9XG4gICAgICAgICAudGFibGVEaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgcGFkZGluZzogMjFweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuXG4iXX0= */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=0.b7ab92ae5a9cb9fe0ee0.hot-update.js.map