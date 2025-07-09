
import Experience from './inner-component/Experience';
import Projects from './inner-component/Projects';
import { Video } from './inner-component/Video';
import About from './inner-component/About';
// import {ResumeButton} from './inner-component/atomic-component/ResumeButton';

function Scroll(){
    return(
      <div className='scroll-section'>
      <About/>
      <Projects/>
      <Experience/>
      <Video/>
      {/* <ResumeButton/> */}
      </div>
    );
}

export default Scroll;