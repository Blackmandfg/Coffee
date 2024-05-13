



// <label htmlFor="inStock"><input name="stock" type="radio" id="inStock" value="inStock"/>В наличии</label>
// {tiitle1: [{},{},{},{}], title2: [{},{},{},{}]} array
// state and set state

const RadioButton = ({title}) => {
    return (
        <div className="flex ga-[5px] font-[400] text-[14px]">
            <div></div>
            <span className="">{title}</span>
        </div>
    );
};

export default RadioButton;