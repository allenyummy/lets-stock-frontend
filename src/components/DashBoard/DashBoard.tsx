import { useReducer, useState } from 'react';

import './DashBoard.css';
import { BodyArrangementActionType, bodyArrangement, bodyArrangementReducer, dynamicBodyGridStyle } from './utils';

const DashBoard = () => {
  const [bodyGridStyle, setBodyGridStyle] = useState('default');
  const [bodyArrangmentState, dispatchBodyArrangement] = useReducer(bodyArrangementReducer, bodyArrangement);

  return (
    <div className="dash-board-container">
      <div className="header">
        <div className="title">DashBoard</div>
        <div className="update-time">2024-03-24 11:34</div>
      </div>

      <div className="body" style={dynamicBodyGridStyle(bodyGridStyle)}>
        {bodyArrangmentState.map(({ keyIndex, Component, style, attribute }, index) => {
          return (
            <div key={index} style={style}>
              <Component
                expanded={attribute.expanded}
                onClickExpandButton={(expanded: boolean) => {
                  dispatchBodyArrangement({
                    type: BodyArrangementActionType.ATTRIBUTE_CHANGED,
                    payload: { keyIndex, attribute: { expanded } },
                  });
                  if (!expanded) {
                    setBodyGridStyle('default');
                  } else {
                    setBodyGridStyle(keyIndex);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;
