import { BsGithub,BsLinkedin,BsInstagram,BsTwitter } from 'react-icons/bs';
import {HashLink as Link} from 'react-router-hash-link';

function Sidebar(){
    return (
    <div className='Intro-side'>
        <div className='fixed-Intro'>
         <h1 >Harshit Joshi</h1>
         <h3>Frontend Engineer </h3>
         <p>I build accessible, responsive web<br/>products and digital experiences<br/> for the web.</p>
         <nav>
         <div className='content-side'>
         <Link to='#'><span className='first'>ABOUT</span></Link>
         <Link to='#experience'><span className='second '> EXPERIENCE</span></Link>
         <Link to='#project'><span className='third '>PROJECTS</span></Link>
         </div>
         </nav>
        </div>
        <div className='footer-side'>
        <Link to='https://github.com/HJoshi012802'><BsGithub/></Link>
        <Link to='https://x.com/HarshitJoshi280'><BsTwitter/></Link>
        <Link to='https://www.instagram.com'><BsInstagram/></Link>
        <Link to='https://www.linkedin.com/in/harshit-joshi-120910279/'><BsLinkedin/></Link>
        </div>
    </div>
    );
}

export default Sidebar;