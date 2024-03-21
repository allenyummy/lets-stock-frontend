import './DashBoard.css';
import { bodyArrangement } from './utils';

const DashBoard = () => {
  return (
    <div className="dash-board-container">
      <div className="header">
        <div className="title">DashBoard</div>
        <div className="update-time">2024-03-24 11:34</div>
      </div>

      <div className="body">
        {bodyArrangement.map(({ Component, style }, index) => {
          return (
            <div key={index} style={style}>
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;
