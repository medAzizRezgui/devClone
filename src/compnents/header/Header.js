import React, { useState, useContext } from 'react'
import './header.scss';
import { Link } from 'react-router-dom'
import logo from '../../assets/dev-black.png';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import User from '../../assets/user.jpg';
import SideNav from '../SideNav/SideNav';
import Aux from 'react-aux';
import sideNavContext from '../../context/SideNav Context/sidenav-context';


function Header() {
    const { show, setShow } = useContext(sideNavContext)
    let sideNav = null;
    if (show) {
        sideNav = <SideNav></SideNav>
    }
    else {
        sideNav = null;
    }
    return (

        <Aux>
            {sideNav}
            < div className={'header'} >
                <div className="container">
                    <nav className={'nav'}>
                        <div className={'menu'}>
                            <MenuIcon
                                onClick={() => setShow(true)}
                                className="menu__icon"></MenuIcon>
                            <Link to='/'>
                                <img src={logo} alt="" className='logo__image' />
                            </Link>

                        </div>
                        <div className={'cta-items'}>
                            <SearchIcon
                                className={'cta__icon'}>
                            </SearchIcon
                            >
                            <MessageIcon
                                className="cta__icon">
                            </MessageIcon>

                            <NotificationsIcon
                                className="cta__icon">
                            </NotificationsIcon>
                            <img src={User} alt="" className={'user__image'} />
                        </div>
                    </nav>
                </div>
            </div >

        </Aux>

    )
}

export default Header
