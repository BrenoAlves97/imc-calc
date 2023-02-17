import "./StartTestIMC.css";

const StartTestIMC = ({ handleStartTest }) => {
    return (
        <div className="startContainer">
            <h1>Bem vindo ao IMC Calculator!</h1>
            <p>Clique abaixo para iniciar o teste</p>
            <button onClick={handleStartTest}>Iniciar!</button>
        </div>
    );
};

export default StartTestIMC;
