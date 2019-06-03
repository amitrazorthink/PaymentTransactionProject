webpackHotUpdate(0,{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
var Table = function Table(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactTable, {
    PaginationComponent: Pagination,
    data: makeData(),
    columns: [{
      Header: "Transaction ID",
      accessor: "transactionId",
      minWidth: 300
    }, {
      Header: "User Name",
      accessor: "userName",
      minWidth: 300
    }, {
      Header: "Payment Mode",
      accessor: "paymentMode",
      minWidth: 300
    }, {
      Header: "Amount",
      accessor: "amount",
      minWidth: 300
    }, {
      Header: "Visits",
      accessor: "visits",
      minWidth: 300
    }]
  });
};

/***/ })

})
//# sourceMappingURL=0.d05f4ca77a84331850de.hot-update.js.map