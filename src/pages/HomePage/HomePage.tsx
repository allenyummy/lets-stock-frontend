import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import {
  MdOutlineHelpCenter,
  MdOutlineMailOutline,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import SideBar from '../../components/SideBar/SideBar';
import SideBarItem from '../../components/SideBar/SideBarItem';
import './HomePage.css';

const defaultExpanded = true;
const defaultActiveTitle = 'Profile';

export default function Home() {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [activeTitle, setActiveTitle] = useState(defaultActiveTitle);

  return (
    <div
      className={`home-page-container ${expanded ? `side-bar-expanded` : ''}`}
    >
      <div className="side-bar-grid">
        <SideBar expanded={expanded} onClickExpandButton={setExpanded}>
          <SideBarItem
            title="DashBoard"
            icon={<MdOutlineSpaceDashboard />}
            expanded={expanded}
            active={activeTitle === 'DashBoard'}
            onClick={setActiveTitle}
          />
          <SideBarItem
            title="Profile"
            icon={<CgProfile />}
            expanded={expanded}
            active={activeTitle === 'Profile'}
            onClick={setActiveTitle}
          />
          <SideBarItem
            title="Settings"
            icon={<IoSettingsOutline />}
            expanded={expanded}
            active={activeTitle === 'Settings'}
            onClick={setActiveTitle}
          />
          <SideBarItem
            title="Help Center"
            icon={<MdOutlineHelpCenter />}
            expanded={expanded}
            active={activeTitle === 'Help Center'}
            onClick={setActiveTitle}
          />
          <SideBarItem
            title="Contact Me"
            icon={<MdOutlineMailOutline />}
            expanded={expanded}
            active={activeTitle === 'Contact Me'}
            onClick={setActiveTitle}
          />
        </SideBar>
      </div>

      <div>{activeTitle}</div>

      <Link to={`/login`}>Logout</Link>
    </div>
  );
}
