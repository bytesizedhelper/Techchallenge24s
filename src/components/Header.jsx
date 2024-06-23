import React  from "react";
import logo from "../images/logo.png";
import { Link  } from "react-router-dom";
import { Box  } from "@mui/material"; 
import "../styles/Header.scss";

function Header() {
  
  
  return (
    
      <Box display="flex" justifyContent="space-center" alignItems="center" margin ="20px 20px">
        <Link to="/">
          <Box component="img" src={logo} alt="" height="48px" />
        </Link>
        
      </Box>

  );
}

 
export default Header;
