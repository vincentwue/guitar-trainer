import { Interval,SpecificChord, Scale, Chord, Dictionary, Note, SpecificScale } from "./interfaces"
import { intervals } from "./intervals"

export interface Scales {
    major: Scale,
}

export const scales: Scales = {
    major: {
        id: "major",
        steps: [2, 2, 1, 2, 2, 2, 1],

        intervals: [],
        modes: [],
        chords: [],
        isMode: false,
        triads: [],
        tetrads: [],
    }
}

export function createSpecificScale(root: Note, scale: Scale): SpecificScale {

    const notes: Note[] = []
    const triads: SpecificChord[] = []
    const tetrads: SpecificChord[] = []
    const chords: SpecificChord[] = []

    return {
        notes,
        triads,
        tetrads,
        chords,

        scale,
        id: root.id + " " + scale.id,
        rootNote: root,

    }

}