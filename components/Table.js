import React from 'react';

function Table(props) {
  const tableData = props.data;
  const tData = (tableData && tableData.length) ?
    tableData.map(i => {
      return(
        <>
       <tr className="rowClass">
        <td>{i.transactionId}</td>
        <td>{i.userName}</td>
        <td>{i.paymentMode}</td>
        <td>{i.amount}</td>
      </tr>
      <style jsx>{`
             .rowClass , td{
            border: 1px solid #000 !important;
            padding: 5px;
            text-align: center;
        }
        tr td {
          width: 27vw;
        }
        
        `}</style>
      </>
         )
       }) : <p>Loading ...</p>

 return (
    <div className="tableDiv">
       <table>
         <tr>
           <th>Transaction ID</th>
           <th>User Name</th>
           <th>Payment Mode</th>
           <th>Amount</th>
         </tr>
         <tbody>
           {tData}
         </tbody>
       </table>
       <style jsx>{`
       

table{
  width: 100%;
  border: 1px solid #7a7a7a;
  background-color: #f3f3f3;
  border-collapse: collapse;
  background: #ccc;
    font-weight: normal;
     font-family: sans-serif;
   font-size: 12px;
     width: 100%;
}
  tbody{
    height:200px;
    overflow-y:auto;
    width: 100%;
    }
  tbody,tr,td{
    display:inline-block;
    border: 1px solid #7a7a7a;
  }
  tbody
    td{
      float:left;
    }
  
  thead {
    tr
      th
        float:left;
       background-color: #f39c12;
       border-color:#e67e22;
      }
      th, td {
        padding: 5px;
        text-align: center;
        width: 27vw;
         }
         .tableDiv {
          background: #d9d8d9;
          margin: auto;
          width: 75%;
          padding: 21px;
          margin-top: 15px;
        }
             `}
             </style>
           </div>
  
      )
}

export default Table;

