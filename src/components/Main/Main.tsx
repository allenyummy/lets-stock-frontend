import ContactMe from '../ContactMe/ContactMe';
import DashBoard from '../DashBoard/DashBoard';
import HelpCenter from '../HelpCenter/HelpCenter';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import { SideBarItemCategory } from '../SideBar/types/SideBarItemCategory';

interface MainProps {
  activeTitle: SideBarItemCategory;
}

const Main = ({ activeTitle }: MainProps) => {
  switch (activeTitle) {
    case SideBarItemCategory.DashBoard:
      return <DashBoard />;
    case SideBarItemCategory.Profile:
      return <Profile />;
    case SideBarItemCategory.Settings:
      return <Settings />;
    case SideBarItemCategory.Notification:
      return <Notification />;
    case SideBarItemCategory.HelpCenter:
      return <HelpCenter />;
    case SideBarItemCategory.ContactMe:
      return <ContactMe />;
    default:
      return <DashBoard />;
  }
};

export default Main;
