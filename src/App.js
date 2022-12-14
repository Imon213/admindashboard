import './App.css'
import MainDash from './MainDash/MainDash';
import RightSide from './RightSide/RightSide';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="App-glass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
    </div>
  );
}

export default App;
