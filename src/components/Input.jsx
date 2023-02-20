import "./Input.css";

const Input = ({ placeholder, type, name, setValue, value }) => {
    return (
        <input
            onChange={(event) => setValue(event.target.value)}
            className="input"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
        />
    );
};

export default Input;
