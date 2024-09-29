import React from 'react';
import './Dashboard.css';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DashboardPage from './DashboardPage';
import ManageBusesPage from './ManageBusesPage';
import ManageRoutesPage from './ManageRoutesPage';
import ManageDriversPage from './ManageDriversPage';
import ManagePassengerPage from './ManagePassengerPage';
import ManageConductorsPage from './ManageConductorsPage';
import EmployeeProfilePage from './EmployeeProfilePage';  // Import the profile page

const Dashboard = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }} className="dashboard">
        <CssBaseline />
        <Navbar className="navbar" />
        <Sidebar className="sidebar" />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} className="main-container">
          <Toolbar />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/buses" element={<ManageBusesPage />} />
            <Route path="/routes" element={<ManageRoutesPage />} />
            <Route path="/drivers" element={<ManageDriversPage />} />
            <Route path="/conductors" element={<ManageConductorsPage />} />
            <Route path="/passenger" element={<ManagePassengerPage />} />
            <Route path="/profile" element={<EmployeeProfilePage />} /> {/* Profile page route */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Dashboard;
