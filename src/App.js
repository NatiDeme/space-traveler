import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import MyProfile from './components/my-profile/MyProfile';

import Missions from './components/missions/Missions';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
