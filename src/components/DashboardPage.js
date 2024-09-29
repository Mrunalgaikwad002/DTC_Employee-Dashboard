import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Grid, Box } from '@mui/material';
import './DashboardPage.css';  // Ensure this path is correct

const fetchUserRole = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("employee");
    }, 500);
  });
};

const DashboardPage = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const getUserRole = async () => {
      const userRole = await fetchUserRole();
      setRole(userRole);
    };
    getUserRole();
  }, []);

  return (
    <Box className="dashboard-container">
      <Typography variant="h4" className="dashboard-title">
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card bus-card">
            <CardContent>
              <Typography variant="h6">Total Buses</Typography>
              <Typography variant="h3" className="card-value">3,500</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className="card route-card">
            <CardContent>
              <Typography variant="h6">Active Routes</Typography>
              <Typography variant="h3" className="card-value">450</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className="card crew-card">
            <CardContent>
              <Typography variant="h6">Registered Crew</Typography>
              <Typography variant="h3" className="card-value">300</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="performance-section">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card performance-card">
            <CardContent>
              <Typography variant="h6">Bus Performance</Typography>
              <Typography variant="h3" className="card-value">95%</Typography>
              <Typography>On-time percentage</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className="card feedback-card">
            <CardContent>
              <Typography variant="h6">Passenger Feedback</Typography>
              <Typography variant="h3" className="card-value">4.2</Typography>
              <Typography>Average Rating</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;