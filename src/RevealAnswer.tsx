import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./Images/UDLogo.jpg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setVisible(true)} disabled={visible}>
                Reveal Answer
            </Button>
            <div>{visible === true ? <span>42</span> : <span> </span>}</div>
        </div>
    );
}
