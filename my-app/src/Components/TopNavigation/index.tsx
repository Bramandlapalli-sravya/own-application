import React from "react";
import { Link, useLocation } from "react-router-dom"; //@ts-ignore
import logo from '../../images/logo.png';
//@ts-ignore
import profile from '../../images/profile-pic.svg';
import { TopNavigationStyles } from "../TopNavigation/styles.ts";


function TopNavigation() {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
            <TopNavigationStyles>
                <div className="header">
                    <div className="sub-header">
                        <img src={logo} alt="logo" width={40} height={40} style={{ borderRadius: 100 }} />
                        <div className='sub-items'>
                            {navItems.map((item) => {
                                const isSelected = location.pathname === item.path;
                                return (
                                    <Link to={item.path} key={item.name} className={`item ${isSelected ? 'selected' : ''} text-3xl font-bold underline`}>
                                        <h1>{item.name}</h1>
                                    </Link>)
                            })}
                        </div>
                    </div>
                    <div className="profile-details">
                        <img src={profile} alt="profile" width={30} height={30} />
                        <p className="user-name">Sravya</p>
                    </div>
                </div>
            </TopNavigationStyles>
    );
}

export default TopNavigation;