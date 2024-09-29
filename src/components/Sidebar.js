import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Box, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      className="sidebar-drawer" // Custom CSS class
    >
      <Toolbar />
      <Box className="sidebar-box">
        <List>
          <ListItem button component={Link} to="/dashboard" className="sidebar-item">
            <ListItemIcon>
              <DashboardIcon className="sidebar-icon" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button component={Link} to="/buses" className="sidebar-item">
            <ListItemIcon>
              <DirectionsBusIcon className="sidebar-icon" />
            </ListItemIcon>
            <ListItemText primary="Manage Buses" />
          </ListItem>

          <ListItem button component={Link} to="/routes" className="sidebar-item">
            <ListItemIcon>
              <MapIcon className="sidebar-icon" />
            </ListItemIcon>
            <ListItemText primary="Manage Routes" />
          </ListItem>

          <ListItem button component={Link} to="/drivers" className="sidebar-item">
            <ListItemIcon>
              <PeopleIcon className="sidebar-icon" />
            </ListItemIcon>
            <ListItemText primary="Manage Drivers" />
            </ListItem>

            <ListItem button component={Link} to="/conductors" className="sidebar-item">
            <ListItemIcon>
              <PeopleIcon className="sidebar-icon" />
            </ListItemIcon>
            <ListItemText primary="Manage Conductors" />
          </ListItem>

          <ListItem button component={Link} to="/passenger" className="sidebar-item">
            <ListItemIcon>
              <PeopleIcon className="sidebar-icon" />
            </ListItemIcon>
            <ListItemText primary="Manage Passenger" />
          </ListItem>


        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
