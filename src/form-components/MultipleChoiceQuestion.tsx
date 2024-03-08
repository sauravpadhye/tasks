import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState(options[0]);
    const [isCorrect, setIsCorrect] = useState(false);
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setChoice(selected);
        if (selected === expectedAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={choice} onChange={handleSelect}>
                {options.map((op, ind) => (
                    <option key={ind} value={op}>
                        {op}
                    </option>
                ))}
            </select>
            {isCorrect === true && <span>✔️</span>}
            {isCorrect === false && <span>❌</span>}
        </div>
    );
}
