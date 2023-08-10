import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
   
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
     
    },
  };
  
  const labels = ['Breakfast', 'Lunch', 'Dinner', ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Engaged Guest',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Free Guest',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(53, 122, 235, 0.5)',
      },
    ],
  };
  
  export function GuestChart() {
    return <Bar options={options} data={data} />;
  }
  