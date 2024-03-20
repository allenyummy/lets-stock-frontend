import { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../../components/Main/Main';
import SideBar from '../../components/SideBar/SideBar';
import { SideBarItemCategory } from '../../components/SideBar/types/SideBarItemCategory';
import './HomePage.css';

export default function HomePage() {
  const [expanded, setExpanded] = useState(true);
  const [activeTitle, setActiveTitle] = useState(SideBarItemCategory.DashBoard);

  return (
    <div className={`home-page-container ${expanded ? `side-bar-expanded` : ''}`}>
      <div style={{ gridArea: 'sidebar' }}>
        <SideBar
          expanded={expanded}
          setExpanded={setExpanded}
          activeTitle={activeTitle}
          setActiveTitle={setActiveTitle}
        />
      </div>

      <div style={{ gridArea: 'main' }}>
        <Main activeTitle={activeTitle} />
      </div>

      <Link to={`/login`}>Logout</Link>
    </div>
  );
}
