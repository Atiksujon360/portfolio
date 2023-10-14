import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {/* Add navigation links */}
        <Button color="inherit" href="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
