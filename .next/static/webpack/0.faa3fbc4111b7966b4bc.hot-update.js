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
      console.log();
      var transData = this.state.transData;
      this.graphData = transData;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1487134566" + " " + "chartRow"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "jsx-1487134566"
      }, "Transactions Graph"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Line"], {
        ref: "chart",
        data: data
      }), ")} />", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1487134566"
      }, ".chartRow.jsx-1487134566{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;height:42vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFJZ0MsbUJBQ1AsWUFDRixVQUNHLGFBQ0csZ0JBQ0osWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzE1J10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdBbWVyaWNhbiBFeHByZXNzJyxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsMTUyLDE5MiwwLjQpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDkyLDEwMiwxKScsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgxNSwxMDIsMTIyLDEpJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICBkYXRhOiBbNzUsIDksIDIwLCAzMSwgNjYsIDc1LCAyMF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVklTQScsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMjAsMjIwLDIyMCwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgIGRhdGE6IFs3NSwgOSwgMjAsIDMxLCA2NiwgNzUsIDIwXVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0RCUyBQYXlMQScsXG4gICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMC40KScsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgIGRhdGE6IFs1LCA2OSwgMTAsIDMxLCA2NiwgMjUsIDIwXVxuICAgICAgfVxuICBdXG59O1xuLy8gY29uc29sZS5sb2coXCJ0aGlzLmdyYXBoRGF0YVwiLCB0aGlzLmdyYXBoRGF0YSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdHJhbnNEYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfSAgXG4gICAgICBcbiAgICAgIFxuIHJlbmRlcigpIHtcbiAgICAgY29uc29sZS5sb2coKVxuICAgIGNvbnN0IHtcbiAgICAgICAgdHJhbnNEYXRhXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRoaXMuZ3JhcGhEYXRhID0gdHJhbnNEYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0Um93XCI+XG4gICAgICAgIDxoMj5UcmFuc2FjdGlvbnMgR3JhcGg8L2gyPlxuICAgICAgICA8TGluZSByZWY9XCJjaGFydFwiIGRhdGE9e2RhdGF9Lz5cbiAgICAgICAgey8qIDxMaW5lIHJlZj1cImNoYXJ0XCIgZGF0YT17dHJhbnNEYXRhLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgaWYodHlwZS5wYXltZW50TW9kZSA9PT0gXCJEQlMgUGF5TGFcIil7XG4gICAgICAgICAgICAgICAgZGF0YSA9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9ICovfVxuICAgICAgICAgICAgKX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICBcbiAgICAgICAgLmNoYXJ0Um93IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ4ZDk7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgcGFkZGluZzogMjFweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQydnc7XG4gICAgICAgIH0gICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgIGNvbnN0IGFiYyA9ICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jlc3QvdHJhbnNhY3Rpb25zJylcbi8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgICAgY29uc29sZS5sb2coJ0JBQycsIGFiYyk7XG5cbi8vICAgICAvLyAudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pKTtcbi8vICAgICBjb25zb2xlLmxvZygnZGF0YSBpbiBjaGFydCcsIHRoaXMuc3RhdGUuZGF0YSk7XG4vLyAgICAgY29uc3QgeyBkYXRhc2V0cyB9ID0gdGhpcy5yZWZzLmNoYXJ0LmNoYXJ0SW5zdGFuY2UuZGF0YVxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGFzZXRzWzBdLmRhdGEpO1xuLy8gICB9XG5cbmZldGNoVHJhbnNhY3Rpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNGZXRjaGluZzogdHJ1ZX0pXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZXN0L3RyYW5zYWN0aW9ucycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXN1bHQgPT4gdGhpcy5zZXRTdGF0ZSh7dHJhbnNEYXRhOiByZXN1bHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlfSkpXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hUcmFuc2FjdGlvbigpXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Chart.js */"));
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
//# sourceMappingURL=0.faa3fbc4111b7966b4bc.hot-update.js.map