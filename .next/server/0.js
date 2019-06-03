exports.ids = [0];
exports.modules = {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__);











var data = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
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
          label: 'DBS PayLA',
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
          label: 'American Express',
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
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1487134566"
      }, ".chartRow.jsx-1487134566{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;height:42vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Lb0IsQUFJZ0MsbUJBQ1AsWUFDRixVQUNHLGFBQ0csZ0JBQ0osWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsJzE3JywgJzE4JywgJzE5JywgJzIwJ10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdBbWVyaWNhbiBFeHByZXNzJyxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsMTUyLDE5MiwwLjQpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDkyLDEwMiwxKScsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgxNSwxMDIsMTIyLDEpJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICBkYXRhOiBbNzUsIDksIDIwLCAzMSwgNjYsIDc1LCAyMF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVklTQScsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgIGRhdGE6IFs3NSwgOSwgMjAsIDMxLCA2NiwgNzUsIDIwXVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0RCUyBQYXlMQScsXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgIGRhdGE6IFs1LCA2OSwgMTAsIDMxLCA2NiwgMjUsIDIwXVxuICAgICAgfVxuICBdXG59O1xuLy8gY29uc29sZS5sb2coXCJ0aGlzLmdyYXBoRGF0YVwiLCB0aGlzLmdyYXBoRGF0YSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdHJhbnNEYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfSAgXG4gICAgICBcbiAgICAgIFxuIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHRyYW5zRGF0YVxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFiZWxzOiBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcxNSddLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnREJTIFBheUxBJyxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsMTUyLDE5MiwwLjQpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDkyLDEwMiwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgxNSwxMDIsMTIyLDEpJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgICAgICBkYXRhOih0cmFuc0RhdGEgJiYgdHJhbnNEYXRhLmZpbHRlcihpID0+IGkucGF5bWVudE1vZGUgPT09IFwiREJTIFBheUxhXCIpLm1hcChpID0+IGkuYW1vdW50KSkgXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1ZJU0EnLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgICAgICBkYXRhOih0cmFuc0RhdGEgJiYgdHJhbnNEYXRhLmZpbHRlcihpID0+IGkucGF5bWVudE1vZGUgPT09IFwiVklTQVwiKS5tYXAoaSA9PiBpLmFtb3VudCkpIFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ0FtZXJpY2FuIEV4cHJlc3MnLFxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICBkYXRhOih0cmFuc0RhdGEgJiYgdHJhbnNEYXRhLmZpbHRlcihpID0+IGkucGF5bWVudE1vZGUgPT09IFwiQW1lcmljYW4gRXhwcmVzc1wiKS5tYXAoaSA9PiBpLmFtb3VudCkpIFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuXG5cblxuXG5jb25zb2xlLmxvZyhcInRoaXMuZ3JhcGhEYXRhXCIsIHRoaXMuZ3JhcGhEYXRhKVxuICAgIC8vICAgdGhpcy5ncmFwaERhdGEgPSB0cmFuc0RhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRSb3dcIj5cbiAgICAgICAgPGgyPlRyYW5zYWN0aW9ucyBHcmFwaDwvaDI+XG4gICAgICAgIDxMaW5lIHJlZj1cImNoYXJ0XCIgZGF0YT17ZGF0YX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIFxuICAgICAgICAuY2hhcnRSb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDJ2dztcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4vLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgY29uc3QgYWJjID0gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVzdC90cmFuc2FjdGlvbnMnKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICBjb25zb2xlLmxvZygnQkFDJywgYWJjKTtcblxuLy8gICAgIC8vIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSkpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIGluIGNoYXJ0JywgdGhpcy5zdGF0ZS5kYXRhKTtcbi8vICAgICBjb25zdCB7IGRhdGFzZXRzIH0gPSB0aGlzLnJlZnMuY2hhcnQuY2hhcnRJbnN0YW5jZS5kYXRhXG4vLyAgICAgY29uc29sZS5sb2coZGF0YXNldHNbMF0uZGF0YSk7XG4vLyAgIH1cblxuZmV0Y2hUcmFuc2FjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBpc0ZldGNoaW5nOiB0cnVlfSlcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jlc3QvdHJhbnNhY3Rpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB0aGlzLnNldFN0YXRlKHt0cmFuc0RhdGE6IHJlc3VsdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2V9KSlcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRyYW5zYWN0aW9uKClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Chart.js */"));
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



