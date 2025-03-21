import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mentor Connect
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/find-mentor">
            Find Mentor
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>

          {/* Light/Dark Mode Toggle */}
          <IconButton onClick={toggleDarkMode} color="inherit" sx={{ mx: 1 }}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Login Button */}
          <Button color="inherit" component={Link} to="/login" variant="outlined">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
