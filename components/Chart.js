import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import selectExamplePage from "../selector";
import  {getTransaction}  from '../actions';
import { connect } from 'react-redux';



export class Chart extends Component {
    constructor(props) {
        super(props);
      }        
      componentDidMount() {
        this.props.dispatch(getTransaction())
      }
 render() {
    const data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '25'],
        datasets: [
          {
            label: 'DBS PayLA',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0,128,0)',
            borderColor: 'rgba(0,128,0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            data:(this.props.transactions && this.props.transactions.filter(i => i.paymentMode === "DBS PayLa").map(i => i.amount)) 
          },
          {
            label: 'VISA',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,165,0)',
            borderColor: 'rgba(255,165,0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            data:(this.props.transactions && this.props.transactions.filter(i => i.paymentMode === "VISA").map(i => i.amount)) 
          },
          {
              label: 'American Express',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(30,144,255)',
              borderColor: 'rgba(30,144,255)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              data:(this.props.transactions && this.props.transactions.filter(i => i.paymentMode === "American Express").map(i => i.amount)) 
            }
        ]
      };
    return (
      <div className="chartRow">
        <h2>Transactions Graph</h2>
        <Line ref="chart" data={data}/>
        <style jsx>{`           
        .chartRow {
            background: #d9d8d9;
            margin: auto;
            width: 75%;
            padding: 21px;
            margin-top: 15px;
            height: 42vw;
        }       
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => selectExamplePage(state, props);
export default connect(mapStateToProps)(Chart);
