import React, {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';


export const PriceChart = () => {

    const data = [
        {
            x: new Date('2018-02-12').getTime(),
            y: 76
        }, 
        {
            x: new Date('2018-02-12').getTime(),
            y: 76
        }
        
    ];

    const [state, setState] = useState({
        series: [{
            data: data,
        }],
        xaxis: {
            type: 'datetime'
        },
        stroke: {
            dashArray: 2
        },
        options: {
            chart: {
              height: 350,
              type: 'line'
            },
            dataLabels: {
              enabled: true
            },
            title: {
              text: "Payments Received",
              align: 'left',
              margin: 10,
              style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#263238'
              }
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
});
    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }
