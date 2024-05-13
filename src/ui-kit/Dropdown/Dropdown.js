import {useState} from "react";

const Dropdown = ({array}) => {
    const [isShow, setIshow] = useState(false);
    const [choice, setChoice] = useState(array[0] || "Значение по умполчанию");

    const handleChangeIsShow = () => setIshow(true);
    const handleChangeChoice = (item) => {
        setChoice(item);
        setIshow(false);
    };
    return <div className="w-[420px] border border-[var(--blue-light)] [&>div]:p-4 text-white relative [&_li]:border [&_li]:border-[var(--blue-light)] [&_li]:p-4 [&_ul]:absolute">
        {array[0] === "string"
            ?
            <div>
                <div onClick={handleChangeIsShow}>{choice}</div>
                {isShow && <ul>
                    {array.map(item => <li onClick={() => handleChangeChoice(item)} key={item}>{item}</li>)}
                </ul>}
            </div>
            :
            <div>
                <div className="flex gap-[15px]" onClick={handleChangeIsShow}>{choice.title}{choice.icon}</div>
                {isShow && <ul>
                    {array.map(item => <li className="flex" onClick={() => handleChangeChoice(item)}
                                           key={item.id}>{item.title}{item.icon}</li>)}
                </ul>}
            </div>}
    </div>
};

export default Dropdown;