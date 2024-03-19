import './SideBar.css';
import { ReactNode } from 'react';
import { FaBlackTie } from 'react-icons/fa';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';

interface SideBarProps {
  expanded: boolean;
  onClickExpandButton: (value: boolean) => void;
  children: ReactNode;
}

const SideBar = ({ expanded, onClickExpandButton, children }: SideBarProps) => {
  return (
    <div className="side-bar-container" aria-expanded={expanded}>
      <div className="header">
        {expanded && <div className="title">Let's Stock !</div>}
        <button className="icon" onClick={() => onClickExpandButton(!expanded)}>
          {expanded ? (
            <MdOutlineKeyboardDoubleArrowLeft size={20} />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight size={20} />
          )}
        </button>
      </div>

      <div className="slot">{children}</div>

      <div className="footer">
        <div className="icon">
          <FaBlackTie size={20} />
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
