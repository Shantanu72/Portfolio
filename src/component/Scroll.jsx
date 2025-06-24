import React from 'react';
import Experience from './inner-component/Experience';
import Projects from './inner-component/Projects';
import { Video } from './inner-component/Video';

function Scroll(){
    return(
      <div className='scroll-section'>
   
      <Projects/>
      <Experience/>
     <Video/>
      </div>
    );
}

export default Scroll;