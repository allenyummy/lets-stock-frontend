import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import {
  MdOutlineHelpCenter,
  MdOutlineMailOutline,
  MdOutlineNotificationsNone,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';

import SideBarGroup from './SideBarGroup';
import SideBarItem from './SideBarItem';
import { SideBarItemCategory } from './types/SideBarItemCategory';

interface SideBarProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  activeTitle: SideBarItemCategory;
  setActiveTitle: (value: SideBarItemCategory) => void;
}

const SideBar = ({ expanded, setExpanded, activeTitle, setActiveTitle }: SideBarProps) => {
  return (
    <>
      <SideBarGroup expanded={expanded} onClickExpandButton={setExpanded}>
        <SideBarItem
          title={SideBarItemCategory.DashBoard}
          icon={<MdOutlineSpaceDashboard />}
          expanded={expanded}
          active={activeTitle === SideBarItemCategory.DashBoard}
          onClick={setActiveTitle}
        />
        <SideBarItem
          title={SideBarItemCategory.Profile}
          icon={<CgProfile />}
          expanded={expanded}
          active={activeTitle === SideBarItemCategory.Profile}
          onClick={setActiveTitle}
        />
        <SideBarItem
          title={SideBarItemCategory.Notification}
          icon={<MdOutlineNotificationsNone />}
          expanded={expanded}
          active={activeTitle === SideBarItemCategory.Notification}
          onClick={setActiveTitle}
        />
        <SideBarItem
          title={SideBarItemCategory.Settings}
          icon={<IoSettingsOutline />}
          expanded={expanded}
          active={activeTitle === SideBarItemCategory.Settings}
          onClick={setActiveTitle}
        />
        <SideBarItem
          title={SideBarItemCategory.HelpCenter}
          icon={<MdOutlineHelpCenter />}
          expanded={expanded}
          active={activeTitle === SideBarItemCategory.HelpCenter}
          onClick={setActiveTitle}
        />
        <SideBarItem
          title={SideBarItemCategory.ContactMe}
          icon={<MdOutlineMailOutline />}
          expanded={expanded}
          active={activeTitle === SideBarItemCategory.ContactMe}
          onClick={setActiveTitle}
        />
      </SideBarGroup>
    </>
  );
};

export default SideBar;
