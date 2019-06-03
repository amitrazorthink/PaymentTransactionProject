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
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
        datasets: [{
          label: 'DBS PayLA',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(0,128,0)',
          borderColor: 'rgba(0,128,0)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: transData && transData.filter(function (i) {
            return i.paymentMode === "DBS PayLa";
          }).map(function (i) {
            return i.amount;
          })
        }, {
          label: 'VISA',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,165,0)',
          borderColor: 'rgba(255,165,0)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: transData && transData.filter(function (i) {
            return i.paymentMode === "VISA";
          }).map(function (i) {
            return i.amount;
          })
        }, {
          label: 'American Express',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(30,144,255)',
          borderColor: 'rgba(30,144,255)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: transData && transData.filter(function (i) {
            return i.paymentMode === "American Express";
          }).map(function (i) {
            return i.amount;
          })
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1487134566" + " " + "chartRow"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "jsx-1487134566"
      }, "Transactions Graph"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Line"], {
        ref: "chart",
        data: data
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1487134566"
      }, ".chartRow.jsx-1487134566{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;height:42vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFb0IsQUFJZ0MsbUJBQ1AsWUFDRixVQUNHLGFBQ0csZ0JBQ0osWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdHJhbnNEYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfSAgIFxuICAgICAgXG4gICAgICBcblxuICAgICAgXG4gcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgdHJhbnNEYXRhXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBsYWJlbHM6IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzI1J10sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdEQlMgUGF5TEEnLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDEyOCwwKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwxMjgsMCknLFxuICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgICAgZGF0YToodHJhbnNEYXRhICYmIHRyYW5zRGF0YS5maWx0ZXIoaSA9PiBpLnBheW1lbnRNb2RlID09PSBcIkRCUyBQYXlMYVwiKS5tYXAoaSA9PiBpLmFtb3VudCkpIFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdWSVNBJyxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDE2NSwwKScsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LDE2NSwwKScsXG4gICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgICBkYXRhOih0cmFuc0RhdGEgJiYgdHJhbnNEYXRhLmZpbHRlcihpID0+IGkucGF5bWVudE1vZGUgPT09IFwiVklTQVwiKS5tYXAoaSA9PiBpLmFtb3VudCkpIFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ0FtZXJpY2FuIEV4cHJlc3MnLFxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgzMCwxNDQsMjU1KScsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgzMCwxNDQsMjU1KScsXG4gICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgICAgZGF0YToodHJhbnNEYXRhICYmIHRyYW5zRGF0YS5maWx0ZXIoaSA9PiBpLnBheW1lbnRNb2RlID09PSBcIkFtZXJpY2FuIEV4cHJlc3NcIikubWFwKGkgPT4gaS5hbW91bnQpKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFJvd1wiPlxuICAgICAgICA8aDI+VHJhbnNhY3Rpb25zIEdyYXBoPC9oMj5cbiAgICAgICAgPExpbmUgcmVmPVwiY2hhcnRcIiBkYXRhPXtkYXRhfS8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgXG4gICAgICAgIC5jaGFydFJvdyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDlkOGQ5O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIxcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MnZ3O1xuICAgICAgICB9ICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5mZXRjaFRyYW5zYWN0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIGlzRmV0Y2hpbmc6IHRydWV9KVxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVzdC90cmFuc2FjdGlvbnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHRoaXMuc2V0U3RhdGUoe3RyYW5zRGF0YTogcmVzdWx0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZX0pKVxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoVHJhbnNhY3Rpb24oKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Chart.js */"));
    }
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
//# sourceMappingURL=0.258590ca95755041135c.hot-update.js.map