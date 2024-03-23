import { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import SideBar from '../../components/SideBar/SideBar';
import { SideBarItemCategory } from '../../components/SideBar/types/SideBarItemCategory';
import './HomePage.css';

export default function HomePage() {
  const [expanded, setExpanded] = useState(true);
  const [activeTitle, setActiveTitle] = useState(SideBarItemCategory.DashBoard);

  return (
    <div className={`home-page-container side-bar-expanded-${expanded}`}>
      <div style={{ gridArea: 'sidebar' }}>
        <SideBar
          expanded={expanded}
          setExpanded={setExpanded}
          activeTitle={activeTitle}
          setActiveTitle={setActiveTitle}
        />
      </div>

      <div style={{ gridArea: 'main', overflow: 'auto' }}>
        <Main activeTitle={activeTitle} />
      </div>

      <div style={{ gridArea: 'footer' }}>
        <Footer />
        {/* <Link to={`/login`}>Logout</Link> */}
      </div>
    </div>
  );
}
