import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface Holiday {
    name: string;
    date: Date;
    emoji: string;
}

const holidays: Holiday[] = [
    { name: "Oktoberfest", date: new Date("9-21"), emoji: "🍺" },
    { name: "Christmas", date: new Date("12-25"), emoji: "🎄" },
    { name: "Halloween", date: new Date("10-31"), emoji: "🎃" },
    { name: "Easter", date: new Date("3-31"), emoji: "🐇" },
    { name: "Valentine's Day", date: new Date("2-14"), emoji: "❤️" }
];

export function advanceByAlphabet(currentHoliday: Holiday): Holiday {
    const sortedHolidays = [...holidays].sort((hol1, hol2) =>
        hol1.name.localeCompare(hol2.name)
    );
    const currHolInd = sortedHolidays.findIndex(
        (ind) => ind.name === currentHoliday.name
    );
    const nextHol = sortedHolidays[(currHolInd + 1) % sortedHolidays.length];
    return nextHol;
}

export function advanceByYear(currentHoliday: Holiday): Holiday {
    const sortedHolidays = [...holidays].sort(
        (hol1, hol2) => hol1.date.getMonth() - hol2.date.getMonth()
    );
    const currHolInd = sortedHolidays.findIndex(
        (ind) => ind.name === currentHoliday.name
    );
    const nextHol = sortedHolidays[(currHolInd + 1) % sortedHolidays.length];
    return nextHol;
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(holidays[0]);
    return (
        <div>
            <p>Holiday: {holiday ? holiday.emoji : ""}</p>
            <Button onClick={() => setHoliday(advanceByAlphabet(holiday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(advanceByYear(holiday))}>
                Advance by Year
            </Button>
        </div>
    );
}
