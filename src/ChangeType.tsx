import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./Images/UDLogo.jpg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { QuestionType } from "./interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button
                onClick={() =>
                    qType === "short_answer_question"
                        ? setQType("multiple_choice_question")
                        : setQType("short_answer_question")
                }
            >
                Change Type
            </Button>
            <div>
                {qType === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
