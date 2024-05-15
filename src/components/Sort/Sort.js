import React from 'react';
import { mock3, mock4 } from '../../config/constants';
import Dropdown from '../../ui-kit/Dropdown/Dropdown';
import Dropdownnumbers from '../../ui-kit/Dropdownnumbers/Dropdownnumbers';

const Sort = () => {
    return (
        <div className="row1sort">
        <svg id="svgsec3" width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.94703 4.5H20.0533C20.1988 4.50005 20.3411 4.5424 20.4629 4.62191C20.5847 4.70141 20.6808 4.81463 20.7395 4.94777C20.7981 5.08092 20.8167 5.22824 20.7931 5.37179C20.7695 5.51533 20.7046 5.64891 20.6064 5.75625L14.447 12.5344C14.3188 12.6716 14.2483 12.8529 14.2502 13.0406V18.3469C14.2513 18.4715 14.221 18.5944 14.162 18.7042C14.103 18.814 14.0172 18.9072 13.9127 18.975L10.9127 20.9719C10.8001 21.046 10.6697 21.0884 10.5351 21.0947C10.4005 21.101 10.2667 21.0709 10.1477 21.0076C10.0288 20.9443 9.92908 20.8501 9.85912 20.7349C9.78916 20.6198 9.75152 20.4879 9.75015 20.3531V13.0406C9.75196 12.8529 9.68147 12.6716 9.55328 12.5344L3.3939 5.75625C3.2957 5.64891 3.23084 5.51533 3.20722 5.37179C3.1836 5.22824 3.20223 5.08092 3.26086 4.94777C3.31948 4.81463 3.41556 4.70141 3.53739 4.62191C3.65922 4.5424 3.80155 4.50005 3.94703 4.5Z"
                stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className='flex items-center justify-center font-[var(--Nunito-sans)] text-[18px] leading-[130%] text-[var(--blue-light)]'>Сортировка по</span>
         <Dropdown array={mock3}/>
            <div className="sortmenu">
            <p className="psortmenu">
                    Показывать по
                </p>
                <Dropdownnumbers array={mock4}/>
    </div>
        </div>
);
};

export default Sort;