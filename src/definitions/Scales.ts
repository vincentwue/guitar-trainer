// import { createAllSpecificScalesWithSpecificChords } from "./ChordsAndScales"
import { SpecificChord } from "./Chords"
import { Interval, intervals } from "./Intervals"
import { Note, notes, notesByName } from "./Notes"


export interface SpecificScale {

    scale:Scale,
    notes:Note[],
    rootNote:Note,
    specificChords?:SpecificChord[],

}


export function createSpecificScale(rootNote:Note, scale:Scale) : SpecificScale {

    const res : Note[]= []

    for (const interval of scale.intervals) {

        res.push(notes[(interval.step+rootNote.intervalToC.step)%12])

    }

    console.log(res)

    return {
        scale, rootNote, notes:res,
    }

}


export interface Scale {
    intervals: Interval[],
    name: string,
    modes: string[],
    scaleName: string,
    steps: number[],
    parent?:Scale,
    mode?:number,
    modeLinks?:Scale[],
}

interface ScaleDictionary {
    [index: string]: Scale,
}

export const scales: ScaleDictionary = {
    "ionisch (dur)": createScale("ionisch (dur)", [0, 2, 4, 5, 7, 9, 11], [
        "ionisch (dur)",
        "dorisch",
        "phrygisch",
        "lydisch",
        "mixolydisch",
        "aeolisch (moll)",
        "lokrisch",
    ]),
/*     "harmonisch moll": createScale("harmonisch moll", [0, 2, 3, 5, 7, 8, 11], [
        "harmonisch moll",
        "Locrian 13 or Locrian 6 (half-diminished)",
        "Ionian #5 (augmented)",
        "Dorian #11 (or dorian #4) (minor)",
        "Phrygian dominant (dominant)",
        "Lydian #2 (major)",
        "Super locrian bb7 (diminished)",
    ]),
    "melodisch moll": createScale("melodisch moll", [0, 2, 3, 5, 7, 9, 11], [
        "melodisch moll",
        "dorisch b9",
        "lydisch augmented",
        "lydisch dominant",
        "mixolydisch b13",
        "aeolisch b5 (lokrisch #2)",
        "alterierte skala (super lokrisch)",
    ]) */
}

// user defined type guards
/* function isIntervalArray(array: number[] | Interval[]) : array is Interval[] {
    return (array[0] as Interval).symbol !== undefined
}
 */
function createScale(name: string, steps: number[], modes: string[], scaleName?: string) {


    let vals: Interval[] = steps.map((n: number) => intervals[n])

    return {
        name, steps, modes, intervals: vals, scaleName: scaleName ? scaleName : name
    }
}

type ScaleTupel = [string, Scale]

addModesToScales()
function addModesToScales() {

    const allScales: ScaleTupel[] = Object.entries(scales)

    for (const [, scale] of allScales) {
        // scale.modeLinks=[scale]
        scale.parent = scale
        for (let index = 1; index < scale.intervals.length; index++) {
            const modeString = scale.modes[index];

            scales[modeString] = createScale(
                modeString,
                calculateModeSteps(scale.intervals.map((int: Interval, n: number) => int.step), index + 1),
                reorderModeNames(scale.modes, index),
                modeString
            )
            scales[modeString].parent = scale
            scales[modeString].mode = index
            // scale.modeLinks.push(scales[modeString])
            
            //console.log(scales[modeString])
        }



    }
}

export function reorderModeNames(names: string[], from: number): string[] {

    return names.slice(from).concat(names.slice(0, from))

}

export function calculateModeSteps(baseSteps: number[], from: number): number[] {


    let arr: number[] = baseSteps.concat(12)
    //console.log(baseSteps)

    let diffs: number[] = []
    for (let index = 1; index < arr.length; index++) {

        const last: number = arr[index - 1]
        const current: number = arr[index]
        const diff = current - last

        diffs.push(diff)

    }

    diffs.unshift(0)

    // console.log(diffs)
    diffs = diffs.slice(from).concat(diffs.slice(0, from)).filter(n => n !== 0)
    // console.log(diffs)

    const result: number[] = [0]
    for (let index = 1; index < baseSteps.length; index++) {

        const last: number = result[index - 1]

        result.push(last + diffs[index - 1])

    }
    // console.log(result)


    return result

}


//putChordInScales()
function putChordInScales() {



}

declare const window: any;
window.scales = scales
// console.log(scales)

console.log(createSpecificScale(notesByName.A, scales["aeolisch (moll)"]))