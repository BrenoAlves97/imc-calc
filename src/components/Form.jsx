import Label from "./Label";
import Input from "./Input";
import InputWeight from "./InputWeigth";
import Button from "./Button";

import { useState } from "react";

import "./Form.css";

const Form = () => {
    const [height, setHeight] = useState(null);
    const [weigth, setWeigth] = useState(null);
    const [imcResult, setImcResult] = useState(null);
    const [status, setStatus] = useState(null);

    const handleHeight = (value) => {
        setHeight(value);
    };

    const handleWeigth = (value) => {
        setWeigth(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const heightCM = height / 100;
        const result = weigth / (heightCM * heightCM);

        setImcResult(result);
        checkStatus(result);
    };

    const checkStatus = (value) => {
        if (value <= 24.9 && value >= 18.5) {
            setStatus(`Parabéns! seu IMC está ${value.toFixed(2)}. Você está com o peso normal.`);
        } else if (value >= 25.0 && value <= 29.9) {
            setStatus(
                `Sobrepeso! seu IMC está ${imcResult.toFixed(
                    2
                )}. Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão.`
            );
        } else if (value > 30.0 && value < 40.0) {
            setStatus(
                `Obesidade! ${imcResult.toFixed(
                    2
                )}. O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde.`
            );
        } else if (value > 40.0) {
            setStatus(
                `Obesidade grave! seu IMC está ${imcResult.toFixed(
                    2
                )}. Ao atingir este nivel de IMC, o risco de doenças associadas está entre alto e muito alto.`
            );
        } else if (value <= 18.5 && value > 0.0) {
            setStatus(
                `Cuidado! Seu IMC está ${imcResult.toFixed(
                    2
                )}. Estar abaixo do peso eleva risco de vida mais do que obesidade.`
            );
        }
    };

    return (
        <>
            <form className="formContainer" onSubmit={handleSubmit}>
                <div className="formControl">
                    <Label labelName="Altura:" setAttribute="height" />
                    <Input
                        placeholder="Digite sua altura..."
                        type="number"
                        name="height"
                        handleHeight={handleHeight}
                    />
                </div>
                <div className="formControl">
                    <Label labelName="Peso" setAttribute="weigth" />
                    <InputWeight
                        placeholder="Digite seu peso..."
                        type="number"
                        name="weigth"
                        handleWeigth={handleWeigth}
                    />
                </div>
                <div className="buttonsContainer">
                    <Button>Calcular</Button>
                </div>
            </form>
            {imcResult > 0.0 ? <p className="description">{status}</p> : ""}
        </>
    );
};

export default Form;