import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyProfile from './components/my-profile/MyProfile';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
