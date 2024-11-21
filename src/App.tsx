import { useContext } from 'react';
import './App.css';
import SideBar from './pages/chat-page/components/side-bar/SideBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App() {

  return (
    <div className="project-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
