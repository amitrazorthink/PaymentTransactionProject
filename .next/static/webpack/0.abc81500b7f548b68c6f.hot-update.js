webpackHotUpdate(0,{

/***/ "./components/Loader.js":
false,

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
  console.log('tableDta', tableData); // console.log('tableDta', tableData.length);

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
    }, ".rowClass.jsx-1302621058,td.jsx-1302621058{border:1px solid #000 !important;padding:5px;text-align:center;}tr.jsx-1302621058 td.jsx-1302621058{width:27vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHOEMsQUFLeEIsV0FDYixzQkFMZ0IsWUFDTSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICBjb25zb2xlLmxvZygncHJvcHMgaW4gVGFibGUnLCBwcm9wcyk7XG4gIGNvbnN0IHRhYmxlRGF0YSA9IHByb3BzLmRhdGE7XG4gIGNvbnNvbGUubG9nKCd0YWJsZUR0YScsIHRhYmxlRGF0YSk7XG4gIC8vIGNvbnNvbGUubG9nKCd0YWJsZUR0YScsIHRhYmxlRGF0YS5sZW5ndGgpO1xuXG5cbiAgY29uc3QgdERhdGEgPSAodGFibGVEYXRhICYmIHRhYmxlRGF0YS5sZW5ndGgpID9cbiAgICB0YWJsZURhdGEubWFwKGkgPT4ge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3dDbGFzc1wiPlxuICAgICAgICA8dGQ+e2kudHJhbnNhY3Rpb25JZH08L3RkPlxuICAgICAgICA8dGQ+e2kudXNlck5hbWV9PC90ZD5cbiAgICAgICAgPHRkPntpLnBheW1lbnRNb2RlfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5hbW91bnR9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgLnJvd0NsYXNzICwgdGR7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHIgdGQge1xuICAgICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICAgICAgIClcbiAgICAgICB9KSA6IDxwPkxvYWRpbmcgLi4uPC9wPlxuXG4gcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlRGl2XCI+XG4gICAgICAgPHRhYmxlPlxuICAgICAgICAgPHRyPlxuICAgICAgICAgICA8dGg+VHJhbnNhY3Rpb24gSUQ8L3RoPlxuICAgICAgICAgICA8dGg+VXNlciBOYW1lPC90aD5cbiAgICAgICAgICAgPHRoPlBheW1lbnQgTW9kZTwvdGg+XG4gICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgPC90cj5cbiAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAge3REYXRhfVxuICAgICAgICAgPC90Ym9keT5cbiAgICAgICA8L3RhYmxlPlxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBcblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB3aWR0aDogMTAwJTtcbn1cbiAgdGJvZHl7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIHRib2R5LHRyLHRke1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIH1cbiAgdGJvZHlcbiAgICB0ZHtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgfVxuICBcbiAgdGhlYWQge1xuICAgIHRyXG4gICAgICB0aFxuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gICAgICAgYm9yZGVyLWNvbG9yOiNlNjdlMjI7XG4gICAgICB9XG4gICAgICB0aCwgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgICB9XG4gICAgICAgICAudGFibGVEaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgcGFkZGluZzogMjFweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgXG4gICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuXG4vLyB0YWJsZSwgdGgsIHRkIHtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbi8vICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbi8vICAgYmFja2dyb3VuZDogI2NjYztcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9XG4vLyAgdGgge1xuLy8gICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAxMDEwMTtcbi8vICB9XG4vLyAgdGJvZHkge1xuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xuLy8gIH1cbi8vIHRoLCB0ZCB7XG4vLyAgIHBhZGRpbmc6IDVweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICB3aWR0aDogMjUlO1xuLy8gfVxuLy8gICAucm93Q2xhc3N7XG4vLyAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuLy8gIHBhZGRpbmc6IDVweDtcbi8vICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC50YWJsZURpdiB7XG4vLyAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4vLyAgIG1hcmdpbjogYXV0bztcbi8vICAgd2lkdGg6IDc1JTtcbi8vICAgcGFkZGluZzogMjFweDtcbi8vICAgbWFyZ2luLXRvcDogMTVweDtcbi8vICAgaGVpZ2h0OiA5ZW07XG4vLyB9Il19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading ...");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1747567201" + " " + "tableDiv"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-1747567201"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-1747567201"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-1747567201"
  }, "Transaction ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-1747567201"
  }, "User Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-1747567201"
  }, "Payment Mode"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-1747567201"
  }, "Amount")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-1747567201"
  }, tData)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1747567201"
  }, "table.jsx-1747567201{width:100%;border:1px solid #7a7a7a;background-color:#f3f3f3;border-collapse:collapse;background:#ccc;font-weight:normal;font-family:sans-serif;font-size:12px;width:100%;}tbody.jsx-1747567201{height:200px;overflow-y:auto;width:100%;}tbody.jsx-1747567201,tr.jsx-1747567201,td.jsx-1747567201{display:inline-block;border:1px solid #7a7a7a;}tbody.jsx-1747567201 td.jsx-1747567201{float:left;}thead.jsx-1747567201{tr th float:left;background-color:#f39c12;border-color:#e67e22;}th.jsx-1747567201,td.jsx-1747567201{padding:5px;text-align:center;width:27vw;}.tableDiv.jsx-1747567201{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDbUIsQUFLYyxBQVdHLEFBS1EsQUFLUixBQU1FLEFBS0UsQUFLUyxXQXBDRixBQXFCdkIsQ0FXc0IsQ0FyQlAsSUFnQmEsRUFVVixFQXJCTyxRQUpkLENBcUJJLENBS0MsS0FyQ08sSUFZdkIsQ0FxQkssQUFLYyxDQVhJLElBWHpCLFFBdUJ3QixPQXRDQyxFQTJCckIsT0FZRSxnQkF0Q1UsZ0JBQ0ssbUJBQ0ssdUJBQ1YsZUFDRixXQUNoQiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcyBpbiBUYWJsZScsIHByb3BzKTtcbiAgY29uc3QgdGFibGVEYXRhID0gcHJvcHMuZGF0YTtcbiAgY29uc29sZS5sb2coJ3RhYmxlRHRhJywgdGFibGVEYXRhKTtcbiAgLy8gY29uc29sZS5sb2coJ3RhYmxlRHRhJywgdGFibGVEYXRhLmxlbmd0aCk7XG5cblxuICBjb25zdCB0RGF0YSA9ICh0YWJsZURhdGEgJiYgdGFibGVEYXRhLmxlbmd0aCkgP1xuICAgIHRhYmxlRGF0YS5tYXAoaSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgPHRyIGNsYXNzTmFtZT1cInJvd0NsYXNzXCI+XG4gICAgICAgIDx0ZD57aS50cmFuc2FjdGlvbklkfTwvdGQ+XG4gICAgICAgIDx0ZD57aS51c2VyTmFtZX08L3RkPlxuICAgICAgICA8dGQ+e2kucGF5bWVudE1vZGV9PC90ZD5cbiAgICAgICAgPHRkPntpLmFtb3VudH08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAucm93Q2xhc3MgLCB0ZHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0ciB0ZCB7XG4gICAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICAgICAgKVxuICAgICAgIH0pIDogPHA+TG9hZGluZyAuLi48L3A+XG5cbiByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVEaXZcIj5cbiAgICAgICA8dGFibGU+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgIDx0aD5UcmFuc2FjdGlvbiBJRDwvdGg+XG4gICAgICAgICAgIDx0aD5Vc2VyIE5hbWU8L3RoPlxuICAgICAgICAgICA8dGg+UGF5bWVudCBNb2RlPC90aD5cbiAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XG4gICAgICAgICA8L3RyPlxuICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICB7dERhdGF9XG4gICAgICAgICA8L3Rib2R5PlxuICAgICAgIDwvdGFibGU+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIFxuXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICBmb250LXNpemU6IDEycHg7XG4gICAgIHdpZHRoOiAxMDAlO1xufVxuICB0Ym9keXtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgb3ZlcmZsb3cteTphdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgdGJvZHksdHIsdGR7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgfVxuICB0Ym9keVxuICAgIHRke1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgICB9XG4gIFxuICB0aGVhZCB7XG4gICAgdHJcbiAgICAgIHRoXG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICAgICBib3JkZXItY29sb3I6I2U2N2UyMjtcbiAgICAgIH1cbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMjd2dztcbiAgICAgICAgIH1cbiAgICAgICAgIC50YWJsZURpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICBcbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG5cbi8vIHRhYmxlLCB0aCwgdGQge1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuLy8gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuLy8gICBiYWNrZ3JvdW5kOiAjY2NjO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vICB0aCB7XG4vLyAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDEwMTAxO1xuLy8gIH1cbi8vICB0Ym9keSB7XG4vLyAgIG92ZXJmbG93LXg6IGF1dG87XG4vLyAgfVxuLy8gdGgsIHRkIHtcbi8vICAgcGFkZGluZzogNXB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyB9XG4vLyAgIC5yb3dDbGFzc3tcbi8vICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4vLyAgcGFkZGluZzogNXB4O1xuLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLy8gLnRhYmxlRGl2IHtcbi8vICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gICB3aWR0aDogNzUlO1xuLy8gICBwYWRkaW5nOiAyMXB4O1xuLy8gICBtYXJnaW4tdG9wOiAxNXB4O1xuLy8gICBoZWlnaHQ6IDllbTtcbi8vIH0iXX0= */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Table); // table, th, td {
//   border: 1px solid #7a7a7a;
//   border-collapse: collapse;
//   background: #ccc;
//   font-weight: normal;
//   font-family: sans-serif;
//   font-size: 12px;
//   width: 100%;
// }
//  th {
//   border-bottom: 2px solid #010101;
//  }
//  tbody {
//   overflow-x: auto;
//  }
// th, td {
//   padding: 5px;
//   text-align: center;
//   width: 25%;
// }
//   .rowClass{
//  border: 1px solid #000 !important;
//  padding: 5px;
//  text-align: center;
// }
// .tableDiv {
//   background: #d9d8d9;
//   margin: auto;
//   width: 75%;
//   padding: 21px;
//   margin-top: 15px;
//   height: 9em;
// }

/***/ })

})
//# sourceMappingURL=0.abc81500b7f548b68c6f.hot-update.js.map