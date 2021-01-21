import { SpecificChord, specificChords } from "./chords"
import { SpecificScale, specificScales } from "./scales"
import { getStringInstrument, RawStringInstruments, StringInstrument } from "./instruments"
import { Interval, intervals } from "./intervals"
import { Note, notes } from "./notes"
import { getInterval } from "."


export interface Dictionary<Item> {
    [index: string]: Item
}



export interface RenderableNote {
    readonly interval: Interval,
    readonly note: Note,
    readonly hidden: boolean,
}

type nullOrNumber = null | number

export interface RenderablePattern {

    readonly id: string,

    readonly strings: RenderableNote[][],

    readonly fretsArray: nullOrNumber[]

    readonly source: SpecificChord | SpecificScale,

    readonly intervals: Interval[],

    readonly notes: Note[],

    readonly stringInstrument: StringInstrument,

}

export type Renderable = SpecificChord | SpecificScale

export function createRenderablePattern(stringInstrument: StringInstrument, renderable: Renderable): RenderablePattern {

    const strings = stringInstrument.strings.map(string => {

        return string.map(note => {

            const interval = getInterval(renderable.rootNote, note)


            return {
                interval, note,
                hidden: !renderable.notes.includes(note),
            }

        })

    })


    return {
        id: renderable.id,
        intervals: renderable.intervals,
        notes: renderable.notes,
        source: renderable,
        strings: strings as RenderableNote[][],
        stringInstrument,
        fretsArray:makeFretsArray(stringInstrument.fretsCount)
    }

}

function makeFretsArray(fretscount : number) : nullOrNumber[] {

    const array : nullOrNumber[] = []
    const show = [3,5,7,9,12,15,17,19,21,24]
    for (let i = 0; i < fretscount; i++) {
        
        if (show.includes(i)) array.push(i)
        else array.push(null)
        
    }

    return array

}

export const renderables: RenderablePattern[] = generateAllRenderables()

function generateAllRenderables() {

    const guitar = getStringInstrument(RawStringInstruments.standardGuitar)
    const renderables: RenderablePattern[] = []

    for (const renderable of [...specificScales, ...specificChords]) {
        const renderablePattern = createRenderablePattern(guitar, renderable)
        renderables.push(renderablePattern)
    }

    return renderables.filter(e => !e.id.includes("-del"))

}

/* export type RenderableState = {

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



 */