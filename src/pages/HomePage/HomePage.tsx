import { useState } from 'react';
import { Link } from 'react-router-dom';

import SideBar from '../../components/SideBar/SideBar';
import './HomePage.css';

export default function HomePage() {
  const [expanded, setExpanded] = useState(true);
  const [activeTitle, setActiveTitle] = useState('DashBoard');

  return (
    <div className={`home-page-container ${expanded ? `side-bar-expanded` : ''}`}>
      <SideBar
        expanded={expanded}
        setExpanded={setExpanded}
        activeTitle={activeTitle}
        setActiveTitle={setActiveTitle}
      />

      <div>{activeTitle}</div>

      <Link to={`/login`}>Logout</Link>
    </div>
  );
}
