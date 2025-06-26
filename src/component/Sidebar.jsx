import { BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';
import data from '../data.json';

// Mapping icon names from JSON to actual components
const iconMap = {
  BsWhatsapp: <BsWhatsapp />,
  FaXTwitter: <FaXTwitter />,
  BsYoutube: <BsYoutube />,
  FaLinkedinIn: <FaLinkedinIn />,
  MdEmail: <MdEmail />
};

function Sidebar() {
  return (
    <div className='Intro-side'>
      <div className='fixed-Intro'>
        <h1>{data.name}</h1>
        <h3>{data.title}</h3>
       <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        <nav>
          <div className='content-side'>
            {/* <Link to="#"><span className='first'>ABOUT</span></Link> */}
            <Link to="#project"><span className='third'>PROJECTS</span></Link>
            <Link to="#experience"><span className='second'>EXPERIENCE</span></Link>
            <Link to="#videos"><span className='second'>DEMO VIDEOS</span></Link>
          </div>
        </nav>
      </div>
      <div className='footer-side'>
        {data.socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {iconMap[link.icon] || null}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
