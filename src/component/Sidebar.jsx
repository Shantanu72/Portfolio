import { BsWhatsapp,BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {HashLink as Link} from 'react-router-hash-link';

function Sidebar(){
    return (
    <div className='Intro-side'>
        <div className='fixed-Intro'>
         <h1>Shantanu Pradhan</h1>
         <h3>Unity Developer</h3>
         <p>I build accessible, responsive web<br/>products and digital experiences<br/> for the web.</p>
         <nav>
         <div className='content-side'>
         <Link to='#'><span className='first'>ABOUT</span></Link>
         <Link to='#project'><span className='third '>PROJECTS</span></Link>
         <Link to='#experience'><span className='second '> EXPERIENCE</span></Link>
         </div>
         </nav>
        </div>
        <div className='footer-side'>
        <Link to='https://github.com/HJoshi012802'><BsWhatsapp/></Link>
        <Link to='https://x.com/HarshitJoshi280'><FaXTwitter/></Link>
        <Link to='https://www.instagram.com'><BsYoutube/></Link>
        <Link to='https://www.linkedin.com/in/shantanu-pradhan-39b0321ba/'><FaLinkedinIn/></Link>
        <a href='mailto:72shnatanu@gmail.com'><MdEmail/></a>
        </div>
    </div>
    );
}

export default Sidebar;