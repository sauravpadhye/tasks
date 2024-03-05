import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { render } from "react-dom";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(4);
    return (
        <div>
            Left Die: <span data-testid="left-die">{leftDie}</span>
            Right Die: <span data-testid="right-die">{rightDie}</span>
            <br></br>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            <div>
                {leftDie === rightDie && leftDie !== 1 ? (
                    <span>You Win!</span>
                ) : leftDie === rightDie && leftDie === 1 ? (
                    <span>You Lose!</span>
                ) : (
                    <span>Roll Again</span>
                )}
            </div>
        </div>
    );
}
