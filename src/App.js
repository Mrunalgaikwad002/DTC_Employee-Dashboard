import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed Switch
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './components/Sidebar';
import DashboardPage from './components/DashboardPage';  // Import your components
import Navbar from './components/Navbar';  // Navbar component
import ManageBusesPage from './components/ManageBusesPage';
import ManageRoutesPage from './components/ManageRoutesPage'; // Manage routing
import ManageDriversPage from './components/ManageDriversPage';
import ManagePassengerPage from './components/ManagePassengerPage';
import ManageConductorsPage from './components/ManageConductorsPage';
import LandingPage from './components/LandingPage';
import EmployeeProfilePage from './components/EmployeeProfilePage';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        {/* Navbar */}
        <Navbar />
        
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content area */}
        <div style={{ flexGrow: 1, marginTop: '64px' }}>
          <Routes>  {/* Use Routes instead of Switch */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/buses" element={<ManageBusesPage />} />
            <Route path="/routes" element={<ManageRoutesPage />} />
            <Route path="/drivers" element={<ManageDriversPage />} />
            <Route path="/passenger" element={<ManagePassengerPage />} />
            <Route path="/conductors" element={<ManageConductorsPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<EmployeeProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
