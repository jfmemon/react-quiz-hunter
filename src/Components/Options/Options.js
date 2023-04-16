import './Options.css';

const Options = ({ option, showResult, id }) => {
    const optionColor = (event) => {
        event.target.style.background = "white";
    }
    const mouseOut = (event) => {
        event.target.style.background="";
      }
    return (
        <div>
            <div onMouseOver={optionColor} onMouseOut={mouseOut} onClick={() => showResult(option)} className='border border-dark m-2 p-3 rounded' role="button">
                {option}
            </div>
        </div>
    );
};

export default Options;