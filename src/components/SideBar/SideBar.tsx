import "./SideBar.css";
import { ReactNode, useState, createContext } from "react";
import { FaBlackTie } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface SideBarProps {
  children: ReactNode;
}

const defaultExpanded = false;
export const SideBarContext = createContext({
  expanded: defaultExpanded,
});

const SideBar = ({ children }: SideBarProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const onClickExpandButton = (value: boolean) => {
    setExpanded(value);
  };

  const ExpandButton = expanded
    ? MdOutlineKeyboardDoubleArrowLeft
    : MdOutlineKeyboardDoubleArrowRight;

  return (
    <div className="side-bar-container" aria-expanded={expanded}>
      <div className="header">
        {expanded && <div className="title">Let's Stock !</div>}
        <button className="icon" onClick={() => onClickExpandButton(!expanded)}>
          <ExpandButton size={20} />
        </button>
      </div>

      <SideBarContext.Provider value={{ expanded }}>
        <div className="slot">{children}</div>
      </SideBarContext.Provider>

      <div className="footer">
        <div className="icon">
          <FaBlackTie size={23} />
        </div>
        {expanded && (
          <div className="author">
            <div className="name">Yulun Chiang</div>
            <div className="email">ylchiang914@gmail.com</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
