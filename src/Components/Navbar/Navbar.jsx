import React, { useContext } from 'react'
import './Navbar.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);


    return (
        <>
            <div className="navbar">
                <div className="left">
                    <NavLink to='/' style={{ textDecoration: "none" }}>
                        <span>iAmSocial</span>
                    </NavLink>
                    <HomeRoundedIcon />
                    {!darkMode ? <DarkModeOutlinedIcon onClick={toggle} /> : <WbSunnyOutlinedIcon onClick={toggle} />}
                    <GridViewOutlinedIcon />
                    <div className="search">
                        <SearchOutlinedIcon />
                        <input type="text" placeholder='search...' />
                    </div>
                </div>
                <div className="right">
                    <PersonOutlinedIcon />
                    <EmailOutlinedIcon />
                    <NotificationsOutlinedIcon />
                    <div className="user">
                        <img width='100px' height='100px' src={currentUser.ProfilePic} alt="abc" />
                        <span>{currentUser.name}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
