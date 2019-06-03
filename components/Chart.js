import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20'],
  datasets: [
    {
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
    },
    {
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
    },
    {
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
      }
  ]
};
// console.log("this.graphData", this.graphData)
export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          transData: null,
        };
      }  
      
      
 render() {
    const {
        transData
      } = this.state;
    const data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '15'],
        datasets: [
          {
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
            data:(transData && transData.filter(i => i.paymentMode === "DBS PayLa").map(i => i.amount)) 
          },
          {
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
            data:(transData && transData.filter(i => i.paymentMode === "VISA").map(i => i.amount)) 
          },
          {
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
              data:(transData && transData.filter(i => i.paymentMode === "American Express").map(i => i.amount)) 
            }
        ]
      };




console.log("this.graphData", this.graphData)
    //   this.graphData = transData;
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

//   componentDidMount() {
//    const abc =  fetch('http://localhost:3000/rest/transactions')
//     .then(response => response.json())
//     console.log('BAC', abc);

//     // .then(data => this.setState({ data }));
//     console.log('data in chart', this.state.data);
//     const { datasets } = this.refs.chart.chartInstance.data
//     console.log(datasets[0].data);
//   }

fetchTransaction = () => {
    this.setState({...this.state, isFetching: true})
    fetch('http://localhost:3000/rest/transactions')
      .then(response => response.json())
      .then(result => this.setState({transData: result, 
                                     isFetching: false}))
      .catch(e => console.log(e));
  }


  componentDidMount() {
    this.fetchTransaction()
  }
}