import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./Images/UDLogo.jpg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript -- Saurav Padhye
            </header>
            <h2>This is a new heading</h2>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img src={img} alt="UD Logo" />
            <ul>
                <li>First list item</li>
                <li>Second list item</li>
                <li>Third list item</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr></hr>
            <ChangeType></ChangeType>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <TwoDice></TwoDice>
            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr></hr>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "500px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "500px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
