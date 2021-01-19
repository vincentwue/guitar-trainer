import { SpecificScale } from "../definitions0/Scales"
import { SpecificChord } from "./chords"
import { StringInstrument } from "./instruments"
import { Interval } from "./intervals"
import { Note, notes } from "./notes"


export interface Dictionary<Item> {
    [index: string] : Item
}



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

export interface RenderablePattern {
    renderableArray:RenderableArray,
    source: SpecificChord | SpecificScale,

    intervals: Interval[],
    intervalColors:string[],
    
    notes: Note[],
    notesColors:string[],
}



export type RenderableState = {

    renderableArrays: RenderableArray[] | undefined,

    add(
        stringInstrument: StringInstrument,
        config: "notes" | "intervals",
        // renderable: Renderable,
        // renderableSecondLayer?: Renderable,
        index?: number,
    ): void, // returns id

    // removes renderableArray from array.
    remove(id: string): void,

}



