import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './views/home.js';
import Register from './views/register.js';
import Login from './views/login.js';
import Welcome from './views/welcome.js';
import Dashboard from './views/dashboard.js';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
