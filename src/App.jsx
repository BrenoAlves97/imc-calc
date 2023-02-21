import Form from "./components/Form";
import StartTestIMC from "./components/StartTestIMC";

import "./App.css";
import { useState } from "react";

const stages = [
    { id: 1, stageName: "start" },
    { id: 2, stageName: "test" },
];

function App() {
    const [page, setPage] = useState(stages[0].stageName);

    const handleStartTest = () => {
        setPage(stages[1].stageName);
    };

    return (
        <>
            {page === "start" && <StartTestIMC handleStartTest={handleStartTest} />}
            {page === "test" && (
                <div className="App">
                    <h1>IMC Calculator</h1>
                    <Form />
                </div>
            )}
        </>
    );
}

export default App;