/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      if (this.props.fullscreen) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "2271804530"
        }, ".circle-loader{position:absolute;top:50%;left:50%;width:50%;z-index:100;text-align:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.circle-loader .circle{fill:transparent;stroke:rgba(0,0,0,0.2);stroke-width:4px;-webkit-animation:dash 2s ease infinite,rotate 2s linear infinite;animation:dash 2s ease infinite,rotate 2s linear infinite;}@-webkit-keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}@keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0xvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPNkIsQUFHaUMsQUFTRCxBQU9PLEFBSUMsQUFJQSxBQUtDLEFBQ0ksaUJBcEJQLENBVGYsSUFnQmMsQ0FJRSxBQUlBLEdBdkJmLFNBQ0MsS0FRTyxFQU9qQixHQWRZLEFBa0JaLEFBSUEsWUFyQmtCLEFBT3lDLGtCQU4zQixNQXVCTCxNQUNJLDZGQXZCakMsQ0FNQSIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZ1bGxzY3JlZW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLmNpcmNsZS1sb2FkZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaXJjbGUtbG9hZGVyIC5jaXJjbGUge1xuICAgICAgICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgc3Ryb2tlOiByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgICAgICAgICAgICBhbmltYXRpb246IGRhc2ggMnMgZWFzZSBpbmZpbml0ZSwgcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZGFzaCB7XG4gICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxLDk1O1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODUsOTU7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0yNTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4NSw5NTtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTkzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgICAgICAgIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZS1sb2FkZXJcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiY2lyY2xlXCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjMwXCIgY3k9XCIzMFwiIHI9XCIxNVwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAuY2lyY2xlLWxvYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LWNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2lyY2xlLWxvYWRlciAuY2lyY2xlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIHN0cm9rZTogcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDJzIGVhc2UgaW5maW5pdGUsIHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGRhc2gge1xuICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSw5NTtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg1LDk1O1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODUsOTU7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC05MztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgICAgICAgICAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUtbG9hZGVyXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImNpcmNsZVwiIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIzMFwiIGN5PVwiMzBcIiByPVwiMTVcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApXG4gICAgfVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Loader.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-2271804530" + " " + "circle-loader"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
          width: "60",
          height: "60",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "jsx-2271804530" + " " + "circle"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
          cx: "30",
          cy: "30",
          r: "15",
          className: "jsx-2271804530"
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "1470534316"
        }, ".circle-loader{display:block;text-center;padding-left:50%;}.circle-loader .circle{position:relative;left:-30px;fill:transparent;stroke:rgba(0,0,0,0.2);stroke-width:4px;-webkit-animation:dash 2s ease infinite,rotate 2s linear infinite;animation:dash 2s ease infinite,rotate 2s linear infinite;}@-webkit-keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}@keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0xvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDZCLEFBRzZCLEFBS0ksQUFTTSxBQUlDLEFBSUEsQUFLQyxBQUNJLGNBM0JuQixJQUtBLElBU1csQ0FJRSxBQUlBLEdBckJQLEdBS0EsYUFTakIsQ0FiRixFQWlCRSxBQUlBLENBaEJ1Qix1QkFDTixZQWtCVSxLQWpCZ0MsQ0FrQjVCLDJIQWpCakMiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mdWxsc2NyZWVuKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC5jaXJjbGUtbG9hZGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2lyY2xlLWxvYWRlciAuY2lyY2xlIHtcbiAgICAgICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIHN0cm9rZTogcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDJzIGVhc2UgaW5maW5pdGUsIHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGRhc2gge1xuICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSw5NTtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg1LDk1O1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODUsOTU7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC05MztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgICAgICAgICAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUtbG9hZGVyXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImNpcmNsZVwiIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIzMFwiIGN5PVwiMzBcIiByPVwiMTVcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgLmNpcmNsZS1sb2FkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1jZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNpcmNsZS1sb2FkZXIgLmNpcmNsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBzdHJva2U6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZGFzaCAycyBlYXNlIGluZmluaXRlLCByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBkYXNoIHtcbiAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsOTU7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4NSw5NTtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTI1O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg1LDk1O1xuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtOTM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgICAgICAgICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAgIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlLWxvYWRlclwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJjaXJjbGVcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMzBcIiBjeT1cIjMwXCIgcj1cIjE1XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKVxuICAgIH1cbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Loader.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-1470534316" + " " + "circle-loader"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
          width: "60",
          height: "60",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "jsx-1470534316" + " " + "circle"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
          cx: "30",
          cy: "30",
          r: "15",
          className: "jsx-1470534316"
        }))));
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/RadioButton.js":
/*!***********************************!*\
  !*** ./components/RadioButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var RadioButton = function RadioButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    value: "option1",
    onClick: function onClick() {
      props.onClickHandler(props.name);
    }
  }), " ", props.name);
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButton);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");




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
    }, ".rowClass.jsx-1302621058,td.jsx-1302621058{border:1px solid #000 !important;padding:5px;text-align:center;}tr.jsx-1302621058 td.jsx-1302621058{width:27vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IsQUFHOEMsQUFLeEIsV0FDYixzQkFMZ0IsWUFDTSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcic7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcyBpbiBUYWJsZScsIHByb3BzKTtcbiAgY29uc3QgdGFibGVEYXRhID0gcHJvcHMuZGF0YTtcbiAgY29uc29sZS5sb2coJ3RhYmxlRHRhJywgdGFibGVEYXRhKTtcbiAgLy8gY29uc29sZS5sb2coJ3RhYmxlRHRhJywgdGFibGVEYXRhLmxlbmd0aCk7XG5cblxuICBjb25zdCB0RGF0YSA9ICh0YWJsZURhdGEgJiYgdGFibGVEYXRhLmxlbmd0aCkgP1xuICAgIHRhYmxlRGF0YS5tYXAoaSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgPHRyIGNsYXNzTmFtZT1cInJvd0NsYXNzXCI+XG4gICAgICAgIDx0ZD57aS50cmFuc2FjdGlvbklkfTwvdGQ+XG4gICAgICAgIDx0ZD57aS51c2VyTmFtZX08L3RkPlxuICAgICAgICA8dGQ+e2kucGF5bWVudE1vZGV9PC90ZD5cbiAgICAgICAgPHRkPntpLmFtb3VudH08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAucm93Q2xhc3MgLCB0ZHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0ciB0ZCB7XG4gICAgICAgICAgd2lkdGg6IDI3dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICAgICAgKVxuICAgICAgIH0pIDogPHA+TG9hZGluZyAuLi48L3A+XG5cbiByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVEaXZcIj5cbiAgICAgICA8dGFibGU+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgIDx0aD5UcmFuc2FjdGlvbiBJRDwvdGg+XG4gICAgICAgICAgIDx0aD5Vc2VyIE5hbWU8L3RoPlxuICAgICAgICAgICA8dGg+UGF5bWVudCBNb2RlPC90aD5cbiAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XG4gICAgICAgICA8L3RyPlxuICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICB7dERhdGF9XG4gICAgICAgICA8L3Rib2R5PlxuICAgICAgIDwvdGFibGU+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIFxuXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICBmb250LXNpemU6IDEycHg7XG4gICAgIHdpZHRoOiAxMDAlO1xufVxuICB0Ym9keXtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgb3ZlcmZsb3cteTphdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgdGJvZHksdHIsdGR7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgfVxuICB0Ym9keVxuICAgIHRke1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgICB9XG4gIFxuICB0aGVhZCB7XG4gICAgdHJcbiAgICAgIHRoXG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjtcbiAgICAgICBib3JkZXItY29sb3I6I2U2N2UyMjtcbiAgICAgIH1cbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMjd2dztcbiAgICAgICAgIH1cbiAgICAgICAgIC50YWJsZURpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICBcbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG5cbi8vIHRhYmxlLCB0aCwgdGQge1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuLy8gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuLy8gICBiYWNrZ3JvdW5kOiAjY2NjO1xuLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vICB0aCB7XG4vLyAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDEwMTAxO1xuLy8gIH1cbi8vICB0Ym9keSB7XG4vLyAgIG92ZXJmbG93LXg6IGF1dG87XG4vLyAgfVxuLy8gdGgsIHRkIHtcbi8vICAgcGFkZGluZzogNXB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyB9XG4vLyAgIC5yb3dDbGFzc3tcbi8vICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG4vLyAgcGFkZGluZzogNXB4O1xuLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLy8gLnRhYmxlRGl2IHtcbi8vICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gICB3aWR0aDogNzUlO1xuLy8gICBwYWRkaW5nOiAyMXB4O1xuLy8gICBtYXJnaW4tdG9wOiAxNXB4O1xuLy8gICBoZWlnaHQ6IDllbTtcbi8vIH0iXX0= */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
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
  }, "table.jsx-1747567201{width:100%;border:1px solid #7a7a7a;background-color:#f3f3f3;border-collapse:collapse;background:#ccc;font-weight:normal;font-family:sans-serif;font-size:12px;width:100%;}tbody.jsx-1747567201{height:200px;overflow-y:auto;width:100%;}tbody.jsx-1747567201,tr.jsx-1747567201,td.jsx-1747567201{display:inline-block;border:1px solid #7a7a7a;}tbody.jsx-1747567201 td.jsx-1747567201{float:left;}thead.jsx-1747567201{tr th float:left;background-color:#f39c12;border-color:#e67e22;}th.jsx-1747567201,td.jsx-1747567201{padding:5px;text-align:center;width:27vw;}.tableDiv.jsx-1747567201{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEbUIsQUFLYyxBQVdHLEFBS1EsQUFLUixBQU1FLEFBS0UsQUFLUyxXQXBDRixBQXFCdkIsQ0FXc0IsQ0FyQlAsSUFnQmEsRUFVVixFQXJCTyxRQUpkLENBcUJJLENBS0MsS0FyQ08sSUFZdkIsQ0FxQkssQUFLYyxDQVhJLElBWHpCLFFBdUJ3QixPQXRDQyxFQTJCckIsT0FZRSxnQkF0Q1UsZ0JBQ0ssbUJBQ0ssdUJBQ1YsZUFDRixXQUNoQiIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9UYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcblxuZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcbiAgY29uc29sZS5sb2coJ3Byb3BzIGluIFRhYmxlJywgcHJvcHMpO1xuICBjb25zdCB0YWJsZURhdGEgPSBwcm9wcy5kYXRhO1xuICBjb25zb2xlLmxvZygndGFibGVEdGEnLCB0YWJsZURhdGEpO1xuICAvLyBjb25zb2xlLmxvZygndGFibGVEdGEnLCB0YWJsZURhdGEubGVuZ3RoKTtcblxuXG4gIGNvbnN0IHREYXRhID0gKHRhYmxlRGF0YSAmJiB0YWJsZURhdGEubGVuZ3RoKSA/XG4gICAgdGFibGVEYXRhLm1hcChpID0+IHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93Q2xhc3NcIj5cbiAgICAgICAgPHRkPntpLnRyYW5zYWN0aW9uSWR9PC90ZD5cbiAgICAgICAgPHRkPntpLnVzZXJOYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD57aS5wYXltZW50TW9kZX08L3RkPlxuICAgICAgICA8dGQ+e2kuYW1vdW50fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgIC5yb3dDbGFzcyAsIHRke1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHRyIHRkIHtcbiAgICAgICAgICB3aWR0aDogMjd2dztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgICAgICApXG4gICAgICAgfSkgOiA8cD5Mb2FkaW5nIC4uLjwvcD5cblxuIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZURpdlwiPlxuICAgICAgIDx0YWJsZT5cbiAgICAgICAgIDx0cj5cbiAgICAgICAgICAgPHRoPlRyYW5zYWN0aW9uIElEPC90aD5cbiAgICAgICAgICAgPHRoPlVzZXIgTmFtZTwvdGg+XG4gICAgICAgICAgIDx0aD5QYXltZW50IE1vZGU8L3RoPlxuICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cbiAgICAgICAgIDwvdHI+XG4gICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgIHt0RGF0YX1cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgPC90YWJsZT5cbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgXG5cbnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgd2lkdGg6IDEwMCU7XG59XG4gIHRib2R5e1xuICAgIGhlaWdodDoyMDBweDtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB0Ym9keSx0cix0ZHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICB9XG4gIHRib2R5XG4gICAgdGR7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgIH1cbiAgXG4gIHRoZWFkIHtcbiAgICB0clxuICAgICAgdGhcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyO1xuICAgICAgIGJvcmRlci1jb2xvcjojZTY3ZTIyO1xuICAgICAgfVxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyN3Z3O1xuICAgICAgICAgfVxuICAgICAgICAgLnRhYmxlRGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDlkOGQ5O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIHBhZGRpbmc6IDIxcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgIFxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcblxuLy8gdGFibGUsIHRoLCB0ZCB7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTdhN2E7XG4vLyAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyAgIGJhY2tncm91bmQ6ICNjY2M7XG4vLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuLy8gIHRoIHtcbi8vICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMTAxMDE7XG4vLyAgfVxuLy8gIHRib2R5IHtcbi8vICAgb3ZlcmZsb3cteDogYXV0bztcbi8vICB9XG4vLyB0aCwgdGQge1xuLy8gICBwYWRkaW5nOiA1cHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgd2lkdGg6IDI1JTtcbi8vIH1cbi8vICAgLnJvd0NsYXNze1xuLy8gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbi8vICBwYWRkaW5nOiA1cHg7XG4vLyAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4vLyAudGFibGVEaXYge1xuLy8gICBiYWNrZ3JvdW5kOiAjZDlkOGQ5O1xuLy8gICBtYXJnaW46IGF1dG87XG4vLyAgIHdpZHRoOiA3NSU7XG4vLyAgIHBhZGRpbmc6IDIxcHg7XG4vLyAgIG1hcmdpbi10b3A6IDE1cHg7XG4vLyAgIGhlaWdodDogOWVtO1xuLy8gfSJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Table.js */"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
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

