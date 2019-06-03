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
    }, ".rowClass.jsx-1302621058,td.jsx-1302621058{border:1px solid #000 !important;padding:5px;text-align:center;}tr.jsx-1302621058 td.jsx-1302621058{width:27vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHOEMsQUFLeEIsV0FDYixzQkFMZ0IsWUFDTSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICBjb25zb2xlLmxvZygncHJvcHMgaW4gVGFibGUnLCBwcm9wcyk7XG4gIGNvbnN0IHRhYmxlRGF0YSA9IHByb3BzLmRhdGE7XG4gIGNvbnNvbGUubG9nKCd0YWJsZUR0YScsIHRhYmxlRGF0YSk7XG4gIC8vIGNvbnNvbGUubG9nKCd0YWJsZUR0YScsIHRhYmxlRGF0YS5sZW5ndGgpO1xuXG5cbiAgY29uc3QgdERhdGEgPSAodGFibGVEYXRhICYmIHRhYmxlRGF0YS5sZW5ndGgpID9cbiAgICB0YWJsZURhdGEubWFwKGkgPT4ge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgIDx0ciBjbGFzc05hbWU9XCJyb3dDbGFzc1wiPlxuICAgICAgICA8dGQ+e2kudHJhbnNhY3Rpb25JZH08L3RkPlxuICAgICAgICA8dGQ+e2kudXNlck5hbWV9PC90ZD5cbiAgICAgICAgPHRkPntpLnBheW1lbnRNb2RlfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5hbW91bnR9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgLnJvd0NsYXNzICwgdGR7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHIgdGQge1xuICAgICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICAgICAgIClcbiAgICAgICB9KSA6IDxwPkxvYWRpbmcgLi4uPC9wPlxuXG4gcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlRGl2XCI+XG4gICAgICAgPHRhYmxlPlxuICAgICAgICAgPHRyPlxuICAgICAgICAgICA8dGg+VHJhbnNhY3Rpb24gSUQ8L3RoPlxuICAgICAgICAgICA8dGg+VXNlciBOYW1lPC90aD5cbiAgICAgICAgICAgPHRoPlBheW1lbnQgTW9kZTwvdGg+XG4gICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxuICAgICAgICAgPC90cj5cbiAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAge3REYXRhfVxuICAgICAgICAgPC90Ym9keT5cbiAgICAgICA8L3RhYmxlPlxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBcblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB3aWR0aDogMTAwJTtcbn1cbiAgdGJvZHl7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIHRib2R5LHRyLHRke1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIH1cbiAgdGJvZHlcbiAgICB0ZHtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgfVxuICBcbiAgdGhlYWQge1xuICAgIHRyXG4gICAgICB0aFxuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gICAgICAgYm9yZGVyLWNvbG9yOiNlNjdlMjI7XG4gICAgICB9XG4gICAgICB0aCwgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgICB9XG4gICAgICAgICAudGFibGVEaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgcGFkZGluZzogMjFweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgXG4gICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuXG4vLyBpbXBvcnQgUmVhY3RUYWJsZSBmcm9tIFwicmVhY3QtdGFibGVcIjtcbi8vIGltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL1BhZ2luYXRpb25cIjtcbi8vIGltcG9ydCBcInJlYWN0LXRhYmxlL3JlYWN0LXRhYmxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBUYWJsZSA9IHByb3BzID0+IChcbi8vICAgPFJlYWN0VGFibGVcbi8vICAgICBQYWdpbmF0aW9uQ29tcG9uZW50PXtQYWdpbmF0aW9ufVxuLy8gICAgIGRhdGE9e21ha2VEYXRhKCl9XG4vLyAgICAgY29sdW1ucz17W1xuLy8gICAgICAge1xuLy8gICAgICAgICBIZWFkZXI6IFwiVHJhbnNhY3Rpb24gSURcIixcbi8vICAgICAgICAgYWNjZXNzb3I6IFwidHJhbnNhY3Rpb25JZFwiLFxuLy8gICAgICAgICBtaW5XaWR0aDogMzAwXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBIZWFkZXI6IFwiVXNlciBOYW1lXCIsXG4vLyAgICAgICAgIGFjY2Vzc29yOiBcInVzZXJOYW1lXCIsXG4vLyAgICAgICAgIG1pbldpZHRoOiAzMDBcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIEhlYWRlcjogXCJQYXltZW50IE1vZGVcIixcbi8vICAgICAgICAgYWNjZXNzb3I6IFwicGF5bWVudE1vZGVcIixcbi8vICAgICAgICAgbWluV2lkdGg6IDMwMFxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgSGVhZGVyOiBcIkFtb3VudFwiLFxuLy8gICAgICAgICBhY2Nlc3NvcjogXCJhbW91bnRcIixcbi8vICAgICAgICAgbWluV2lkdGg6IDMwMFxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgSGVhZGVyOiBcIlZpc2l0c1wiLFxuLy8gICAgICAgICBhY2Nlc3NvcjogXCJ2aXNpdHNcIixcbi8vICAgICAgICAgbWluV2lkdGg6IDMwMFxuLy8gICAgICAgfVxuLy8gICAgIF19XG4vLyAgIC8+XG4vLyApO1xuXG4iXX0= */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
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
  }, "table.jsx-1747567201{width:100%;border:1px solid #7a7a7a;background-color:#f3f3f3;border-collapse:collapse;background:#ccc;font-weight:normal;font-family:sans-serif;font-size:12px;width:100%;}tbody.jsx-1747567201{height:200px;overflow-y:auto;width:100%;}tbody.jsx-1747567201,tr.jsx-1747567201,td.jsx-1747567201{display:inline-block;border:1px solid #7a7a7a;}tbody.jsx-1747567201 td.jsx-1747567201{float:left;}thead.jsx-1747567201{tr th float:left;background-color:#f39c12;border-color:#e67e22;}th.jsx-1747567201,td.jsx-1747567201{padding:5px;text-align:center;width:27vw;}.tableDiv.jsx-1747567201{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDbUIsQUFLYyxBQVdHLEFBS1EsQUFLUixBQU1FLEFBS0UsQUFLUyxXQXBDRixBQXFCdkIsQ0FXc0IsQ0FyQlAsSUFnQmEsRUFVVixFQXJCTyxRQUpkLENBcUJJLENBS0MsS0FyQ08sSUFZdkIsQ0FxQkssQUFLYyxDQVhJLElBWHpCLFFBdUJ3QixPQXRDQyxFQTJCckIsT0FZRSxnQkF0Q1UsZ0JBQ0ssbUJBQ0ssdUJBQ1YsZUFDRixXQUNoQiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcyBpbiBUYWJsZScsIHByb3BzKTtcbiAgY29uc3QgdGFibGVEYXRhID0gcHJvcHMuZGF0YTtcbiAgY29uc29sZS5sb2coJ3RhYmxlRHRhJywgdGFibGVEYXRhKTtcbiAgLy8gY29uc29sZS5sb2coJ3RhYmxlRHRhJywgdGFibGVEYXRhLmxlbmd0aCk7XG5cblxuICBjb25zdCB0RGF0YSA9ICh0YWJsZURhdGEgJiYgdGFibGVEYXRhLmxlbmd0aCkgP1xuICAgIHRhYmxlRGF0YS5tYXAoaSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgPHRyIGNsYXNzTmFtZT1cInJvd0NsYXNzXCI+XG4gICAgICAgIDx0ZD57aS50cmFuc2FjdGlvbklkfTwvdGQ+XG4gICAgICAgIDx0ZD57aS51c2VyTmFtZX08L3RkPlxuICAgICAgICA8dGQ+e2kucGF5bWVudE1vZGV9PC90ZD5cbiAgICAgICAgPHRkPntpLmFtb3VudH08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAucm93Q2xhc3MgLCB0ZHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0ciB0ZCB7XG4gICAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICAgICAgKVxuICAgICAgIH0pIDogPHA+TG9hZGluZyAuLi48L3A+XG5cbiByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVEaXZcIj5cbiAgICAgICA8dGFibGU+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgIDx0aD5UcmFuc2FjdGlvbiBJRDwvdGg+XG4gICAgICAgICAgIDx0aD5Vc2VyIE5hbWU8L3RoPlxuICAgICAgICAgICA8dGg+UGF5bWVudCBNb2RlPC90aD5cbiAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XG4gICAgICAgICA8L3RyPlxuICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICB7dERhdGF9XG4gICAgICAgICA8L3Rib2R5PlxuICAgICAgIDwvdGFibGU+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIFxuXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICBmb250LXNpemU6IDEycHg7XG4gICAgIHdpZHRoOiAxMDAlO1xufVxuICB0Ym9keXtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgb3ZlcmZsb3cteTphdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgdGJvZHksdHIsdGR7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgfVxuICB0Ym9keVxuICAgIHRke1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgICB9XG4gIFxuICB0aGVhZCB7XG4gICAgdHJcbiAgICAgIHRoXG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICAgICBib3JkZXItY29sb3I6I2U2N2UyMjtcbiAgICAgIH1cbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMjd2dztcbiAgICAgICAgIH1cbiAgICAgICAgIC50YWJsZURpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICBcbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG5cbi8vIGltcG9ydCBSZWFjdFRhYmxlIGZyb20gXCJyZWFjdC10YWJsZVwiO1xuLy8gaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vUGFnaW5hdGlvblwiO1xuLy8gaW1wb3J0IFwicmVhY3QtdGFibGUvcmVhY3QtdGFibGUuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuLy8gZXhwb3J0IGNvbnN0IFRhYmxlID0gcHJvcHMgPT4gKFxuLy8gICA8UmVhY3RUYWJsZVxuLy8gICAgIFBhZ2luYXRpb25Db21wb25lbnQ9e1BhZ2luYXRpb259XG4vLyAgICAgZGF0YT17bWFrZURhdGEoKX1cbi8vICAgICBjb2x1bW5zPXtbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIEhlYWRlcjogXCJUcmFuc2FjdGlvbiBJRFwiLFxuLy8gICAgICAgICBhY2Nlc3NvcjogXCJ0cmFuc2FjdGlvbklkXCIsXG4vLyAgICAgICAgIG1pbldpZHRoOiAzMDBcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIEhlYWRlcjogXCJVc2VyIE5hbWVcIixcbi8vICAgICAgICAgYWNjZXNzb3I6IFwidXNlck5hbWVcIixcbi8vICAgICAgICAgbWluV2lkdGg6IDMwMFxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgSGVhZGVyOiBcIlBheW1lbnQgTW9kZVwiLFxuLy8gICAgICAgICBhY2Nlc3NvcjogXCJwYXltZW50TW9kZVwiLFxuLy8gICAgICAgICBtaW5XaWR0aDogMzAwXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBIZWFkZXI6IFwiQW1vdW50XCIsXG4vLyAgICAgICAgIGFjY2Vzc29yOiBcImFtb3VudFwiLFxuLy8gICAgICAgICBtaW5XaWR0aDogMzAwXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBIZWFkZXI6IFwiVmlzaXRzXCIsXG4vLyAgICAgICAgIGFjY2Vzc29yOiBcInZpc2l0c1wiLFxuLy8gICAgICAgICBtaW5XaWR0aDogMzAwXG4vLyAgICAgICB9XG4vLyAgICAgXX1cbi8vICAgLz5cbi8vICk7XG5cbiJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Table); // import ReactTable from "react-table";
