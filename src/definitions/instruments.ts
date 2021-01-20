import { Note, notes, notesArray } from "./notes";


export const RawStringInstruments: RawStringInstrumentsInterface = {
    standardGuitar:{
        id: "guitar",
        fretsCount: 25,
        tuning: [notes.E, notes.A, notes.D, notes.G, notes.B, notes.E],
    },
    dropDGuitar:{
        id: "guitar",
        fretsCount: 25,
        tuning: [notes.D, notes.A, notes.D, notes.G, notes.B, notes.E],
    }
}

export interface RawStringInstrumentsInterface {
    standardGuitar: RawStringInstrument,
    dropDGuitar: RawStringInstrument,
}

// A guitar, violin or ukulele tuning
export interface RawStringInstrument {
    readonly id: string,
    readonly fretsCount: number,
    readonly tuning: Note[],
}

export interface StringInstrument {
    readonly fretsCount: number,
    readonly tuning: Note[],
    strings: Note[][]
}

export function getStringInstrument(rawStringInstrument : RawStringInstrument) : StringInstrument {

    const strings : Note[][] = []

    for (const note of rawStringInstrument.tuning) {

        const string: Note[] = []

        const indexInNotes: number = notesArray.indexOf(note)
        for (let index = 0; index < rawStringInstrument.fretsCount; index++) {
            const grabbedNote: Note = notesArray[(index + indexInNotes) % 12]
    

            string.push(grabbedNote)

        }

        strings.push(string)

    }

    return {
        strings,
        tuning:rawStringInstrument.tuning,
        fretsCount:rawStringInstrument.fretsCount
    }
}


