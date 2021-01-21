import { SpecificAutoChord, SpecificChord, specificChords } from "./chords"
import { Interval, intervals, intervalsArray } from "./intervals"
import { Note, notes, notesArray } from "./notes"

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
    HarmonicMinor: {
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
    },
    Chromatic: {
        id: "chromatic",
        steps: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        modes: [
            "chromatic",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
            "chromatic-del",
        ]
    },
}

export interface RawScalesInterface {
    Major: RawScale,
    HarmonicMinor: RawScale,
    MelodicMinor: RawScale,
    Chromatic: RawScale,
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
    readonly rawScale: RawScale,

    readonly step: number,
}

export interface SpecificScale {
    readonly isScale: boolean,
    readonly id: string,
    readonly scale: Scale,

    readonly notes: Note[],
    readonly intervals: Interval[],


    readonly rootNote: Note,
    chords: SpecificChord[][],
    autoChords?: SpecificChord[],


    readonly triads: SpecificChord[],
    readonly tetrads: SpecificChord[],

    baseSpecificScale?: SpecificScale
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

        for (let i = 0; i < rawScale.modes.length; i++) {
            const modeString = rawScale.modes[i];
            const steps = [
                ...rawScale.steps.slice(i, rawScale.modes.length),
                ...rawScale.steps.slice(0, i)
            ]
            const newScale = {
                id: modeString,
                steps,
                isMode: i !== 0 ? true : false,
                intervals: generateIntervals(steps),
                rawScale: scaleValue,
                step: i,
            }

            scales.push(newScale)
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
                isScale: true,
                id: rootNote.id + " " + scale.id,
                scale,
                notes,
                rootNote,
                intervals: scale.intervals,



                chords: [],
                triads: [],
                tetrads: [],
            }

            const chords = generateSpecificChords(specificScale)
            specificScale.chords = chords.chords

            specificScale.autoChords = generateSpecificAutoChords(specificScale)

            specificScales.push(specificScale)

        }

    }

    // This part is solved with a ugly hack.
    // Consider restructuring whole datastructure.
    // Design ONE interface that represents all wanted information and build small steps towards this goal.
    for (const specificScale of specificScales) {

        const stepOfMode = specificScale.scale.step


        const nameOfBaseScale = specificScale.scale.rawScale.modes[0]
        const helperScale = specificScales.find(spscale => spscale.id === specificScale.rootNote.id + " " + nameOfBaseScale)
        if (helperScale) {

            const intervalToRoot = helperScale.scale.intervals[stepOfMode]

            const rootNoteOfBaseScaleStepsFromC = (specificScale.rootNote.intervalFromC.step + 12 - intervalToRoot.step) % 12
            const rootNoteOfBaseScale = notesArray.find(note => note.intervalFromC.step === rootNoteOfBaseScaleStepsFromC)



            specificScale.baseSpecificScale = specificScales.find(spscale => spscale.id === rootNoteOfBaseScale?.id + " " + nameOfBaseScale)
            // console.log(specificScale.id, rootNoteOfBaseScale + " " + nameOfBaseScale)
            // console.log(specificScale.id, { specificScale, rootNoteOfBaseScale, rootNoteOfBaseScaleStepsFromC, stepOfMode, intervalToRoot, nameOfBaseScale })
        }


    }


    return specificScales
}

function generateSpecificAutoChords(specificScale: SpecificScale): SpecificChord[] {


    //TODO implement
    const longNotes = [...specificScale.notes, ...specificScale.notes, ...specificScale.notes]

    const tetradsNotes = []

    for (const note of specificScale.notes) {
        const index = longNotes.indexOf(note)
        const tetrad = []
        for (let i = index; i < index + 8; i += 2) {
            tetrad.push(longNotes[i])
        }
        tetradsNotes.push(tetrad)
    }

    const autoChords : any = tetradsNotes

    for (const specificChord of specificChords) {
        for (let i = 0; i < tetradsNotes.length; i++) {
            const tetrad = tetradsNotes[i];

            if (tetrad.length === specificChord.notes.length && specificChord.notes[0] === tetrad[0]) {
                if (tetrad.every(v => specificChord.notes.includes(v))) {
                    autoChords[i]=specificChord
                }
            }
        }
    }
    // console.log("chord", specificScale.id, "found", { autoChords })

    // console.log(specificScale.id, { specificScale, longNotes, tetradsNotes })


    return autoChords
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