import React, { useState } from 'react'
import './Navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'

export default function Navbar() {
    const[isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

  return (
    <>
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
    <div className="NavbarContainer">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix-2015-logo.svg.png" alt="" className="" />
            <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>

        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="/src/assets/bg.jpg" alt="" />
        <div className="profile">
        <ArrowDropDown className='icon'/>
        <div className="options">
            <span>Settings</span>
            <span>LogOut</span>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
