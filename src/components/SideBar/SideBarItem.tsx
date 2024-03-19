import "./SideBarItem.css";
import { ReactNode } from "react";

interface SideBarItemProps {
  title: string;
  icon: ReactNode;
  expanded: boolean;
  active?: boolean;
  onClick?: () => void;
}

const SideBarItem = ({ title, icon, expanded, active }: SideBarItemProps) => {
  return (
    <div className="side-bar-item-container">
      <div className="side-bar-item-icon">{icon}</div>
      {expanded && <div className="side-bar-item-title">{title}</div>}
    </div>
  );
};

export default SideBarItem;
