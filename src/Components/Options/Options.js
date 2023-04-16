import './Options.css';

const Options = ({ option, showResult, id }) => {
    return (
        <div>
            <div onClick={() => showResult(option)} className='border border-dark m-2 p-3 rounded' role="button">
                {option}
            </div>
        </div>
    );
};

export default Options;