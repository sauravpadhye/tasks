import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./Images/UDLogo.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript -- Saurav Padhye
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h2>This is a new header</h2>
            <img src={img} alt="UD Logo" />
            <ul>
                <li>First list item</li>
                <li>Second list item</li>
                <li>Third list item</li>
            </ul>
            <Button onClick={() => console.log("Hello world!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
