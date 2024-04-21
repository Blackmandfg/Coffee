const Filters = () => {
    return (
        <div className="sortirovka">
            <div className="row1sort">
                <svg id="svgsec3" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.94703 4.5H20.0533C20.1988 4.50005 20.3411 4.5424 20.4629 4.62191C20.5847 4.70141 20.6808 4.81463 20.7395 4.94777C20.7981 5.08092 20.8167 5.22824 20.7931 5.37179C20.7695 5.51533 20.7046 5.64891 20.6064 5.75625L14.447 12.5344C14.3188 12.6716 14.2483 12.8529 14.2502 13.0406V18.3469C14.2513 18.4715 14.221 18.5944 14.162 18.7042C14.103 18.814 14.0172 18.9072 13.9127 18.975L10.9127 20.9719C10.8001 21.046 10.6697 21.0884 10.5351 21.0947C10.4005 21.101 10.2667 21.0709 10.1477 21.0076C10.0288 20.9443 9.92908 20.8501 9.85912 20.7349C9.78916 20.6198 9.75152 20.4879 9.75015 20.3531V13.0406C9.75196 12.8529 9.68147 12.6716 9.55328 12.5344L3.3939 5.75625C3.2957 5.64891 3.23084 5.51533 3.20722 5.37179C3.1836 5.22824 3.20223 5.08092 3.26086 4.94777C3.31948 4.81463 3.41556 4.70141 3.53739 4.62191C3.65922 4.5424 3.80155 4.50005 3.94703 4.5Z"
                        stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="sortmenu">
                    <p className="psortmenu">
                        Сортировка по
                    </p>
                    <button className="row1button" id="paddingfirstbutton">Выгодная цена
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20.25L12 3.75" stroke="#B5EAEE" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M5.25 10.5L12 3.75L18.75 10.5" stroke="#B5EAEE" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="sortmenu">
                    <p className="psortmenu">
                        Показывать по
                    </p>
                    <button className="row1button" id="paddingsecondbutton">24
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20.25L12 3.75" stroke="#B5EAEE" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M5.25 10.5L12 3.75L18.75 10.5" stroke="#B5EAEE" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="thelastsort">
                    <p className="psortmenu">
                        Вид товара:
                    </p>
                    <button className="thelastsvg" id="margin20px">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 6.75H6.75V15.75H15.75V6.75Z" fill="#B5EAEE" stroke="#B5EAEE"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29.25 6.75H20.25V15.75H29.25V6.75Z" fill="#B5EAEE" stroke="#B5EAEE"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.75 20.25H6.75V29.25H15.75V20.25Z" fill="#B5EAEE" stroke="#B5EAEE"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29.25 20.25H20.25V29.25H29.25V20.25Z" fill="#B5EAEE" stroke="#B5EAEE"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="thelastsvg">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.25 20.25H6.75C6.12868 20.25 5.625 20.7537 5.625 21.375V27C5.625 27.6213 6.12868 28.125 6.75 28.125H29.25C29.8713 28.125 30.375 27.6213 30.375 27V21.375C30.375 20.7537 29.8713 20.25 29.25 20.25Z"
                                stroke="#2F4A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M29.25 7.875H6.75C6.12868 7.875 5.625 8.37868 5.625 9V14.625C5.625 15.2463 6.12868 15.75 6.75 15.75H29.25C29.8713 15.75 30.375 15.2463 30.375 14.625V9C30.375 8.37868 29.8713 7.875 29.25 7.875Z"
                                stroke="#2F4A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="row2sortmenu">
                <button className="buttonsec3">Черные чаи
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 5.25L5.25 18.75" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M18.75 18.75L5.25 5.25" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="buttonsec3">Оолонг
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 5.25L5.25 18.75" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M18.75 18.75L5.25 5.25" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="buttonsec3">Черные чаи
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 5.25L5.25 18.75" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M18.75 18.75L5.25 5.25" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="buttonsec3">Красные чаи
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 5.25L5.25 18.75" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M18.75 18.75L5.25 5.25" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="buttonsec3">Зеленые чаи
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 5.25L5.25 18.75" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M18.75 18.75L5.25 5.25" stroke="#B5EAEE" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Filters;