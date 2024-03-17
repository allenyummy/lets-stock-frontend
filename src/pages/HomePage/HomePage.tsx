import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineSpaceDashboard,
  MdOutlineMailOutline,
  MdOutlineHelpCenter,
} from "react-icons/md";

import "./HomePage.css";
import SideBar from "../../components/SideBar/SideBar";
import SideBarItem from "../../components/SideBar/SideBarItem";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="side-bar-grid">
        <SideBar>
          <SideBarItem title="DashBoard" icon={<MdOutlineSpaceDashboard />} />
          <SideBarItem title="Profile" icon={<CgProfile />} />
          <SideBarItem title="Settings" icon={<IoSettingsOutline />} />
          <SideBarItem title="Help Center" icon={<MdOutlineHelpCenter />} />
          <SideBarItem title="Contact Me" icon={<MdOutlineMailOutline />} />
        </SideBar>
      </div>

      <Link to={`/login`}>Logout</Link>
    </div>
  );
}