// import Pagination from "./Pagination";
// import "react-table/react-table.css";
// import "./styles.css";
// export const Table = props => (
//   <ReactTable
//     PaginationComponent={Pagination}
//     data={makeData()}
//     columns={[
//       {
//         Header: "Transaction ID",
//         accessor: "transactionId",
//         minWidth: 300
//       },
//       {
//         Header: "User Name",
//         accessor: "userName",
//         minWidth: 300
//       },
//       {
//         Header: "Payment Mode",
//         accessor: "paymentMode",
//         minWidth: 300
//       },
//       {
//         Header: "Amount",
//         accessor: "amount",
//         minWidth: 300
//       },
//       {
//         Header: "Visits",
//         accessor: "visits",
//         minWidth: 300
//       }
//     ]}
//   />
// );

/***/ }),

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
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
    className: "jsx-1387957062"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "jsx-1387957062"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1387957062" + " " + "formButton"
  }, btnName.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_UserButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: item.name,
      onClickHandler: function onClickHandler(name) {
        setUserName(name);
      }
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1387957062" + " " + "formButton radioPosition"
  }, radioBtn.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_RadioButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: item.name,
      onClickHandler: function onClickHandler(payment) {
        setPaymentMode(payment);
      },
      value: paymentMode
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1387957062" + " " + "submitButton"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "number",
    min: "1",
    max: "5000",
    value: amount,
    onChange: function onChange(e) {
      setAmount(e.target.value);
    },
    className: "jsx-1387957062" + " " + "inputValue"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "submit",
    value: "Transfer",
    className: "jsx-1387957062" + " " + "transferButton"
  }, "Transfer"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: props.transactions
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1387957062"
  }, "form.jsx-1387957062{background:#d9d8d9;margin:auto;width:75%;padding:21px;}.formButton.jsx-1387957062{width:33%;display:inline-block;}button.jsx-1387957062{display:block;}.radioPosition.jsx-1387957062{position:absolute;}.submitButton.jsx-1387957062{width:31%;display:inline-block;position:absolute;right:18%;top:15%;}.inputValue.jsx-1387957062{height:25px;width:200px;border:2px solid #e87c7c;}.transferButton.jsx-1387957062{padding:6px;background:#0076ff;color:#ffff;float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RyYW5zYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RndCLEFBRzhCLEFBTVQsQUFJSSxBQUdJLEFBR1IsQUFPRSxBQUtBLFVBckJTLEFBVUEsRUFPVCxBQUtPLEVBbEJyQixJQUdBLENBYk0sS0F3QnFCLE9BdkJ2QixBQU1KLEFBVW9CLEFBWU4sVUEzQlAsRUE0Qk8sTUFaRixBQU9aLEtBdEJBLENBNEJBLElBWlUsUUFDViIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UcmFuc2FjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckJ1dHRvbiBmcm9tIFwiLi9Vc2VyQnV0dG9uXCI7XG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSBcIi4vUmFkaW9CdXR0b25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIHtzYXZlVHJhbnNhY3Rpb24sIGdldFRyYW5zYWN0aW9ufSAgZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vVGFibGVcIjtcbmltcG9ydCBzZWxlY3RFeGFtcGxlUGFnZSBmcm9tIFwiLi4vc2VsZWN0b3JcIjtcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcblxuY29uc3QgYnRuTmFtZSA9IFt7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ1VTRVItQSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdVU0VSLUInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLCAgICBcbiAgICAgICAgICAgIG5hbWU6ICdVU0VSLUMnXG4gICAgICAgICAgICB9LFxuXTtcbmNvbnN0IHJhZGlvQnRuID0gW3tcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnQW1lcmljYW4gRXhwcmVzcydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdWSVNBJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6ICdEQlMgUGF5TGEnXG4gICAgICAgICAgICB9LFxuXTtcblxuZnVuY3Rpb24gRXhhbXBsZShwcm9wcykge1xuICAgIC8vIERlY2xhcmUgYSBuZXcgc3RhdGUgdmFyaWFibGVcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGF5bWVudE1vZGUsIHNldFBheW1lbnRNb2RlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuXG4gICAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgcHJvcHMuZGlzcGF0Y2goZ2V0VHJhbnNhY3Rpb24oKSk7XG4gICB9LCBbXSlcblxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9wcy5kaXNwYXRjaChzYXZlVHJhbnNhY3Rpb24oXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgICBwYXltZW50TW9kZSxcbiAgICAgICAgICBhbW91bnRcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICApO1xuICAgIHNldFBheW1lbnRNb2RlKCcnKTtcbiAgICBzZXRBbW91bnQoJycpO1xuICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CdXR0b25cIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJ0bk5hbWUubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuICA8VXNlckJ1dHRvbiBuYW1lPXtpdGVtLm5hbWV9IG9uQ2xpY2tIYW5kbGVyPXsobmFtZSkgPT4geyBzZXRVc2VyTmFtZShuYW1lKX19Lz5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQnV0dG9uIHJhZGlvUG9zaXRpb25cIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJhZGlvQnRuLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gIDxSYWRpb0J1dHRvbiBuYW1lPXtpdGVtLm5hbWV9IG9uQ2xpY2tIYW5kbGVyPXsocGF5bWVudCkgPT4geyBzZXRQYXltZW50TW9kZShwYXltZW50KX19IHZhbHVlPXtwYXltZW50TW9kZX0vPlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBtYXg9XCI1MDAwXCIgdmFsdWUgPSB7YW1vdW50fSBjbGFzc05hbWU9XCJpbnB1dFZhbHVlXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVHJhbnNmZXJcIiAgY2xhc3NOYW1lPVwidHJhbnNmZXJCdXR0b25cIj5UcmFuc2ZlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtwcm9wcy50cmFuc2FjdGlvbnN9Lz5cbiAgICAgICAgICAgIDxDaGFydC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMjFweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybUJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAucmFkaW9Qb3NpdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXRCdXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAzMSU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTglO1xuICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dFZhbHVlIHtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlODdjN2M7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5zZmVyQnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNzZmZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmY7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gc2VsZWN0RXhhbXBsZVBhZ2Uoc3RhdGUsIHByb3BzKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFeGFtcGxlKTtcbiJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Transactions.js */"));
}

var mapStateToProps = function mapStateToProps(state, props) {
  return Object(_selector__WEBPACK_IMPORTED_MODULE_8__["default"])(state, props);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Example));

/***/ })

})
//# sourceMappingURL=0.a28fe81fb937a0255de8.hot-update.js.map