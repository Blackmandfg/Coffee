import React from 'react';
import logo from "../../assets/Images/Logo.svg";
import {BagIcon, BurgerIcon, HeartIcon, ProfileIcon} from "../../ui-kit/icons";

const Header = () => {
    return (
        <header>
        <div id="header">
            <div id="ded">
                <img src={logo} alt="logo"/>
                <p className="jasminedragonheader">Jasmine Dragon</p>
            </div>
            <div id="ded2">
                <HeartIcon/>
                <button id="button1" className="center">Профиль <ProfileIcon/></button>
                <BagIcon/>
                <div id="absolutedot">
                    <p className="numberofitems">29</p>
                </div>
            </div>
            <div id="ded3">
                <BurgerIcon/>
                <span>Меню</span>
            </div>
        </div>
</header>
    );
};

export default Header;