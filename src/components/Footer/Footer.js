import logo from '../../assets/Images/Logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footercontainer">
                <div className="footerblock1">
                    <div className="footerbegginning">
                        <img src={logo} alt="logo"/>
                        <p className="jasminedragonheader">Jasmine Dragon</p>
                    </div>
                    <div className="sec1footer">
                        <h3 className="h3footer">Оставайтесь на связи</h3>
                        <p className="pfooter">Подпишитесь и получайте последние актуальные новости и акции от вашей
                            любимой
                            чайной Jasmine Dragon</p>
                        <div className="knopki">
                            <input className="inputfooter" placeholder="Введите ваш e-mail" type="text" id="email"
                                   name="email"/>
                            <button className="buttonfooter">Подписаться</button>
                        </div>
                    </div>
                    <div className="svgfooter">
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2346)">
                                <path
                                    d="M18 0.491211C8.05896 0.491211 0 8.55017 0 18.4912C0 26.9325 5.81184 34.0159 13.6519 35.9613V23.992H9.94032V18.4912H13.6519V16.121C13.6519 9.99449 16.4246 7.15481 22.4395 7.15481C23.58 7.15481 25.5478 7.37873 26.3527 7.60193V12.5879C25.9279 12.5433 25.1899 12.521 24.2734 12.521C21.3221 12.521 20.1816 13.6391 20.1816 16.5458V18.4912H26.0611L25.051 23.992H20.1816V36.3595C29.0945 35.2831 36.0007 27.6943 36.0007 18.4912C36 8.55017 27.941 0.491211 18 0.491211Z"
                                    fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2346">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.4894 3.34668H32.5496L21.4946 15.9819L34.5 33.1756H24.3169L16.3411 22.7477L7.21492 33.1756H2.15165L13.9762 19.6608L1.5 3.34668H11.9417L19.1511 12.8782L27.4894 3.34668ZM25.7135 30.1468H28.5174L10.4181 6.21638H7.40919L25.7135 30.1468Z"
                                fill="#B5EAEE"/>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2348)">
                                <path
                                    d="M18 3.73262C22.8094 3.73262 23.3789 3.75371 25.2703 3.83809C27.0281 3.91543 27.9773 4.21074 28.6102 4.45684C29.4469 4.78027 30.0516 5.17402 30.6773 5.7998C31.3102 6.43262 31.6969 7.03027 32.0203 7.86699C32.2664 8.4998 32.5617 9.45605 32.6391 11.2068C32.7234 13.1053 32.7445 13.6748 32.7445 18.4771C32.7445 23.2865 32.7234 23.8561 32.6391 25.7475C32.5617 27.5053 32.2664 28.4545 32.0203 29.0873C31.6969 29.924 31.3031 30.5287 30.6773 31.1545C30.0445 31.7873 29.4469 32.174 28.6102 32.4975C27.9773 32.7436 27.0211 33.0389 25.2703 33.1162C23.3719 33.2006 22.8023 33.2217 18 33.2217C13.1906 33.2217 12.6211 33.2006 10.7297 33.1162C8.97188 33.0389 8.02266 32.7436 7.38984 32.4975C6.55313 32.174 5.94844 31.7803 5.32266 31.1545C4.68984 30.5217 4.30312 29.924 3.97969 29.0873C3.73359 28.4545 3.43828 27.4982 3.36094 25.7475C3.27656 23.849 3.25547 23.2795 3.25547 18.4771C3.25547 13.6678 3.27656 13.0982 3.36094 11.2068C3.43828 9.44902 3.73359 8.4998 3.97969 7.86699C4.30312 7.03027 4.69688 6.42559 5.32266 5.7998C5.95547 5.16699 6.55313 4.78027 7.38984 4.45684C8.02266 4.21074 8.97891 3.91543 10.7297 3.83809C12.6211 3.75371 13.1906 3.73262 18 3.73262ZM18 0.491211C13.1133 0.491211 12.5016 0.512305 10.582 0.59668C8.66953 0.681055 7.35469 0.99043 6.21563 1.4334C5.02734 1.89746 4.02188 2.50918 3.02344 3.51465C2.01797 4.51309 1.40625 5.51855 0.942188 6.6998C0.499219 7.8459 0.189844 9.15371 0.105469 11.0662C0.0210938 12.9928 0 13.6045 0 18.4912C0 23.3779 0.0210938 23.9896 0.105469 25.9092C0.189844 27.8217 0.499219 29.1365 0.942188 30.2756C1.40625 31.4639 2.01797 32.4693 3.02344 33.4678C4.02188 34.4662 5.02734 35.085 6.20859 35.542C7.35469 35.985 8.6625 36.2943 10.575 36.3787C12.4945 36.4631 13.1062 36.4842 17.993 36.4842C22.8797 36.4842 23.4914 36.4631 25.4109 36.3787C27.3234 36.2943 28.6383 35.985 29.7773 35.542C30.9586 35.085 31.9641 34.4662 32.9625 33.4678C33.9609 32.4693 34.5797 31.4639 35.0367 30.2826C35.4797 29.1365 35.7891 27.8287 35.8734 25.9162C35.9578 23.9967 35.9789 23.385 35.9789 18.4982C35.9789 13.6115 35.9578 12.9998 35.8734 11.0803C35.7891 9.16777 35.4797 7.85293 35.0367 6.71387C34.5938 5.51855 33.982 4.51309 32.9766 3.51465C31.9781 2.51621 30.9727 1.89746 29.7914 1.44043C28.6453 0.997461 27.3375 0.688086 25.425 0.603711C23.4984 0.512305 22.8867 0.491211 18 0.491211Z"
                                    fill="#B5EAEE"/>
                                <path
                                    d="M18 9.24512C12.8953 9.24512 8.75391 13.3865 8.75391 18.4912C8.75391 23.5959 12.8953 27.7373 18 27.7373C23.1047 27.7373 27.2461 23.5959 27.2461 18.4912C27.2461 13.3865 23.1047 9.24512 18 9.24512ZM18 24.4889C14.6883 24.4889 12.0023 21.8029 12.0023 18.4912C12.0023 15.1795 14.6883 12.4936 18 12.4936C21.3117 12.4936 23.9977 15.1795 23.9977 18.4912C23.9977 21.8029 21.3117 24.4889 18 24.4889Z"
                                    fill="#B5EAEE"/>
                                <path
                                    d="M29.7703 8.8793C29.7703 10.0746 28.8 11.0379 27.6117 11.0379C26.4164 11.0379 25.4531 10.0676 25.4531 8.8793C25.4531 7.68399 26.4234 6.7207 27.6117 6.7207C28.8 6.7207 29.7703 7.69102 29.7703 8.8793Z"
                                    fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2348">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2349)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M36 18.4912C36 28.4323 27.9411 36.4912 18 36.4912C8.05888 36.4912 0 28.4323 0 18.4912C0 8.55009 8.05888 0.491211 18 0.491211C27.9411 0.491211 36 8.55009 36 18.4912ZM18.645 13.7796C16.8943 14.5078 13.3952 16.015 8.14784 18.3012C7.29575 18.64 6.84939 18.9715 6.80875 19.2957C6.74008 19.8435 7.42607 20.0592 8.3602 20.3529C8.48727 20.3928 8.61893 20.4342 8.75391 20.4781C9.67296 20.7769 10.9092 21.1264 11.5519 21.1403C12.1349 21.1529 12.7856 20.9125 13.504 20.4192C18.4067 17.1097 20.9376 15.4369 21.0965 15.4009C21.2086 15.3754 21.3639 15.3434 21.4691 15.437C21.5744 15.5305 21.5641 15.7077 21.5529 15.7552C21.4849 16.0449 18.7922 18.5484 17.3987 19.8439C16.9643 20.2478 16.6561 20.5342 16.5931 20.5997C16.452 20.7462 16.3082 20.8849 16.17 21.0181C15.3162 21.8412 14.6759 22.4584 16.2054 23.4664C16.9405 23.9508 17.5286 24.3513 18.1154 24.7509C18.7563 25.1873 19.3954 25.6226 20.2224 26.1647C20.4331 26.3028 20.6343 26.4463 20.8303 26.586C21.5761 27.1177 22.2461 27.5953 23.0739 27.5192C23.5549 27.4749 24.0517 27.0226 24.304 25.6737C24.9003 22.4859 26.0724 15.5789 26.3433 12.7327C26.3671 12.4833 26.3372 12.1642 26.3132 12.0241C26.2893 11.884 26.2392 11.6844 26.057 11.5366C25.8414 11.3616 25.5085 11.3247 25.3595 11.3273C24.6825 11.3393 23.6438 11.7004 18.645 13.7796Z"
                                      fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2349">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_96_2350)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.5306 3.02181C0 5.55241 0 9.62531 0 17.7712V19.2112C0 27.3571 0 31.43 2.5306 33.9606C5.06119 36.4912 9.1341 36.4912 17.28 36.4912H18.72C26.8659 36.4912 30.9388 36.4912 33.4694 33.9606C36 31.43 36 27.3571 36 19.2112V17.7712C36 9.62531 36 5.55241 33.4694 3.02181C30.9388 0.491211 26.8659 0.491211 18.72 0.491211H17.28C9.1341 0.491211 5.06119 0.491211 2.5306 3.02181ZM6.07509 11.4413C6.27009 20.8013 10.9501 26.4263 19.1551 26.4263H19.6201V21.0713C22.6352 21.3713 24.915 23.5763 25.83 26.4263H30.0901C28.9201 22.1663 25.8449 19.8113 23.9249 18.9113C25.8449 17.8013 28.5449 15.1013 29.1899 11.4413H25.3199C24.4799 14.4113 21.9902 17.1113 19.6201 17.3663V11.4413H15.75V21.8213C13.35 21.2213 10.3201 18.3113 10.1851 11.4413H6.07509Z"
                                      fill="#B5EAEE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_96_2350">
                                    <rect width="36" height="36" fill="white" transform="translate(0 0.491211)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="knopkifooter">
                    <button className="footerbutton">01 <span className="viborka">О нас</span></button>
                    <button className="footerbutton">02 <span className="viborka">Меню</span></button>
                    <button className="footerbutton">03 <span className="viborka">Магазин</span>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.25 13.9902L18 25.2402L6.75 13.9902" stroke="#B5EAEE" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="pospodknopki">
                        <button className="podknopki">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 2.74023V5.74023" stroke="#B5EAEE" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M11.25 2.74023V5.74023" stroke="#B5EAEE" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M14.25 2.74023V5.74023" stroke="#B5EAEE" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M3 20.7402H19.5" stroke="#B5EAEE" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M7.80938 20.7402C6.37394 20.0816 5.15773 19.0247 4.3052 17.6953C3.45268 16.3658 2.99968 14.8196 3 13.2402V8.74023H19.5V13.2402C19.5003 14.8196 19.0473 16.3658 18.1948 17.6953C17.3423 19.0247 16.1261 20.0816 14.6906 20.7402"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M19.5004 8.74023C20.296 8.74023 21.0591 9.0563 21.6217 9.61891C22.1843 10.1815 22.5004 10.9446 22.5004 11.7402V12.4902C22.5004 13.2859 22.1843 14.0489 21.6217 14.6116C21.0591 15.1742 20.296 15.4902 19.5004 15.4902H19.1816"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="pfooter">Посуда</span>
                        </button>
                    </div>
                    <div className="pospodknopki">
                        <button className="podknopki">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 19.24C13.5 19.24 15.9844 19.2212 18.8344 17.5712C21.6844 15.9212 22.6125 13.8681 22.9031 12.8087C22.9299 12.7133 22.9372 12.6135 22.9247 12.5151C22.9122 12.4168 22.8801 12.322 22.8302 12.2363C22.7804 12.1507 22.7139 12.0759 22.6346 12.0164C22.5553 11.9569 22.4649 11.9139 22.3688 11.89C21.6844 11.7119 20.4844 11.5525 18.9469 11.9181"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M5.05408 11.9094C3.51658 11.5531 2.31658 11.7125 1.63221 11.8906C1.53602 11.9146 1.44562 11.9575 1.36635 12.017C1.28708 12.0765 1.22056 12.1513 1.17073 12.237C1.1209 12.3227 1.08877 12.4175 1.07625 12.5158C1.06373 12.6141 1.07107 12.714 1.09783 12.8094C1.38846 13.8688 2.31658 15.9313 5.16658 17.5719C8.01658 19.2125 10.501 19.2406 12.001 19.2406"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M12 19.2403C12 19.2403 15.75 17.1965 15.75 11.7403C15.75 7.46527 13.4438 5.29027 12.45 4.54027C12.3196 4.44433 12.1619 4.39258 12 4.39258C11.8381 4.39258 11.6804 4.44433 11.55 4.54027C10.5562 5.29027 8.25 7.46527 8.25 11.7403C8.25 17.1965 12 19.2403 12 19.2403Z"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M12 19.2405C13.125 18.9967 16.1531 17.2905 17.9719 14.1405C19.7906 10.9905 19.3406 8.48734 18.9844 7.39046C18.9299 7.21405 18.8107 7.06479 18.6507 6.97262C18.4907 6.88046 18.3018 6.85223 18.1219 6.89359C17.0455 7.13466 16.0385 7.6189 15.1781 8.30921"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M8.82139 8.30921C7.96101 7.6189 6.95405 7.13466 5.87764 6.89359C5.6977 6.85223 5.50878 6.88046 5.3488 6.97262C5.18882 7.06479 5.06962 7.21405 5.01514 7.39046C4.65889 8.48734 4.20889 10.9998 6.02764 14.1405C7.84639 17.2811 10.8745 18.9967 11.9995 19.2405"
                                    stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="pfooter">Чай на развес</span>
                        </button>
                    </div>
                    <button className="footerbutton">04 <span className="viborka">Корзина</span></button>
                </div>
                <div>
                    <div className="knopkifooter">
                        <button className="footerbutton">05 <span className="viborka">Профиль</span></button>
                        <button className="footerbutton">06 <span className="viborka">Избранное</span></button>
                        <button className="footerbutton">07 <span className="viborka">Карьера</span></button>
                        <button className="footerbutton">08 <span className="viborka">Контакты</span></button>
                        <button className="footerbutton">09 <span className="viborka">Язык</span><span
                            className="language">Ру<svg
                            className="aligncenter" width="25" height="25" viewBox="0 0 25 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 4.99023L17 12.4902L9.5 19.9902" stroke="#B5EAEE" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round"/>
</svg>
 </span></button>
                    </div>
                </div>
            </div>
            <div className="final">
                <p className="pfooter">All rights are reserved by <a href="https://sterrasoft.com"
                                                                     target="_blank" rel="noreferrer">S-Terra-Soft</a></p>
                <div className="gap50">
                    <a className="linkfooter" href="index.html">Политика приватности</a>
                    <a className="linkfooter" href="index.html">Условия использования</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;