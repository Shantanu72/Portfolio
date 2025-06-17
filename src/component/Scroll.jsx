import React from 'react';
import About from './inner-component/About';
import Experience from './inner-component/Experience';
import Projects from './inner-component/Projects';
import Writting from './inner-component/Writting';

function Scroll(){
    return(
      <div className='scroll-section'>
      <About/>
      <Experience/>
      <Projects/>
      <Writting/>
      </div>
    );
}

export default Scroll;