import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineHelpCenter, MdOutlineMailOutline, MdOutlineSpaceDashboard } from 'react-icons/md';

import SideBarGroup from './SideBarGroup';
import SideBarItem from './SideBarItem';

interface SideBarProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  activeTitle: string;
  setActiveTitle: (value: string) => void;
}

const SideBar = ({ expanded, setExpanded, activeTitle, setActiveTitle }: SideBarProps) => {
  return (
    <div style={{ gridArea: 'sidebar' }}>
      <SideBarGroup expanded={expanded} onClickExpandButton={setExpanded}>
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
      </SideBarGroup>
    </div>
  );
};

export default SideBar;
