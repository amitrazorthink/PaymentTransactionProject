webpackHotUpdate(0,{

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");











var data = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '15'],
  datasets: [{
    label: 'American Express',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(15,152,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,92,102,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(15,102,122,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [75, 9, 20, 31, 66, 75, 20]
  }, {
    label: 'VISA',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [75, 9, 20, 31, 66, 75, 20]
  }, {
    label: 'DBS PayLA',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [5, 69, 10, 31, 66, 25, 20]
  }]
}; // console.log("this.graphData", this.graphData)

var Chart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Chart, _Component);

  function Chart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Chart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Chart).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "fetchTransaction", function () {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state, {
        isFetching: true
      }));

      fetch('http://localhost:3000/rest/transactions').then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this.setState({
          transData: result,
          isFetching: false
        });
      }).catch(function (e) {
        return console.log(e);
      });
    });

    _this.state = {
      transData: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Chart, [{
    key: "render",
    value: function render() {
      var transData = this.state.transData;
      var data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '15'],
        datasets: [{
          label: 'American Express',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(15,152,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,92,102,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(15,102,122,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: transData && transData.filter(function (i) {
            return i.paymentMode === "DBS PayLa";
          }).map(function (i) {
            return i.amount;
          })
        }, {
          label: 'VISA',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: transData && transData.filter(function (i) {
            return i.paymentMode === "VISA";
          }).map(function (i) {
            return i.amount;
          })
        }, {
          label: 'DBS PayLA',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: transData && transData.filter(function (i) {
            return i.paymentMode === "American Express";
          }).map(function (i) {
            return i.amount;
          })
        }]
      };
      console.log("this.graphData", this.graphData); //   this.graphData = transData;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1487134566" + " " + "chartRow"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "jsx-1487134566"
      }, "Transactions Graph"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Line"], {
        ref: "chart",
        data: data
      }), ")} />", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1487134566"
      }, ".chartRow.jsx-1487134566{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;height:42vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlLb0IsQUFJZ0MsbUJBQ1AsWUFDRixVQUNHLGFBQ0csZ0JBQ0osWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzE1J10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdBbWVyaWNhbiBFeHByZXNzJyxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsMTUyLDE5MiwwLjQpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDkyLDEwMiwxKScsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgxNSwxMDIsMTIyLDEpJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICBkYXRhOiBbNzUsIDksIDIwLCAzMSwgNjYsIDc1LCAyMF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVklTQScsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgIGRhdGE6IFs3NSwgOSwgMjAsIDMxLCA2NiwgNzUsIDIwXVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0RCUyBQYXlMQScsXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgIGRhdGE6IFs1LCA2OSwgMTAsIDMxLCA2NiwgMjUsIDIwXVxuICAgICAgfVxuICBdXG59O1xuLy8gY29uc29sZS5sb2coXCJ0aGlzLmdyYXBoRGF0YVwiLCB0aGlzLmdyYXBoRGF0YSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdHJhbnNEYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfSAgXG4gICAgICBcbiAgICAgIFxuIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHRyYW5zRGF0YVxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFiZWxzOiBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcxNSddLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQW1lcmljYW4gRXhwcmVzcycsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE1LDE1MiwxOTIsMC40KScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSw5MiwxMDIsMSknLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsMTAyLDEyMiwxKScsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgZGF0YToodHJhbnNEYXRhICYmIHRyYW5zRGF0YS5maWx0ZXIoaSA9PiBpLnBheW1lbnRNb2RlID09PSBcIkRCUyBQYXlMYVwiKS5tYXAoaSA9PiBpLmFtb3VudCkpIFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdWSVNBJyxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgZGF0YToodHJhbnNEYXRhICYmIHRyYW5zRGF0YS5maWx0ZXIoaSA9PiBpLnBheW1lbnRNb2RlID09PSBcIlZJU0FcIikubWFwKGkgPT4gaS5hbW91bnQpKSBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdEQlMgUGF5TEEnLFxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICBkYXRhOih0cmFuc0RhdGEgJiYgdHJhbnNEYXRhLmZpbHRlcihpID0+IGkucGF5bWVudE1vZGUgPT09IFwiQW1lcmljYW4gRXhwcmVzc1wiKS5tYXAoaSA9PiBpLmFtb3VudCkpIFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuXG5cblxuXG5jb25zb2xlLmxvZyhcInRoaXMuZ3JhcGhEYXRhXCIsIHRoaXMuZ3JhcGhEYXRhKVxuICAgIC8vICAgdGhpcy5ncmFwaERhdGEgPSB0cmFuc0RhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRSb3dcIj5cbiAgICAgICAgPGgyPlRyYW5zYWN0aW9ucyBHcmFwaDwvaDI+XG4gICAgICAgIDxMaW5lIHJlZj1cImNoYXJ0XCIgZGF0YT17ZGF0YX0vPlxuICAgICAgICB7LyogPExpbmUgcmVmPVwiY2hhcnRcIiBkYXRhPXt0cmFuc0RhdGEubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlLnBheW1lbnRNb2RlID09PSBcIkRCUyBQYXlMYVwiKXtcbiAgICAgICAgICAgICAgICBkYXRhID0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKi99XG4gICAgICAgICAgICApfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIFxuICAgICAgICAuY2hhcnRSb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDJ2dztcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4vLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgY29uc3QgYWJjID0gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVzdC90cmFuc2FjdGlvbnMnKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICBjb25zb2xlLmxvZygnQkFDJywgYWJjKTtcblxuLy8gICAgIC8vIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSkpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIGluIGNoYXJ0JywgdGhpcy5zdGF0ZS5kYXRhKTtcbi8vICAgICBjb25zdCB7IGRhdGFzZXRzIH0gPSB0aGlzLnJlZnMuY2hhcnQuY2hhcnRJbnN0YW5jZS5kYXRhXG4vLyAgICAgY29uc29sZS5sb2coZGF0YXNldHNbMF0uZGF0YSk7XG4vLyAgIH1cblxuZmV0Y2hUcmFuc2FjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBpc0ZldGNoaW5nOiB0cnVlfSlcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jlc3QvdHJhbnNhY3Rpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB0aGlzLnNldFN0YXRlKHt0cmFuc0RhdGE6IHJlc3VsdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2V9KSlcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRyYW5zYWN0aW9uKClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Chart.js */"));
    } //   componentDidMount() {
    //    const abc =  fetch('http://localhost:3000/rest/transactions')
    //     .then(response => response.json())
    //     console.log('BAC', abc);
    //     // .then(data => this.setState({ data }));
    //     console.log('data in chart', this.state.data);
    //     const { datasets } = this.refs.chart.chartInstance.data
    //     console.log(datasets[0].data);
    //   }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTransaction();
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=0.e24da1f76b6184a91689.hot-update.js.map