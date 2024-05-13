import {useState} from "react";

// TODO
//  1. кастомный radioButton
//  2. кастомный чекбокс
//  3. скролл вертикальный по дизайну
//  4. input с типом Диапазона (range)
//  5. кнопка confirm
//  6. кнопка reset
//  7. Каждый div класса "to-do" необходимо вынести в отдельный компонент
//     компонент должен принимать следующие пропсы
//     I.  Обьект {"a": [{...keys}], "b": [{...keys}], c: [{...keys}]}   подумать! какие будут keys?
//     II. state и useState для
const Filter = () => {
    const [show, setIsShow] = useState(false);

    const handleSubmitFilter = (e) => {
        e.preventDefault();
    }

    return (
        <div className="relative">
            <div className="p-4 border" onClick={() => setIsShow(!show)}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.94684 0.5H18.0531C18.1986 0.500046 18.3409 0.542401 18.4627 0.621905C18.5846 0.701409 18.6806 0.81463 18.7393 0.947774C18.7979 1.08092 18.8165 1.22824 18.7929 1.37179C18.7693 1.51533 18.7044 1.64891 18.6062 1.75625L12.4468 8.53437C12.3187 8.67159 12.2482 8.85286 12.25 9.04063V14.3469C12.2511 14.4715 12.2208 14.5944 12.1618 14.7042C12.1028 14.814 12.017 14.9072 11.9125 14.975L8.91247 16.9719C8.79994 17.046 8.66951 17.0884 8.53491 17.0947C8.40031 17.101 8.2665 17.0709 8.14755 17.0076C8.0286 16.9443 7.9289 16.8501 7.85894 16.7349C7.78898 16.6198 7.75134 16.4879 7.74997 16.3531V9.04063C7.75178 8.85286 7.68129 8.67159 7.5531 8.53437L1.39372 1.75625C1.29552 1.64891 1.23066 1.51533 1.20704 1.37179C1.18341 1.22824 1.20205 1.08092 1.26067 0.947774C1.3193 0.81463 1.41538 0.701409 1.53721 0.621905C1.65904 0.542401 1.80137 0.500046 1.94684 0.5Z"
                        className={show ? "fill-[var(--blue-light)] stroke-gray" : "fill-none stroke-[var(--blue-light)]" }
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
            </div>
            {show && <div className="w-[250px] absolute left-[calc(100%+20px)] top-0 border flex flex-col gap-[15px] p-[25px] text-white">
                <form onSubmit={handleSubmitFilter}>
                    <div className="flex flex-col gap-[5px] to-do">
                        <span>В наличии</span>
                        <label htmlFor="inStock"><input name="stock" type="radio" id="inStock" value="inStock" />В наличии</label>
                        <label htmlFor="outStock"><input name="stock" type="radio" id="css" value="outStock"/>Нет в наличии</label>
                    </div>
                    <div className="to-do">
                        <span>title</span>

                    </div>
                    <div className="to-do">
                        <span>title</span>

                    </div>
                    <div className="to-do">
                        <span>title</span>

                    </div>
                    <div className="to-do">
                        <span>title</span>

                    </div>
                </form>
            </div>}
        </div>
    );
};

export default Filter;