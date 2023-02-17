import "./Input.css";

const Input = ({ placeholder, type, name, handleHeight }) => {
    return (
        <input
            onChange={(event) => handleHeight(event.target.value)}
            className="input"
            type={type}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default Input;
