import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Navbar = ({ title, onclick  }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#39aebc !important" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              onClick={onclick}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
           
              <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
          
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
