import {FiArrowUpRight} from 'react-icons/fi';

function Experience() {
    return ( 
       <section className="experience-section" id='experience'>
        <div className='only-experience'>
        <h4>EXPERIENCE</h4>
        </div>
        <div className="experience">
          <div className="year">2022-2022</div>
          <div className="description">
            <h3>EventDesu<span className='arrow'><FiArrowUpRight/></span></h3>
            <h4>Frontend Intern</h4>
            <h4>Engineer</h4>
            <p>I acquired valuable experience in collaborating with a team to develop a commercial website. Event Desu is a Startup in Tokyo, Japan which is a aggregator service for the entertainment industry whereby it assist people with information and ticketing for various events across many cities all over Japan.</p>
           <div className="shot-language">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Tailwind</span>
            <span>Flutter</span>
            <span>React.js</span>
           </div>
          </div>
        </div>

        <div className="experience">
          <div className="year">OCT 2023</div>
          <div className="description">
            <h3>Open-Source<span className='arrow'><FiArrowUpRight/></span></h3>
            <h4>Hacktoberfest</h4>
            <h4>Contributor/Maintainer</h4>
            <p>Participating in Hacktoberfest as a contributor and maintainer was a rewarding journey. I enjoyed collaborating with the open-source community, submitting valuable pull requests, and helping others improve their coding skills. It was a fantastic learning experience.</p>
           <div className="shot-language">
            <span>UI</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Java</span>
            <span>Git/GitHub</span>
            <span>React.js</span>
           </div>
          </div>
        </div>

        <div className="experience">
          <div className="year">2021-2024</div>
          <div className="description">
            <h3>Theater Club DITU<span className='arrow'><FiArrowUpRight/></span></h3>
            <h4>Head of Scripting Team</h4>
            <h4>Artist</h4>
            <p>My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
           <div className="shot-language">
            <span>Acting</span>
            <span>Writing</span>
            <span>Scripting</span>
            <span>Screenplay</span>
           </div>
          </div>
        </div>
        </section>
     );
}

export default Experience;