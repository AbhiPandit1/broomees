import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import SignIn from './pages/Signin/Signin';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
