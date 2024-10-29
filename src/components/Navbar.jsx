import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <AppBar position='static' className="AppBar">
      <Toolbar className="toolbar">
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Button color='inherit' component={Link} to='/'>Home</Button>
        <Button color='inherit' component={Link} to='/projects'>Projects</Button>
        <Button color='inherit' component={Link} to='/contact'>Contact Us</Button>
        <IconButton color='inherit' href='https://github.com'>
          <GitHub />
        </IconButton>
        <IconButton color='inherit' href='https://linkedin.com'>
          <LinkedIn />
        </IconButton>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
