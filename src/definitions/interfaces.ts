import create from "zustand"
import { notes } from "./notes"


export interface Dictionary<Item> {
    [index: string] : Item
}

export interface Note {
    readonly id: string,
    readonly intervalFromC: Interval,
    readonly standardColor: string,
}

export interface Interval {
    readonly id: string,
    // readonly octaveName:string,
    readonly step: number,
    readonly standardSymbol: string,
    // readonly octaveSymbol: string,
    readonly standardColor: string,
}


export interface Chord {
    readonly intervals: Interval[],
    readonly id: string,
    readonly symbol: string,
    // octaveSymbol:string,
    // more symbols like #4 b5 #11? 
    readonly isTriad: boolean,
    readonly isTetrad: boolean,
    readonly presentInScales: Scale[],
}

export interface SpecificChord {
    readonly root: Note,
    readonly id: string, // note name plus 
    readonly notes: Note[],
    readonly chord: Chord,
}

export interface Scale {

    readonly id: string,
    readonly steps: number[],
    readonly chords: Chord[], // generated automatically
    readonly intervals: Interval[],

    readonly isMode: boolean,
    readonly modes: Scale[], // generated automatically

    readonly baseScale?: Scale,
    readonly triads: Chord[],
    readonly tetrads: Chord[],

}

export interface SpecificScale {
    readonly id: string,
    readonly scale: Scale,
    readonly notes: Note[],
    readonly rootNote: Note,
    readonly chords: SpecificChord[],

    readonly triads: SpecificChord[],
    readonly tetrads: SpecificChord[],
}

// specificChord or specificChord or interval or note
export type Renderable = SpecificScale | SpecificChord | Interval | Note


export interface RenderableNote {
    readonly color: string,
    readonly text: string,

}

export interface RenderableString {

    readonly notes: RenderableNote[],

}

export interface RenderableArray {
    readonly strings: RenderableString[],
    readonly heading: string,
    readonly index: number,
    readonly config : "notes" | "intervals"
}

// A guitar, violin or ukulele tuning
export interface StringInstrument {
    readonly id: string,
    readonly fretsCount: number,
    readonly tuning: Note[],
}

export const guitar : StringInstrument = {
    id:"guitar",
    fretsCount:24,
    tuning:[notes.E, notes.A, notes.D, notes.G, notes.B, notes.E],
}

export type RenderableState = {

    renderableArrays: RenderableArray[] | undefined,

    add(
        stringInstrument: StringInstrument,
        config: "notes" | "intervals",
        renderable: Renderable,
        renderableSecondLayer?: Renderable,
        index?: number,
    ): void, // returns id

    // removes renderableArray from array.
    remove(id: string): void,

}



