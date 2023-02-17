import "./Button.css";

const Button = ({ children, handleClearStates }) => {
    return (
        <button onClick={handleClearStates} className="button">
            {children}
        </button>
    );
};

export default Button;
