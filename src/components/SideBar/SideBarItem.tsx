import { ReactNode } from 'react';

import './SideBarItem.css';
import { SideBarItemCategory } from './types/SideBarItemCategory';

interface SideBarItemProps {
  title: SideBarItemCategory;
  icon: ReactNode;
  expanded: boolean;
  active: boolean;
  onClick: (value: SideBarItemCategory) => void;
}

const SideBarItem = ({ title, icon, expanded, active, onClick }: SideBarItemProps) => {
  return (
    <div className={`side-bar-item-container ${active ? 'active' : ''}`} onClick={() => onClick(title)}>
      <div className="side-bar-item-icon">{icon}</div>
      {expanded && <div className="side-bar-item-title">{title}</div>}
    </div>
  );
};

export default SideBarItem;
