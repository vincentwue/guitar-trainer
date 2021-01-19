import { SpecificChord, specificChords } from "./chords"
import { Interval, intervals, intervalsArray } from "./intervals"
import { Note, notesArray } from "./notes"

export const RawScales: RawScalesInterface = {
    Major: {
        id: "major",
        steps: [2, 2, 1, 2, 2, 2, 1],
        modes: [
            "ionisch (dur)",
            "dorisch",
            "phrygisch",
            "lydisch",
            "mixolydisch",
            "aeolisch (moll)",
            "lokrisch",
        ]
    },
    /*     HarmonicMinor: {
            id: "harmonic minor",
            steps: [2, 1, 2, 2, 1, 3, 1],
            modes: [
                "harmonic minor mode",
                "Locrian 13 or Locrian 6 (half-diminished)",
                "Ionian #5 (augmented)",
                "Dorian #11 (or dorian #4) (minor)",
                "Phrygian dominant (dominant)",
                "Lydian #2 (major)",
                "Super locrian bb7 (diminished)",
            ]
        },
        MelodicMinor: {
            id: "melodic minor",
            steps: [2, 1, 2, 2, 2, 2, 1],
            modes: [
                "melodic minor mode",
                "dorisch b9",
                "lydisch augmented",
                "lydisch dominant",
                "mixolydisch b13",
                "aeolisch b5 (lokrisch #2)",
                "alterierte skala (super lokrisch)",
            ] 
        },*/
}

export interface RawScalesInterface {
    Major: RawScale,
    /*     HarmonicMinor: RawScale,
        MelodicMinor: RawScale, */
}




export interface RawScale {
    id: string,
    steps: number[],
    modes: string[]
}



export interface Scale {

    readonly id: string,
    readonly steps: number[],
    readonly intervals: Interval[],

    readonly isMode: boolean,

    readonly baseScale?: Scale,

}

export interface SpecificScale  {
    readonly isScale:boolean,
    readonly id: string,
    readonly scale: Scale,

    readonly notes: Note[],
    readonly intervals: Interval[],


    readonly rootNote: Note,
    chords: SpecificChord[][],

    readonly triads: SpecificChord[],
    readonly tetrads: SpecificChord[],
}

export const scales: Scale[] = generateScales()

function generateScales(): Scale[] {

    const scales: Scale[] = []

    for (const [scaleKey, scaleValue] of Object.entries(RawScales)) {

        const rawScale: RawScale = scaleValue

        if (!rawScale.modes) {
            scales.push(scaleValue)
            continue;
        }

        let baseScale: Scale;
        for (let i = 0; i < rawScale.modes.length; i++) {
            const modeString = rawScale.modes[i];
            const steps = [
                ...rawScale.steps.slice(i, rawScale.modes.length),
                ...rawScale.steps.slice(0, i)
            ]
            scales.push({
                id: modeString,
                steps,
                isMode: i !== 0 ? true : false,
                intervals: generateIntervals(steps),
            })
        }



    }

    return scales
}

function generateIntervals(steps: number[]): Interval[] {

    const result: number[] = []
    let last = 0;
    for (let i = 0; i < steps.length - 1; i++) {
        const element = steps[i];
        last += element;
        result.push(last)
    }

    return [intervals.PerfectUnison, ...result.map(n => intervalsArray[n])]

}

export const specificScales: SpecificScale[] = generateSpecificScales()


function generateSpecificScales(): SpecificScale[] {

    const specificScales: SpecificScale[] = []

    for (const rootNote of notesArray) {

        for (const scale of scales) {

            const notes: Note[] = []


            for (const interval of scale.intervals) {

                notes.push(notesArray[(interval.step + rootNote.intervalFromC.step) % 12])

            }


            const specificScale: SpecificScale = {
                isScale:true,
                id: rootNote.id + " " + scale.id,
                scale,
                notes,
                rootNote,
                intervals:scale.intervals,

                chords: [],
                triads: [],
                tetrads: [],
            }

            const chords = generateSpecificChords(specificScale)
            specificScale.chords = chords.chords

            specificScales.push(specificScale)

        }

    }


    return specificScales
}

function generateSpecificChords(specificScale: SpecificScale): { chords: SpecificChord[][], tetrads: SpecificChord[], triads: SpecificChord[] } {

    const notes = specificScale.notes

    const specificChordsArray: SpecificChord[][] = []
    const tetrads: SpecificChord[] = []
    const triads: SpecificChord[] = []

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const specificChordsResult: SpecificChord[] = []
        for (const specificChord of specificChords) {

            if (specificChord.notes[0] !== note) continue;

            const hasChord = specificChord.notes
                .filter(note => !notes.includes(note)).length === 0



            if (hasChord) {
                specificChordsResult.push(specificChord)
                specificChord.presentInScales.push(specificScale)
            }

        }
        specificChordsArray.push(specificChordsResult)
    }








    return { chords: specificChordsArray, triads, tetrads }

}