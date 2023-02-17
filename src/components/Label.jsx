import "./Label.css";

const Label = ({ labelName, setAttribute }) => {
    return <label className="label" htmlFor="setAttribute">{labelName}</label>;
};

export default Label;
