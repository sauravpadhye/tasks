import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() =>
                    visible === false ? setVisible(true) : setVisible(false)
                }
            >
                Reveal Answer
            </Button>
            <div>{visible === true ? <span>42</span> : <span> </span>}</div>
        </div>
    );
}
