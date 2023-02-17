import "./InputWeigth.css";

const InputWeigth = ({ placeholder, type, name, handleWeigth }) => {
    return (
        <input
            onChange={(event) => handleWeigth(event.target.value)}
            className="input"
            type={type}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default InputWeigth;
