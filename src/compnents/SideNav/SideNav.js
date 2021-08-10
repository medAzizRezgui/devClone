import React, { useContext } from 'react'
import './SideNav.scss'
import ClearIcon from '@material-ui/icons/Clear';
import Aux from 'react-aux';
import sideNavContext from '../../context/SideNav Context/sidenav-context';
function SideNav() {
    const { show, setShow } = useContext(sideNavContext)
    return (
        <Aux>
            <div onClick={() => setShow(false)}
                className="side__modal"></div>
            <div className='side__nav'>

                <div className="menu">
                    <h2 className="title">Dev Community</h2>
                    <ClearIcon
                        onClick={() => setShow(false)}
                        className={'close__icon  '}></ClearIcon>
                </div>
                <ul className="nav__list">
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/619/619032.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>Home</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/3532/3532127.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>Reading List</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/4714/4714755.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>Listings</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/2628/2628834.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>Podcast</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/5266/5266304.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>Videos</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/3721/3721907.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>Tags</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/544/544570.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>FAQ</p>
                    </li>
                    <li>
                        <img src="https://image.flaticon.com/icons/png/512/743/743007.png" alt="" className={'nav__icon'} />
                        <p className={'nav__text'}>DEV Shop</p>
                    </li>
                </ul>
            </div>
        </Aux>

    )
}

export default SideNav
