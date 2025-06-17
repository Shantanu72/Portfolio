import col from '../img/collision.jpg';
import react from '../img/react.jpg';
import fun from '../img/fun.jpg';

function Writting() {
    return (
        <div className="write-section">
           <div className="only-experience">
           <h4>WRITTING</h4>
        </div>

           <div className="experience">
          <div className="write-image">
          <img className="img" src={col} alt='Java Hash Collision'/>
          </div>
          <div className="description">
            <h5>JULY 2023</h5>
            <p className='p-town'><a href="https://harshitjoshi2002.hashnode.dev/collisions-hash-fuctions">
            Java Hash Collision Resolution: Key Techniques for Effective Data Structures.
            </a></p> 
          </div>
        </div>

        <div className="experience">
          <div className="write-image">
          <img className="img"src={react} alt='React Context API'/>
          </div>
          <div className="description">
            <h5>JUNE 2023</h5>
            <p className='p-town'><a href='https://harshitjoshi2002.hashnode.dev/how-to-use-react-context-api-for-state-management'>
              Optimize React State Management: Eliminate Prop-Drilling with React Context API.
            </a></p>
          </div>
        </div>

        <div className="experience">
          <div className="write-image">
          <img className="img"src={fun} alt='Computer Science Students'/>
          </div>
          <div className="description">
            <h5>SEPT 2023</h5>
            <p className='p-town'>
              <a href='https://harshitjoshi2002.hashnode.dev/what-not-to-do-as-a-computer-science-student'>
                Top Mistakes to Avoid for Computer Science Student Journey.
              </a></p>
          </div>
        </div>
        
        </div>
      );
}

export default Writting;