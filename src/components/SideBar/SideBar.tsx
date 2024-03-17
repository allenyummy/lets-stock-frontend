import "./SideBar.css";
import { ReactNode } from "react";
import { FaBlackTie } from "react-icons/fa";

interface SideBarProps {
  children: ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  return (
    <div className="side-bar-container">
      <div className="header"> Let's Stock !</div>
      <div className="slot">{children}</div>
      <div className="footer">
        <div className="icon">
          <FaBlackTie size={23} />
        </div>
        <div className="author">
          <div className="name">Yulun Chiang</div>
          <div className="email">ylchiang914@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
