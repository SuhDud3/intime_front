import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './views/home.js';
import Register from './views/register.js';
import Login from './views/login.js';
import Welcome from './views/welcome.js';
import Dashboard from './views/dashboard.js';
import Analysis from './views/analysis.js';
import Profile from './views/profile.js';
import Settings from './views/settings.js';
import Expenses from './views/expenses.js';
import Incomes from './views/incomes.js';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Incomes />} />
      </Routes>
  );
}

export default App;
