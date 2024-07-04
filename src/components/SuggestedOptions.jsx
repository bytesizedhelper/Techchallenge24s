import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import "../styles/LandingPage.scss";
import "../styles/AuctionCard.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// Dummy data
const dummyData = [
  {
    id: 1,
    time: "25 mins",
    title: "Free-barrier route",
    specs: [
      { name: "10:00 - 10:10 | S-Bahn", description: "Free Exit " },
      { name: "10:15 - 10:25 | Bus", description: "Free Exit" },
      { name: "10:25 - 10:30 | Accessibile Routes", description: "Free Exit" } 
    ]
  },
  {
    id: 2,
    time: "35 mins",
    title: "A Minor Barrier route",
    specs: [
      { name: "10:00 - 10:10 | S-Bahn", description: "Free Exit " },
      { name: "10:15 - 10:25 | Bus", description: "Small way" },
      { name: "10:25 - 10:30 | Accessibile Routes", description: "Free Exit" } 
    ]
  },
  {
    id: 42,
    time: "35 mins",
    title: "No Barrier Route",
    specs: [
      { "name": "12:00 - 12:10 | U-Bahn", "description": "Free Exit" },
      { "name": "12:10 - 12:15 | Tram", "description": "Accessible Routes" },
      { "name": "12:15 - 12:30 | Bus", "description": "Free Exit" }
    ]
  },
  {
    id: 28,
    time: "40 mins",
    title: "A Minor Barrier Route",
    specs: [
      { "name": "07:30 - 07:40 | U-Bahn", "description": "Exit with escalators" },
      { "name": "07:40 - 07:45 | Tram", "description": "Small way" },
      { "name": "07:45 - 08:10 | S-Bahn", "description": "Free Exit" }
    ]
  },
  {
    id: 32,
    time: "40 mins",
    title: "A Free Barrier Route",
    specs: [
      { "name": "08:45 - 09:00 | S-Bahn", "description": "Free Exit" },
      { "name": "09:00 - 09:25 | U-Bahn", "description": "Free Exit" }
    ]
  }


  // Add more dummy data as needed
];

// SuggestedOptions component
function SuggestedOptions({ time, title, specs }) {
 const navigate = useNavigate(); // Initialize navigate 

  const handleClick = () => {
    navigate("/mapview");     
    
    console.log(`Clicked on ${title}`);
  };

  return (
    <Box className="option-container" onClick={handleClick}>
      <Box className="auction-card">
        <Box className="header">
          <Box className="image-container">{time}</Box>
          <Box className="details">
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Box className="info">
                  <Typography className="car-title" component="div" variant="h5">
                    {title}
                  </Typography>
                  <Box className="car-specs">
                    {specs.map((spec, index) => (
                      <Box key={index} className="spec-item">
                        <Box className="dot"></Box>
                        <Box className="spec-content">
                          <Typography className="spec-name">{spec.name}</Typography>
                          {spec.description && (
                            <Typography className="spec-description">{spec.description}</Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Main component to display list of options
function SuggestedOptionsList() {
  return (
    <div>
         <div className="breadcrumb">
         <a href="/AddYourJourney">
        <ArrowBackIosIcon /> Go back to Add Your Journey</a>
      </div>
      <div className="pageHeading">Suggested Options</div>
      {dummyData.map((option) => (
        <SuggestedOptions
          key={option.id}
          time={option.time}
          title={option.title}
          specs={option.specs}
        />
      ))}
    </div>
    
  );
}

export default SuggestedOptionsList;
