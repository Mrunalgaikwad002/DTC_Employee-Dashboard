import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DirectionsBus } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';




const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorProfileEl, setAnchorProfileEl] = useState(null);
  const navigate = useNavigate();

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = (event) => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleViewProfile = () => {
    navigate('/profile');  // Navigate to /profile
    handleProfileClose();      // Close the profile dropdown
  };

  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

 

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#1976d2',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Toolbar>
        {/* Bus icon */}
        <DirectionsBus sx={{ mr: 2, fontSize: 30 }} />
        
        {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          DTC Bus Management System
        </Typography>
        
        {/* Notification bell */}
        <IconButton size="large" color="inherit" onClick={handleNotificationClick}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Notification Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleNotificationClose}
        >
          <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
          <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
          <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
          <MenuItem onClick={handleNotificationClose}>Notification 4</MenuItem>
          <MenuItem onClick={handleNotificationClose}>Notification 5</MenuItem>
        </Menu>

        {/* Account Icon */}
        <IconButton size="large" color="inherit" onClick={handleProfileClick}>
          <AccountCircle />
        </IconButton>

        {/* Profile Dropdown */}
        <Menu
          anchorEl={anchorProfileEl}
          open={Boolean(anchorProfileEl)}
          onClose={handleProfileClose}
        >
          <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
          <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
