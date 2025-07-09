import './style/App.css';
import Sidebar from './component/Sidebar';
import Scroll from './component/Scroll';
import ResumeButton from "./component/inner-component/atomic-component/ResumeButton"
function App() {
  return (
    <div>
    <div className='flex justify-end p-4'>
   <ResumeButton/>
    </div>
    <div className='App'>
      <Sidebar/>
      <Scroll/>
    </div>
    </div>
  );
}


export default App;
