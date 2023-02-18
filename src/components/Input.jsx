import "./Input.css";

const Input = ({ placeholder, type, name, setHeight, value }) => {
    return (
        <input
            onChange={(event) => setHeight(event.target.value)}
            className="input"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
        />
    );
};

export default Input;
