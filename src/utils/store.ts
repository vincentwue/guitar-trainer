import create from "zustand"
import { Note, notesArray } from "../definitions/notes"
import { StringInstrument } from "../definitions/instruments"
import { RenderablePattern, renderables } from "../definitions/renderables"



type State = {
    renderables: RenderablePattern[],

    index1: number,
    index2: number,

    firstIntervals:boolean,
    secondIntervals:boolean,

    toggleFirstIntervals:() => void,
    toggleSecondIntervals:() => void,

    setIndex1: (index: number) => void
    setIndex2: (index: number) => void
    secondHidden:boolean,
    toggleSecondHidden:() => void
}

export const useSimpleStore = create<State>(set => ({
    renderables,

    index1:0,
    index2:0,

    firstIntervals:false,
    secondIntervals:false,

    secondHidden:true,
    
    setIndex1: (index1) => set(state => ({ index1 })),
    setIndex2: (index2) => set(state => ({ index2 })),
    toggleSecondHidden: () => set(state => ({ secondHidden:!state.secondHidden })),
    toggleFirstIntervals: () => set(state => ({ firstIntervals:!state.firstIntervals })),
    toggleSecondIntervals: () => set(state => ({ secondIntervals:!state.secondIntervals })),
}))