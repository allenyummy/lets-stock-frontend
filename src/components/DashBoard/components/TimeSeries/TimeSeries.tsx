import { IoExpandOutline } from 'react-icons/io5';

import './TimeSeries.css';

interface Props {
  expanded: boolean;
  onClickExpandButton: (value: boolean) => void;
}

const TimeSeries = ({ expanded, onClickExpandButton }: Props) => {
  return (
    <div className="time-series-container">
      <div className="header">
        <div className="title">Time Series</div>
        <div className="icon">
          <IoExpandOutline size={'1rem'} onClick={() => onClickExpandButton(!expanded)} />
        </div>
      </div>

      <div className="body">Body</div>
    </div>
  );
};

export default TimeSeries;
