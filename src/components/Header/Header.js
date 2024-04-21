import {BagIcon, BurgerIcon, HeartIcon, ProfileIcon} from "../../ui-kit/icons";
import logo from '../../../src/assets/Images/Logo.svg';
import coffee from '../../../src/assets/Images/cofee-table.png';
import rect from '../../../src/assets/Images/Rectangle.png';

const Header = () => {
    const handleClickChay = () => {
        alert('Чай');
    }
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
            <div className="navigation">
                <img id="coffee-table" src={coffee} alt="cofee-table"/>
                <div className="textforheader flexcolumtext">
                    <h3 id="h3" className="colorfortext">Всегда рады Вас видеть в Jasmine Dragon</h3>
                    <h1 id="h1" className="colorfortext">Где чай расскажет вам историю вкуса</h1>
                    <p id="ptext" className="colorfortext">Добро пожаловать в нашу уютную чайную лавку, где каждая
                        чашечка - это история вкуса и аромата. Мы предлагаем широкий выбор классических сортов и
                        уникальных ароматизированных смесей, чтобы угодить вашему вкусу и удовлетворить любые чайные
                        желания.</p>
                    <div className="positforbutt2">
                        <button onClick={handleClickChay} className="button3" id="button2">Чаи</button>
                        <button className="button3">Посуда</button>
                    </div>

                </div>
                <img id="widthforpic" src={rect} alt="bigphoto"/>
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Header;