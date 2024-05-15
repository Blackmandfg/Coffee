import React from 'react';
import logo from "../../assets/Images/Logo.svg";
import {BagIcon, BurgerIcon, HeartIcon, ProfileIcon} from "../../ui-kit/icons";

const Header = () => {
    return (
        <header>
        <div className="flex flex-row items-center py-4 border-b border-[var(--blue-light)]">
            <div className="flex items-center gap-6">
                <img src={logo} alt="logo"/>
                <p className="flex items-center gap-6 font-[var(--Playfair-Display)] text-2xl text-[var(--blue-light)] leading-relaxed">Jasmine Dragon</p>
            </div>
            <div className="flex items-center ml-[36.5%] gap-6">
                <HeartIcon/>
                <button className="flex items-center gap-4 rounded-3xl pl-6 bg-transparent font-semibold text-lg leading-[130%] text-[var(--blue-light)] border border-[var(--blue-light)] shadow-md">Профиль <ProfileIcon/></button>
                <BagIcon/>
                <div className="absolute w-6 h-6 bg-[var(--blue-light)] rounded-full top-10 left-80">
                    <p className="numberofitems">29</p>
                </div>
            </div>
            <div className="flex items-center justify-center font-[var(--Nunito-sans)] text-xs leading-[130%] text-[var(--blue)] h-6">
                <BurgerIcon/>
                <span>Меню</span>
            </div>
        </div>
</header>
    );
};

export default Header;