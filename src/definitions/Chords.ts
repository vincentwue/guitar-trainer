import { Interval, intervals } from "./intervals"
import { Note, notesArray } from "./notes"
import { Scale, SpecificScale } from "./scales"

export const chords: RawChords = {
    PerfectUnison: {
        id: "unison",
        intervals: [intervals.PerfectUnison],
        symbol: "unison",
    },
    Minor: {
        id: "minor",
        intervals: [intervals.PerfectUnison, intervals.MinorThird, intervals.PerfectFifth],
        symbol: "_",
    },
    Major: {
        id: "major",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth],
        symbol: "",
    },
    Major7: {
        id: "Δ7",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MajorSeventh,
        ],
        symbol: "Δ7",
    },
    Chord7: {
        id: "7",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MinorSeventh,
        ],
        symbol: "7",
    },
    Minor7: {
        id: "_7",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.PerfectFifth,
            intervals.MinorSeventh,
        ],
        symbol: "_7",
    },
    Minor7b5: {
        id: "_7b5",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.MinorSeventh,
            intervals.Tritone],
        symbol: "_7b5",
    },
    Chord7b9: {
        id: "7b9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MinorSeventh,
            intervals.MinorSecond
        ],
        symbol: "7b9",
    },
    Chord7Sharp5: {
        id: "7#5",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.MinorSixth,
            intervals.MinorSeventh,
        ],
        symbol: "7#5",
    },
    Chord7Sharp11: {
        id: "7#11",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.Tritone,
            intervals.PerfectFifth,
            intervals.MinorSeventh,
        ],
        symbol: "7#11",
    },
    PowerChord: {
        id: "5",
        intervals: [
            intervals.PerfectUnison,
            intervals.PerfectFifth],
        symbol: "5",
    },
    MajorB13: {
        id: "Δ#5",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.MinorSixth,
            intervals.MajorSeventh],
        symbol: "Δ#5",
    },
    Dim7: {
        id: "°7",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.Tritone,
            intervals.MajorSixth],
        symbol: "°7",
    },
    b9b13: {
        id: "#5b9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorSecond,
            intervals.MajorThird,
            intervals.MinorSixth],
        symbol: "#5b9",
    },
    MinorMajor7: {
        id: "_Δ",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.PerfectFifth,
            intervals.MajorSeventh],
        symbol: "_Δ",
    },
    Minor6: {
        id: "_6",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.PerfectFifth,
            intervals.MajorSixth],
        symbol: "_6",
    },
    Major6: {
        id: "6",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MajorSixth],
        symbol: "6",
    },
    Minorb6: {
        id: "_b6",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.PerfectFifth,
            intervals.MinorSixth],
        symbol: "_b6",
    },
    Majorb6: {
        id: "b6",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MinorSixth],
        symbol: "b6",
    },
    Minor9: {
        id: "_9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.PerfectFifth,
            intervals.MajorSecond],
        symbol: "_9",
    },
    Major9: {
        id: "9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MajorSecond],
        symbol: "9",
    },
    Minorb9: {
        id: "_b9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MinorThird,
            intervals.PerfectFifth,
            intervals.MinorSecond],
        symbol: "_b9",
    },
    Majorb9: {
        id: "b9",
        intervals: [
            intervals.PerfectUnison,
            intervals.MajorThird,
            intervals.PerfectFifth,
            intervals.MinorSecond],
        symbol: "b9",
    },
}

export interface RawChords {
    Minor: RawChord,
    Major: RawChord,
    Minor7b5: RawChord,
    Chord7b9: RawChord,
    PowerChord: RawChord,
    Major7: RawChord,
    Chord7Sharp5: RawChord,
    Chord7Sharp11: RawChord,
    Minor7: RawChord,
    Chord7: RawChord,
    PerfectUnison: RawChord,

    
    MajorB13:RawChord,
    Dim7:RawChord,
    b9b13:RawChord,
    MinorMajor7:RawChord,

    Minor6:RawChord,
    Minorb6:RawChord,
    Major6:RawChord,
    Majorb6:RawChord,

    Minor9:RawChord,
    Major9:RawChord,

    Majorb9:RawChord,
    Minorb9:RawChord,

    
}

export interface RawChord {
    id: string,
    intervals: Interval[],
    symbol: string,
    triad?: boolean,
    tetrad?: boolean,
}

export interface SpecificChord {
    readonly rootNote: Note,
    readonly id: string, // note name plus 
    
    readonly notes: Note[],
    readonly intervals: Interval[],
    
    readonly symbol: string,
    presentInScales: SpecificScale[],
}

export interface SpecificAutoChord {
    readonly id: string, // note name plus 
    specificChord: SpecificChord | null,
    intervals:Interval[],
    notes:Note[],
    rootNoe:Note,
    readonly symbol: string, // 
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