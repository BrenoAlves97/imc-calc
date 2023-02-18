import "./InputWeigth.css";

const InputWeigth = ({ placeholder, type, name, setWeigth, value }) => {
    return (
        <input
            onChange={(event) => setWeigth(event.target.value)}
            className="input"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
        />
    );
};

export default InputWeigth;
