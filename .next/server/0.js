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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTransaction();
    }
  }, {
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
      }, ".chartRow.jsx-1487134566{background:#d9d8d9;margin:auto;width:75%;padding:21px;margin-top:15px;height:42vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWl0aGt1bWFyL3dpdGgtcmVkdXgtc2FnYS9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFb0IsQUFJZ0MsbUJBQ1AsWUFDRixVQUNHLGFBQ0csZ0JBQ0osWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2FtaXRoa3VtYXIvd2l0aC1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdHJhbnNEYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfSAgICAgIFxuICAgICAgZmV0Y2hUcmFuc2FjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgaXNGZXRjaGluZzogdHJ1ZX0pXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVzdC90cmFuc2FjdGlvbnMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4gdGhpcy5zZXRTdGF0ZSh7dHJhbnNEYXRhOiByZXN1bHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZX0pKVxuICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICAgIH0gICBcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoVHJhbnNhY3Rpb24oKVxuICAgICAgfVxuIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHRyYW5zRGF0YVxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFiZWxzOiBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNSddLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnREJTIFBheUxBJyxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwxMjgsMCknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsMTI4LDApJyxcbiAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgIGRhdGE6KHRyYW5zRGF0YSAmJiB0cmFuc0RhdGEuZmlsdGVyKGkgPT4gaS5wYXltZW50TW9kZSA9PT0gXCJEQlMgUGF5TGFcIikubWFwKGkgPT4gaS5hbW91bnQpKSBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVklTQScsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwxNjUsMCknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwxNjUsMCknLFxuICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgICAgZGF0YToodHJhbnNEYXRhICYmIHRyYW5zRGF0YS5maWx0ZXIoaSA9PiBpLnBheW1lbnRNb2RlID09PSBcIlZJU0FcIikubWFwKGkgPT4gaS5hbW91bnQpKSBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdBbWVyaWNhbiBFeHByZXNzJyxcbiAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzAsMTQ0LDI1NSknLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMzAsMTQ0LDI1NSknLFxuICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgICAgIGRhdGE6KHRyYW5zRGF0YSAmJiB0cmFuc0RhdGEuZmlsdGVyKGkgPT4gaS5wYXltZW50TW9kZSA9PT0gXCJBbWVyaWNhbiBFeHByZXNzXCIpLm1hcChpID0+IGkuYW1vdW50KSkgXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRSb3dcIj5cbiAgICAgICAgPGgyPlRyYW5zYWN0aW9ucyBHcmFwaDwvaDI+XG4gICAgICAgIDxMaW5lIHJlZj1cImNoYXJ0XCIgZGF0YT17ZGF0YX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIFxuICAgICAgICAuY2hhcnRSb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDhkOTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDJ2dztcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/amithkumar/with-redux-saga/components/Chart.js */"));
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



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