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










 // const data = {
//   labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '15'],
//   datasets: [
//     {
//       label: 'American Express',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(15,152,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,92,102,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(15,102,122,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: transData.map(item => item.amount)
//     },
//     {
//       label: 'VISA',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [75, 9, 20, 31, 66, 75, 20]
//     },
//     {
//         label: 'DBS PayLA',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [5, 69, 10, 31, 66, 25, 20]
//       }
//   ]
// };

console.log("this.graphData", undefined.graphData);

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
      }, ".chartRow.jsx-1487134566{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;height:42vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFJZ0MsbUJBQ1AsWUFDRixVQUNHLGFBQ0csZ0JBQ0osWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG4vLyBjb25zdCBkYXRhID0ge1xuLy8gICBsYWJlbHM6IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzE1J10sXG4vLyAgIGRhdGFzZXRzOiBbXG4vLyAgICAge1xuLy8gICAgICAgbGFiZWw6ICdBbWVyaWNhbiBFeHByZXNzJyxcbi8vICAgICAgIGZpbGw6IGZhbHNlLFxuLy8gICAgICAgbGluZVRlbnNpb246IDAuMSxcbi8vICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUsMTUyLDE5MiwwLjQpJyxcbi8vICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbi8vICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4vLyAgICAgICBib3JkZXJEYXNoOiBbXSxcbi8vICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbi8vICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbi8vICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDkyLDEwMiwxKScsXG4vLyAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuLy8gICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbi8vICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4vLyAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgxNSwxMDIsMTIyLDEpJyxcbi8vICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuLy8gICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuLy8gICAgICAgcG9pbnRSYWRpdXM6IDEsXG4vLyAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4vLyAgICAgICBkYXRhOiB0cmFuc0RhdGEubWFwKGl0ZW0gPT4gaXRlbS5hbW91bnQpXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBsYWJlbDogJ1ZJU0EnLFxuLy8gICAgICAgZmlsbDogZmFsc2UsXG4vLyAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuLy8gICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxuLy8gICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuLy8gICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0Jyxcbi8vICAgICAgIGJvcmRlckRhc2g6IFtdLFxuLy8gICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuLy8gICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuLy8gICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4vLyAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuLy8gICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbi8vICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4vLyAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbi8vICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuLy8gICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuLy8gICAgICAgcG9pbnRSYWRpdXM6IDEsXG4vLyAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4vLyAgICAgICBkYXRhOiBbNzUsIDksIDIwLCAzMSwgNjYsIDc1LCAyMF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgICAgbGFiZWw6ICdEQlMgUGF5TEEnLFxuLy8gICAgICAgICBmaWxsOiBmYWxzZSxcbi8vICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbi8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDAuNCknLFxuLy8gICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4vLyAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4vLyAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuLy8gICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4vLyAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbi8vICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4vLyAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4vLyAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4vLyAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4vLyAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuLy8gICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbi8vICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuLy8gICAgICAgICBwb2ludFJhZGl1czogMSxcbi8vICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuLy8gICAgICAgICBkYXRhOiBbNSwgNjksIDEwLCAzMSwgNjYsIDI1LCAyMF1cbi8vICAgICAgIH1cbi8vICAgXVxuLy8gfTtcbmNvbnNvbGUubG9nKFwidGhpcy5ncmFwaERhdGFcIiwgdGhpcy5ncmFwaERhdGEpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHRyYW5zRGF0YTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIH0gIFxuICAgICAgXG4gXG4gICAgICBcbiByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgICB0cmFuc0RhdGFcbiAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgdGhpcy5ncmFwaERhdGEgPSB0cmFuc0RhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRSb3dcIj5cbiAgICAgICAgPGgyPlRyYW5zYWN0aW9ucyBHcmFwaDwvaDI+XG4gICAgICAgIDxMaW5lIHJlZj1cImNoYXJ0XCIgZGF0YT17ZGF0YX0vPlxuICAgICAgICB7LyogPExpbmUgcmVmPVwiY2hhcnRcIiBkYXRhPXt0cmFuc0RhdGEubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlLnBheW1lbnRNb2RlID09PSBcIkRCUyBQYXlMYVwiKXtcbiAgICAgICAgICAgICAgICBkYXRhID0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKi99XG4gICAgICAgICAgICApfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIFxuICAgICAgICAuY2hhcnRSb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDJ2dztcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4vLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgY29uc3QgYWJjID0gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVzdC90cmFuc2FjdGlvbnMnKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICBjb25zb2xlLmxvZygnQkFDJywgYWJjKTtcblxuLy8gICAgIC8vIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSkpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIGluIGNoYXJ0JywgdGhpcy5zdGF0ZS5kYXRhKTtcbi8vICAgICBjb25zdCB7IGRhdGFzZXRzIH0gPSB0aGlzLnJlZnMuY2hhcnQuY2hhcnRJbnN0YW5jZS5kYXRhXG4vLyAgICAgY29uc29sZS5sb2coZGF0YXNldHNbMF0uZGF0YSk7XG4vLyAgIH1cblxuZmV0Y2hUcmFuc2FjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBpc0ZldGNoaW5nOiB0cnVlfSlcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jlc3QvdHJhbnNhY3Rpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB0aGlzLnNldFN0YXRlKHt0cmFuc0RhdGE6IHJlc3VsdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2V9KSlcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRyYW5zYWN0aW9uKClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Chart.js */"));
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
//# sourceMappingURL=0.aeec83b8bd564c578fa2.hot-update.js.map