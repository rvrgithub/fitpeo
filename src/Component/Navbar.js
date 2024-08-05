import React from 'react';
import "../Style/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Avatar } from '@mui/material';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <i>  <SearchIcon className="search-icon" /></i>
            </div>
            <div className="navbar-right">
                <i> <EmailOutlinedIcon className="icon-button" /></i>
                <i>  <SettingsOutlinedIcon className="icon-button" /></i>
                <i> <NotificationsNoneOutlinedIcon className="icon-button" /></i>
                <i><Avatar alt="Cindy Baker" className="icon-button" src="https://hudsondermatology.com/wp-content/uploads/2024/04/Imge-Hulur.jpg" /></i>

            </div>
        </nav>
    );
};

export default Navbar;
