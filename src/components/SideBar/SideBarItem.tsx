import "./SideBarItem.css";
import { ReactNode, useContext } from "react";
import { SideBarContext } from "./SideBar";

interface SideBarItemProps {
  title: string;
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const SideBarItem = ({ title, icon, active }: SideBarItemProps) => {
  const { expanded } = useContext(SideBarContext);

  return (
    <div className="side-bar-item-container">
      <div className="side-bar-item-icon">{icon}</div>
      {expanded && <div className="side-bar-item-title">{title}</div>}
    </div>
  );
};

export default SideBarItem;
