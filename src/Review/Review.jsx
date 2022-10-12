import React from 'react';
import  './Review.css';
import Chart from 'react-apexcharts';


const Review = () => {

    const data = {
        series:[
            {
              name: "Review",
              data: [10,25,15,30,12,15,20],
            },
        ],
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color:"#000",
            opacity: 0.35,
          },
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["tomato"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          // xaxis: {
          //   type: "datetime",
          //   categories: [
          //     "2022-09-19T00-00-00.000Z",
          //     "2022-09-19T01-30-00.000Z",
          //     "2022-09-19T02-30-00.000Z",
          //     "2022-09-19T03-30-00.000Z",
          //     "2022-09-19T04-30-00.000Z",
          //     "2022-09-19T05-30-00.000Z",
          //     
          //   ],
          // },
        },
      };
    return (
        <div className="chart">
            <Chart series={data.series} options={data.options} type="area" />
        </div>
    );
};

export default Review;