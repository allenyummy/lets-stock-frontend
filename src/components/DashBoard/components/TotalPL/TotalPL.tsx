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
import { IoExpandOutline } from 'react-icons/io5';

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

interface Props {
  expanded: boolean;
  onClickExpandButton: (value: boolean) => void;
}

const TotalPL = ({ expanded, onClickExpandButton }: Props) => {
  return (
    <div className="total-pl-container">
      <div className="header">
        <div className="title">Total P/L</div>
        <div className="icon">
          <IoExpandOutline size={'1rem'} onClick={() => onClickExpandButton(!expanded)} />
        </div>
      </div>

      <div className="body">
        <div className="canvas">
          <Doughnut data={data} options={options} />
        </div>
        <div className="description">
          <div className="percentage">+ 10%</div>
          <div className="number">
            <div className="label">市值</div>
            <div className="value">{expanded ? 222 : 10}</div>
          </div>
          <div className="number">
            <div className="label">成本</div>
            <div className="value">111</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPL;
