import { ReactNode } from 'react';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';

import './SideBarGroup.css';

interface SideBarGroupProps {
  expanded: boolean;
  onClickExpandButton: (value: boolean) => void;
  children: ReactNode;
}

const SideBarGroup = ({ expanded, onClickExpandButton, children }: SideBarGroupProps) => {
  return (
    <div className="side-bar-group-container" aria-expanded={expanded}>
      <div className="header">
        {expanded && <div className="title">Let's Stock !</div>}
        <button className="icon" onClick={() => onClickExpandButton(!expanded)}>
          {expanded ? <GoSidebarExpand size={20} /> : <GoSidebarCollapse size={20} />}
        </button>
      </div>
      <div className="slot">{children}</div>
    </div>
  );
};

export default SideBarGroup;
