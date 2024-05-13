



// <label htmlFor="inStock"><input name="stock" type="radio" id="inStock" value="inStock"/>В наличии</label>
// {tiitle1: [{},{},{},{}], title2: [{},{},{},{}]} array
// state and set state

const RadioButton = ({title, isCurr, setIsCurr}) => {
    return (
        <div className="flex ga-[5px] font-[400] text-[14px]">
            <div onClick={setIsCurr} className="w-[24px] h-[24px] rounded-full border border-[var(--blue-light)] flex justify-center items-center">
                {isCurr && <div className="w-[18px] h-[18px] bg-[var(--blue-light)] rounded-full"></div>}
            </div>
            <span className="">{title}</span>
        </div>
    );
};

export default RadioButton;