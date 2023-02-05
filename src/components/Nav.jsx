import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.png'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  
  '&:hover': {

  },
  
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    width: '20rem',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:"black"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{
        "backgroundColor":"#0E0E0E"
      }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
           <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={logo}
        />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{"fontFamily": 'Inter',  mr: 4 , display: { xs: 'none', sm: 'block' }, 'font-weight': '400' }}
          >
            Home
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{"fontFamily": 'Inter',  mr: 4 , display: { xs: 'none', sm: 'block' }, 'font-weight': '400'  }}
          >
            About
          </Typography>

          <Search sx = {{
            "backgroundColor":"#ADFF45",
            "marginLeft":'auto',
            'font-weight': '400' 
            
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export {Nav}