import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <img
             className="header__logo"
             src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" alt=""/>
             </div>

             <div className="header__input">
             <input placeholder="Search" type="text" />
             <SearchIcon className="header__inputButton"/>
             </div>

             <div className="header__icons">
             <VideoCallIcon className="header__icon"/>
             <AppsIcon className="header__icon"/>
             <NotificationsIcon className="header__icon"/>
             <Avatar 
             alt="Virat"
             src="https://upload.wikimedia.org/wikipedia/commons/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg"/>
             </div>
        </div>
    )
}

export default Header
