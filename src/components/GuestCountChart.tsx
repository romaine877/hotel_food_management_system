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
  
  
  type GuestChartProps = {
    
    titles: string[];
    freeGuests: number[];
    engagedGuests: number[];
  };
  
  
  
  export function GuestChart({ titles, freeGuests, engagedGuests  }: GuestChartProps) {
    const labels = titles;
    const data = {
      labels,
      datasets: [
        {
          label: 'Engaged Guest',
          data: engagedGuests,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Free Guest',
          data: freeGuests,
          backgroundColor: 'rgba(53, 122, 235, 0.5)',
        },
      ],
    };
    return <Bar options={options} data={data} />;
  }
  