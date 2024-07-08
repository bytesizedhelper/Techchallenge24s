import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Badge, Box } from "@mui/material";
import '../styles/LandingPagee.scss'; // Adjust the path as necessary
// Import images
import image1 from '../images/Garching.jpg';
import image2 from '../images/Munich.jpg';
import image3 from '../images/Unterschleissheim.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LandingPage = () => {
  // Mock data for journeys
  const journeys = [
    { name: 'Go To School Journey', image: image1 },
    { name: 'Home Sweet Home', image: image2 },
    { name: 'Buying Some Food', image: image3 }
  ];

  // Mock data for barrier routes
  const barrierRoutes = [
    { station: 'Station 1', status: 'Closed', alternative: 'Route A' },
    { station: 'Station 2', status: 'Open', alternative: 'Route B' },
    { station: 'Station 3', status: 'Closed', alternative: 'Route C' },
    { station: 'Station 4', status: 'Under Maintenance', alternative: 'Route D' },
    { station: 'Station 5', status: 'Closed', alternative: 'Route E' },
    { station: 'Station 6', status: 'Open', alternative: 'Route F' },
    { station: 'Station 7', status: 'Closed', alternative: 'Route G' },
    { station: 'Station 8', status: 'Under Maintenance', alternative: 'Route H' },
    { station: 'Station 9', status: 'Closed', alternative: 'Route I' },
    { station: 'Station 10', status: 'Open', alternative: 'Route J' },
  ];
  const navigate = useNavigate(); // Initialize navigate 

  const handleClick = () => {
    navigate("/mapview");
  };
  const handleClickAddButton = () => {
    navigate("/landingpage");
  };

  return (
    <Container className="landing-page" maxWidth="md">
      <section className="section">
        <Grid container spacing={2}>
          {/* Regular journey cards */}
          {journeys.map((journey, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ position: 'relative' }}>
              {journey.name === 'Go To School Journey' ? (
                <Box sx={{ position: 'relative' }}>
                  <Card
                    className="journey-card"
                    style={{ backgroundImage: `url(${journey.image})` }}
                    onClick={handleClick}
                  >
                    <div className="overlay"></div>
                    <div className="content">{journey.name}</div>
                  </Card>
                  <Badge
                    badgeContent="Barrier"
                    color="error"
                    
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 24,
                    }}
                  />
                </Box>
              ) : (
                <Card
                  className="journey-card"
                  style={{ backgroundImage: `url(${journey.image})` }}
                  onClick={handleClick}
                >
                  <div className="overlay"></div>
                  <div className="content">{journey.name}</div>
                </Card>
              )}
            </Grid>
          ))}

          {/* Special card for navigation */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="special-card" onClick={handleClickAddButton}>
              <div className="content">Add Your New Journey</div>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section className="section">
        <Typography variant="h6" className="section-title">Barrier routes around your location</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Station</TableCell>
                <TableCell>Current status</TableCell>
                <TableCell>Alternative Route</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {barrierRoutes.map((route, index) => (
                <TableRow key={index}>
                  <TableCell>{route.station}</TableCell>
                  <TableCell>{route.status}</TableCell>
                  <TableCell>{route.alternative}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </Container>
  );
}

export default LandingPage;
