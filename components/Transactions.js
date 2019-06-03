import UserButton from "./UserButton";
import RadioButton from "./RadioButton";
import React, { useState, useEffect} from 'react';
import  {saveTransaction, getTransaction}  from '../actions'
import { connect } from 'react-redux';
import Table from "./Table";
import selectExamplePage from "../selector";
import Chart from './Chart';

const btnName = [{
    id: 1,
    name: 'USER-A'
    },
    {
        id: 2,
        name: 'USER-B'
        },
        {
            id: 3,    
            name: 'USER-C'
            },
];
const radioBtn = [{
    id: 1,
    name: 'American Express'
    },
    {
        id: 2,
        name: 'VISA'
        },
        {
            id: 3,
            name: 'DBS PayLa'
            },
];

function Example(props) {
    // Declare a new state variable
    const [userName, setUserName] = useState('');
    const [paymentMode, setPaymentMode] = useState(0);
    const [amount, setAmount] = useState(0);


      useEffect( () => {
        props.dispatch(getTransaction());
   }, [])


    const handleSubmit = (evt) => {
      evt.preventDefault();
      props.dispatch(saveTransaction(
        {
          userName,
          paymentMode,
          amount
        }
      ),
    );
    setPaymentMode('');
    setAmount('');
  }

    return (
      <div>
            <form onSubmit={handleSubmit}>  
            <div className="formButton">
            {
                  btnName.map((item) => {
                   return  <UserButton name={item.name} onClickHandler={(name) => { setUserName(name)}}/>
                  })
              }
            </div>
            <div className="formButton radioPosition">
            {
                  radioBtn.map(item => {
                   return  <RadioButton name={item.name} onClickHandler={(payment) => { setPaymentMode(payment)}} value={paymentMode}/>
                  })
              }
            </div>
            <div className="submitButton">
              <input type="number" min="1" max="5000" value = {amount} className="inputValue" onChange={(e) => {
                setAmount(e.target.value)}
              }/>
              <button type="submit" value="Transfer"  className="transferButton">Transfer</button>
              </div>
            </form>
            <Table data={props.transactions}/>
            <Chart/>
            <style jsx>{`
        form {
          background: #d9d8d9;
  margin: auto;
  width: 75%;
  padding: 21px;
        }
        .formButton {
          width: 33%;
          display: inline-block;
        }
        button {
          display: block;
        }
        .radioPosition {
          position: absolute;
        }
        .submitButton {
          width: 31%;
          display: inline-block;
          position: absolute;
          right: 18%;
          top: 15%;
        }
        .inputValue {
          height: 25px;
          width: 200px;
          border: 2px solid #e87c7c;
        }
        .transferButton {
          padding: 6px;
          background: #0076ff;
          color: #ffff;
          float: right;
        }
        
      `}</style>
         </div>
    );
  }
const mapStateToProps = (state, props) => selectExamplePage(state, props);
export default connect(mapStateToProps)(Example);
