import { Interval, intervals } from "./intervals"
import { Note, notesArray } from "./notes"
import { Scale, SpecificScale } from "./scales"

export const chords: RawChords = {
/*     Minor: {
        id: "minor",
        intervals: [intervals.PerfectUnison, intervals.MinorThird, intervals.PerfectFifth],
        symbol: "_",
    }, */
    Major: {
        id: "major",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth],
        symbol: "",
    },
    Minor7b5: {
        id: "minor7b5",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.Tritone],
        symbol: "m7b5",
    },
    Chord7b9: {
        id: "7b9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MinorSecond],
        symbol: "7b9",
    },
    PowerChord: {
        id: "5",
        intervals: [
            intervals.PerfectUnison,
            intervals.PerfectFifth],
        symbol: "5",
    },
}

export interface RawChords {
    // Minor: RawChord,
    Major: RawChord,
    Minor7b5: RawChord,
    Chord7b9: RawChord,
    PowerChord: RawChord,
}

export interface RawChord {
    id: string,
    intervals: Interval[],
    symbol: string,
    triad?:boolean,
    tetrad?:boolean,
}

export interface SpecificChord {
    readonly rootNote: Note,
    readonly id: string, // note name plus 
    readonly notes: Note[],
    readonly intervals: Interval[],
    readonly symbol: string,
    presentInScales: SpecificScale[],
}


export const specificChords: SpecificChord[] = generateSpecificChords()

function generateSpecificChords(): SpecificChord[] {

    const specificChords: SpecificChord[] = []

    for (const rootNote of notesArray) {

        for (const rawChord of Object.values(chords)) {


            const notes: Note[] = []

            for (const interval of rawChord.intervals) {

                notes.push(notesArray[(interval.step + rootNote.intervalFromC.step) % 12])

            }

            specificChords.push({
                rootNote,
                id: rootNote.id + " " + rawChord.id,
                notes,
                intervals: rawChord.intervals,
                symbol: rootNote.id + rawChord.symbol,
                presentInScales: [],
            })

        }
    }

    return specificChords

}