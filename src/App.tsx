import { FC, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Main from './main';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const navItems = ['Home', 'Counter', 'Movies', 'Favorites'];

const App: FC = () => {  

  return (
    <Box display='flex'>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>          
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movies
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (              
              <Button 
                key={item} 
                sx={{ color: '#fff' }}
                component={Link}
                to={'/' + item}
              >
                {item}
              </Button>              
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <div className="App">      
        <div>          
          <Main />
        </div>      
      </div>
    </Box>
  )
}

export default App
