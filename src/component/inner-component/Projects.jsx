import {HiMiniArrowTrendingUp} from 'react-icons/hi2';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import blog from '../img/blog.jpg';
import spotify from '../img/spotify.jpg';
import store from '../img/store.jpg';
import weather from '../img/weather.jpg';

function Projects() {
    return ( 
        <section className="project-section" id='project'>
        <div className="only-experience">
        <h4>PROJECTS</h4>
        </div>
        <div className="experience">
          <div className="project-image">
          <img className="img"src={blog} alt='Blogging Website'/>
          </div>
          <div className="description">
          <a href='https://github.com/HJoshi012802/Blogit-'><h3>Build a Blogging Website<span className='arrow'><HiMiniArrowTrendingUp/></span></h3></a>
            <h4>Fullstack Project</h4>
            <p>Developed and Implemented RESTful API using Express JS. Designed an interactive and responsive user interface utilizing Tailwind CSS and React JS. Utilized MongoDB to store user data, facilitating blog content creation, reading, and editing.</p>
           <div className="shot-language">
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>ReactJS</span>
            <span>NodeJS</span>
            <span>Tailwind</span>
           </div>
           <div className="image">
          <img className="img"src={blog} alt='Blogging Website'/>
          </div>
           <div className='bookmark-icon'><BsFillBookmarkStarFill/></div>
          </div>
        </div>

        <div className="experience">
          <div className="project-image">
            <img className="img"src={spotify} alt='Spotify Clone'/>
          </div>
          <div className="description">
            <a href='https://github.com/HJoshi012802/Spotify-Clone-using-Spotify-API'><h3>Spotify App using Spotify API<span className='arrow'><HiMiniArrowTrendingUp/></span></h3></a>
            <h4>Frontend Project</h4>
            <p>Created a Web App to fetch user Weekly Discovery Playlists from the Spotify API. Utilized Context-API to eliminate prop-drilling.</p>
           <div className="shot-language">
            <span>ReactJS</span>
            <span>CSS</span>
            <span>Spotify API</span>
            <span>React Context API</span>
           </div>
           <div className="image">
          <img className="img"src={spotify} alt='Spotify Clone'/>
          </div>
          </div>
        </div>

        <div className="experience">
          <div className="project-image">
            <img className="img"src={store} alt='Store API'/>
          </div>
          <div className="description">
            <a href='https://github.com/HJoshi012802/Store-API'><h3>Store API<span className='arrow'><HiMiniArrowTrendingUp/></span></h3></a>
            <h4>Backend Project</h4>
            <p>Developed a Home Decor Store API using Node.js, Express, and MongoDB, with Postman aiding API development and testing. Key components include controllers, db, middleware, models, and routes.</p>
           <div className="shot-language">
            <span>NodeJS</span>
            <span>ExpressJS</span>
            <span>MongoDB</span>
            <span>Postman</span>
           </div>
           <div className="image">
          <img className="img"src={store} alt='Store API'/>
          </div>
           <div className='bookmark-icon'><BsFillBookmarkStarFill/></div>
          </div>
        </div>

        <div className="experience">
          <div className="project-image">
            <img className="img"src={weather} alt='Open Weather App'/>
          </div>
          <div className="description">
            <a href='https://github.com/HJoshi012802/Open-Weather-App'><h3>Open Weather App<span className='arrow'><HiMiniArrowTrendingUp/></span></h3></a> 
            <h4>Frontend Project</h4>
            <p>Developed a weather forecasting website with real-time data from Open Weather Map API, featuring error handling for user-friendliness.</p>
           <div className="shot-language">
            <span>ReactJS</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Axion</span>
           </div>
           <div className="image">
          <img className="img"src={weather} alt='Open Weather App'/>
          </div>
          </div>
        </div>
      </section>
     );
}

export default Projects;