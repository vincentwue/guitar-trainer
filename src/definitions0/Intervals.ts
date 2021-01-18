// import { create } from "domain"


// type HalfStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | 11

export interface Interval {
    readonly name: string,
    readonly step: number,
    readonly symbol: string,
    color: string,
}



function createInterval(name: string, step: number, symbol: string, color?: string): Interval {

    return {
        name, step, symbol, color: color ? color : "lightgrey"
    }
}

interface IntervalDictionary {
    [name: string]: Interval;
}
export const IntervalNames: string[] = [
    "Prime",
    "kleineSekunde",
    "großeSekunde",
    "kleineTerz",
    "großeTerz",
    "Quarte",
    "Tritonus",
    "Quinte",
    "kleineSexte",
    "großeSexte",
    "kleineSeptime",
    "großeSeptime",
]

const symbols: string[] = [
    "",
    "b9",
    "9",
    "moll",
    "dur",
    "4",
    "b5/#11",
    "5",
    "#5/b6/b13",
    "6/13",
    "7",
    "maj7"
]

export const intervalsByName: IntervalDictionary = {}

export const intervals : Interval[] = []

for (let index = 0; index < 12; index++) {
    const interval : Interval = createInterval(IntervalNames[index], index, symbols[index])
    intervalsByName[IntervalNames[index]] = interval
    intervals[index] = interval
}

declare const window: any;
export const Window: any = window
window.intervals = intervals
// console.log(intervals)




export function getSymbol(steps: number): string {
    return symbols[steps]
}