/***/ }),

/***/ "./components/UserButton.js":
/*!**********************************!*\
  !*** ./components/UserButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var UserButton = function UserButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      props.onClickHandler(props.name);
    },
    className: "jsx-472196841"
  }, props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "472196841"
  }, "button.jsx-472196841{display:block;padding:9px;margin-bottom:3%;}button.jsx-472196841:active,button.jsx-472196841:focus{border:2px solid red;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL1VzZXJCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3VCLEFBS08sY0FKVCxPQUtDLEtBSkEsUUFLakIsU0FKRSIsImZpbGUiOiIvVXNlcnMvYW1pdGhrdW1hci93aXRoLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9Vc2VyQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBVc2VyQnV0dG9uID0gKHByb3BzKSA9PiAoXG4gIDw+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9uQ2xpY2tIYW5kbGVyKHByb3BzLm5hbWUpIH19Pntwcm9wcy5uYW1lfTwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cblxuICApXG4gIGV4cG9ydCBkZWZhdWx0IFVzZXJCdXR0b247Il19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/UserButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserButton);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./selector.js":
/*!*********************!*\
  !*** ./selector.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var selectExamplePage = function selectExamplePage(state) {
  /** @namespace state.editPipeline */
  // const statePipeline = state.editPipeline;
  var stateTransactions = state.transactions;
  var isLoading = state.isLoading;
  return {
    transactions: stateTransactions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (selectExamplePage);

/***/ })

};;
//# sourceMappingURL=0.js.map