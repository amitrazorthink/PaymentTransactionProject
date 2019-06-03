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
    }, ".rowClass.jsx-1302621058,td.jsx-1302621058{border:1px solid #000 !important;padding:5px;text-align:center;}tr.jsx-1302621058 td.jsx-1302621058{width:27vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUc4QyxBQUt4QixXQUNiLHNCQUxnQixZQUNNLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnN0IHRhYmxlRGF0YSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IHREYXRhID0gKHRhYmxlRGF0YSAmJiB0YWJsZURhdGEubGVuZ3RoKSA/XG4gICAgdGFibGVEYXRhLm1hcChpID0+IHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93Q2xhc3NcIj5cbiAgICAgICAgPHRkPntpLnRyYW5zYWN0aW9uSWR9PC90ZD5cbiAgICAgICAgPHRkPntpLnVzZXJOYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5wYXltZW50TW9kZX08L3RkPlxuICAgICAgICA8dGQ+e2kuYW1vdW50fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgIC5yb3dDbGFzcyAsIHRke1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHRyIHRkIHtcbiAgICAgICAgICB3aWR0aDogMjd2dztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgICAgICApXG4gICAgICAgfSkgOiA8cD5Mb2FkaW5nIC4uLjwvcD5cblxuIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZURpdlwiPlxuICAgICAgIDx0YWJsZT5cbiAgICAgICAgIDx0cj5cbiAgICAgICAgICAgPHRoPlRyYW5zYWN0aW9uIElEPC90aD5cbiAgICAgICAgICAgPHRoPlVzZXIgTmFtZTwvdGg+XG4gICAgICAgICAgIDx0aD5QYXltZW50IE1vZGU8L3RoPlxuICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cbiAgICAgICAgIDwvdHI+XG4gICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgIHt0RGF0YX1cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgPC90YWJsZT5cbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgXG5cbnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgd2lkdGg6IDEwMCU7XG59XG4gIHRib2R5e1xuICAgIGhlaWdodDoyMDBweDtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB0Ym9keSx0cix0ZHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICB9XG4gIHRib2R5XG4gICAgdGR7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgIH1cbiAgXG4gIHRoZWFkIHtcbiAgICB0clxuICAgICAgdGhcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xuICAgICAgIGJvcmRlci1jb2xvcjojZTY3ZTIyO1xuICAgICAgfVxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICAgfVxuICAgICAgICAgLnRhYmxlRGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDlkOGQ5O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIHBhZGRpbmc6IDIxcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcblxuIl19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
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
  }, "table.jsx-659587557{width:100%;border:1px solid #7a7a7a;background-color:#f3f3f3;border-collapse:collapse;background:#ccc;font-weight:normal;font-family:sans-serif;font-size:12px;width:100%;}tbody.jsx-659587557{height:200px;overflow-y:auto;width:100%;}tbody.jsx-659587557,tr.jsx-659587557,td.jsx-659587557{display:inline-block;border:1px solid #7a7a7a;}tbody.jsx-659587557 td.jsx-659587557{float:left;}thead.jsx-659587557{tr th float:left;background-color:#f39c12;border-color:#e67e22;}th.jsx-659587557,td.jsx-659587557{padding:5px;text-align:center;width:27vw;}.tableDiv.jsx-659587557{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDbUIsQUFLYyxBQVdHLEFBS1EsQUFLUixBQU1FLEFBS0UsQUFLUyxXQXBDRixBQXFCdkIsQ0FXc0IsQ0FyQlAsSUFnQmEsRUFVVixFQXJCTyxRQUpkLENBcUJJLENBS0MsS0FyQ08sSUFZdkIsQ0FxQkssQUFLYyxDQVhJLElBWHpCLFFBdUJ3QixPQXRDQyxFQTJCckIsT0FZRSxnQkF0Q1UsZ0JBQ0ssbUJBQ0ssdUJBQ1YsZUFDRixXQUNoQiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnN0IHRhYmxlRGF0YSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IHREYXRhID0gKHRhYmxlRGF0YSAmJiB0YWJsZURhdGEubGVuZ3RoKSA/XG4gICAgdGFibGVEYXRhLm1hcChpID0+IHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93Q2xhc3NcIj5cbiAgICAgICAgPHRkPntpLnRyYW5zYWN0aW9uSWR9PC90ZD5cbiAgICAgICAgPHRkPntpLnVzZXJOYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5wYXltZW50TW9kZX08L3RkPlxuICAgICAgICA8dGQ+e2kuYW1vdW50fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgIC5yb3dDbGFzcyAsIHRke1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHRyIHRkIHtcbiAgICAgICAgICB3aWR0aDogMjd2dztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgICAgICApXG4gICAgICAgfSkgOiA8cD5Mb2FkaW5nIC4uLjwvcD5cblxuIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZURpdlwiPlxuICAgICAgIDx0YWJsZT5cbiAgICAgICAgIDx0cj5cbiAgICAgICAgICAgPHRoPlRyYW5zYWN0aW9uIElEPC90aD5cbiAgICAgICAgICAgPHRoPlVzZXIgTmFtZTwvdGg+XG4gICAgICAgICAgIDx0aD5QYXltZW50IE1vZGU8L3RoPlxuICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cbiAgICAgICAgIDwvdHI+XG4gICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgIHt0RGF0YX1cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgPC90YWJsZT5cbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgXG5cbnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgd2lkdGg6IDEwMCU7XG59XG4gIHRib2R5e1xuICAgIGhlaWdodDoyMDBweDtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB0Ym9keSx0cix0ZHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICB9XG4gIHRib2R5XG4gICAgdGR7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgIH1cbiAgXG4gIHRoZWFkIHtcbiAgICB0clxuICAgICAgdGhcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xuICAgICAgIGJvcmRlci1jb2xvcjojZTY3ZTIyO1xuICAgICAgfVxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICAgfVxuICAgICAgICAgLnRhYmxlRGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDlkOGQ5O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIHBhZGRpbmc6IDIxcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcblxuIl19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=0.31ac517699842d36de7e.hot-update.js.map