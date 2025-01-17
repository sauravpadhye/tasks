import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Type Answer Below:</Form.Label>
                <Form.Control
                    type={
                        typeof expectedAnswer === "number" ? "number" : "text"
                    }
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <h3>Check Answer</h3>
            {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
