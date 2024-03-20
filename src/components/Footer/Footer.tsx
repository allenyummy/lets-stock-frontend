import { MdOutlineCopyright } from 'react-icons/md';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright">
        <MdOutlineCopyright size={15} />
        2024<b>Let's Stock Inc.</b>
      </div>
      <div className="label">All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
