webpackHotUpdate(0,{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react';
// function Table(props) {
//   console.log('props in Table', props);
//   const tableData = props.data;
//   console.log('tableDta', tableData);
//   // console.log('tableDta', tableData.length);
//   const tData = (tableData && tableData.length) ?
//     tableData.map(i => {
//       return(
//         <>
//        <tr className="rowClass">
//         <td>{i.transactionId}</td>
//         <td>{i.userName}</td>
//         <td>{i.paymentMode}</td>
//         <td>{i.amount}</td>
//       </tr>
//       <style jsx>{`
//              .rowClass , td{
//             border: 1px solid #000 !important;
//             padding: 5px;
//             text-align: center;
//         }
//         tr td {
//           width: 27vw;
//         }
//         `}</style>
//       </>
//          )
//        }) : <p>Loading ...</p>
//  return (
//     <div className="tableDiv">
//        <table>
//          <tr>
//            <th>Transaction ID</th>
//            <th>User Name</th>
//            <th>Payment Mode</th>
//            <th>Amount</th>
//          </tr>
//          <tbody>
//            {tData}
//          </tbody>
//        </table>
//        <style jsx>{`
// table{
//   width: 100%;
//   border: 1px solid #7a7a7a;
//   background-color: #f3f3f3;
//   border-collapse: collapse;
//   background: #ccc;
//     font-weight: normal;
//      font-family: sans-serif;
//    font-size: 12px;
//      width: 100%;
// }
//   tbody{
//     height:200px;
//     overflow-y:auto;
//     width: 100%;
//     }
//   tbody,tr,td{
//     display:inline-block;
//     border: 1px solid #7a7a7a;
//   }
//   tbody
//     td{
//       float:left;
//     }
//   thead {
//     tr
//       th
//         float:left;
//        background-color: #f39c12;
//        border-color:#e67e22;
//       }
//       th, td {
//         padding: 5px;
//         text-align: center;
//         width: 27vw;
//          }
//          .tableDiv {
//           background: #d9d8d9;
//           margin: auto;
//           width: 75%;
//           padding: 21px;
//           margin-top: 15px;
//         }
//              `}</style>
//            </div>
//       )
// }
// export default Table;

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
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Table__WEBPACK_IMPORTED_MODULE_7__);
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
  }, "Transfer"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
//# sourceMappingURL=0.c762ebc8c9b416261cb6.hot-update.js.map