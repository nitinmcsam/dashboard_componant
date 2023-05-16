import React, { useEffect, useRef } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from  "chart.js/auto";
import { Line } from "react-chartjs-2";



const labels = ["January" ,"February", "March", "April", "May", "June",'july','Aug','Sep',"Oct"];

const options = {

  responsive: true,
  maintainAspectRatio:false,
  bezierCurve : false,
  backgroundColor:"red",

  

  plugins: {
    customCanvasBackgroundColor: {
      color: '',
    },
    legend: {
      display: true,
    },
  interaction: {
    mode: 'nearest',
    intersect: false,
  }
},
  
    scales: {
      x: {
       
        grid:{
            borderColor:"white",
            borderWidth:6,
            color:"",

        },
        border: {
            
            
        },  
        ticks: {display: true}
    },
      y: {
        gridLines : {
          display : true
      },

      grid:{
          color: 'black',
          backgroundColor:"black"
          
      },
      border: {

      },  
      ticks: {display: true}
  },
    
  },
  point: {
    radius: 10,
    width:100,
    borderWidth: 0,
    hoverRadius: 7,
    hoverBorderWidth: 0,
    pointBackgroundColor:"red"
  },
  tooltip: {
    enabled: true
  },
  elements: {
    line: {
        tension: "0.3",
        pointHitRadius:1,
        capBezierPoints:true,
        
    },
 
}
 }

const data = {
  labels: labels,
  datasets: [
    {
      label: "set one",
      backgroundColor:"red", 

      data: [50,40,300,220,500,250,350,400,250,370],
      
        borderColor: '#FF6384',
        borderWidth: 3,
        pointBorderColor: 'red',
        pointBorderWidth: 3,
        pointRadius: 1,
        pointHoverRadius: 6,
    }
  ],
};

const LineChart = () => {
  return (
    <div className="max-sm:w-[21rem] max-sm:h-[14rem] w-[50rem] h-[20rem] max-md:w-[33rem] max-lg:w-[46rem] flex items-center mx-6">
      <Line data={data} options={options} />
    </div>
  );
};




export default LineChart;
