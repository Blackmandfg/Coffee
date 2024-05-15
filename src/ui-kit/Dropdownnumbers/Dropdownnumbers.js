import {useState} from "react";

const Dropdownnumbers = ({array}) => {
    const [isShow, setIshow] = useState(false);
    const [choice, setChoice] = useState(array[0] || "Значение по умполчанию");

    const handleChangeIsShow = () => setIshow(true);
    const handleChangeChoice = (item) => {
        setChoice(item);
        setIshow(false);
    };
    return <div className="flex items-center justify-center bg-[var(--green-light)] p-[15px] border border-[var(--blue-light)] [&>div] font-[var(--Nunito-sans)] text-[var(--blue-light)] relative [&_li]:border [&_li]:border-[var(--blue-light)] [&_li]:p-[15px] [&_ul]:absolute">
        {array[0] === "string"
            ?
            <div>
                <div onClick={handleChangeIsShow}>{choice}</div>
                {isShow && <ul>
                    {array.map(item => <li  onClick={() => handleChangeChoice(item)} key={item}>{item}</li>)}
                </ul>}
            </div>
            :
            <div>
                <div className="flex gap-[15px]" onClick={handleChangeIsShow}>{choice.title}{choice.icon}</div>
                {isShow && <ul className="mt-[15px] ml-[-16px]">
                    {array.map(item => <li className="flex gap-[15px] items-center hover:bg-[var(--blue)] w-[88px] border border-[var(--blue-light)] bg-[var(--green-light)] " onClick={() => handleChangeChoice(item)}
                                           key={item.id}>{item.title}</li>)}
                </ul>}
            </div>}
    </div>
};

export default Dropdownnumbers;