import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((col, ind) => (
                    <Form.Check
                        key={ind}
                        inline
                        type="radio"
                        label={col}
                        value={col}
                        checked={color === col}
                        onChange={() => setColor(col)}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color
                }}
            >
                {color}
            </div>
        </div>
    );
}
