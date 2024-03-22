import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaMinus } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';

import './TotalPL.css';

ChartJS.register(
  CategoryScale,
  Legend,
  Tooltip,
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '嘿嘿',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const TotalPL = () => {
  return (
    <div className="total-pl-container">
      <div className="figure">
        <Doughnut data={data} options={options} />
      </div>

      <div className="description">
        <div className="percentage">
          <MdAdd size={50} />
          10%
        </div>
        <div className="number">
          <div className="label">市值</div>
          <div className="value">222</div>
        </div>
        <div className="number">
          <div className="label">成本</div>
          <div className="value">111</div>
        </div>
      </div>
    </div>
  );
};

export default TotalPL;
