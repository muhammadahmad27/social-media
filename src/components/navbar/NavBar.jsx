import React, { useContext } from 'react'
import './navBar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

export default function NavBar() {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:'none'}}>
          <span>Social</span>
        </Link>
          
        <Link to="/" style={{textDecoration:'none', color: 'inherit'}}>
          <HomeOutlinedIcon />
        </Link>
        {darkMode ? 
         <WbSunnyOutlinedIcon onClick={toggle} /> :
        <DarkModeOutlinedIcon onClick={toggle} /> 
         }
        <GridViewOutlinedIcon />

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className="user">
              
          <Link to={`/profile/${currentUser.id}`} style={{textDecoration:'none'}}>
          <img src={currentUser.profilePic} alt="" /> 
          </Link>         
          <Link to={`/profile/${currentUser.id}`} style={{textDecoration:'none', color: 'inherit'}}>
              <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
