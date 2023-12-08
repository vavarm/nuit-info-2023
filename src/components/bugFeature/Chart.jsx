import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Grid } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Emissions de CO2',
    },
  },
};

function Chart({ setChartFinished }) {

    // UseState
    const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
    const [iteration, setIteration] = useState(0);
    const [data, setData] = useState({
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map((num, index) => Math.pow(index, 2) + Math.random() * 10 - 5),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
    });

    // UseEffect
    useEffect(() => {
        const  maxIteration = 15;
        if (iteration < maxIteration) {
            const interval = setTimeout(() => {
                setLabels(labels => [...labels, Math.random().toString(36).substring(7)])
                setData({
                    labels,
                    datasets: [
                      {
                        label: 'Dans le monde',
                        data: labels.map((num, index) => Math.pow(index, 2) + Math.random() * 10 - 5),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      },
                      {
                        label: labels[labels.length - 1],
                        data: labels.map((num, index) => Math.pow(index, 2)*Math.random()),
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                      },
                      {
                        label: 'Bug'.repeat(Math.random()*25).slice(0, iteration),
                        data: labels.map((num, index) => Math.pow(index, 2)*Math.random()/Math.random()),
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                      }
                    ],
                })
                setIteration(iteration + 1)
            }, 500)
            return () => clearInterval(interval)
        }
        else if (iteration === maxIteration) {
            setChartFinished(true)
        }
    }, [data, iteration, labels])
    
    return (
        <div>
            <Grid container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {Array(iteration).fill(0).map((_num, index) =>
                    <Box sx={{
                        border: '1px solid',
                        borderRadius: 2,
                        marginBottom: 2,
                        position: 'relative',
                        top: `-${index * 25}px`,
                        left: `-${index * 50}px`,
                    }}>
                        <Line options={options} data={data} width={index*50} height={index*50} />
                    </Box>
                )}
            </Grid>
        </div>
    );
}

export default Chart;