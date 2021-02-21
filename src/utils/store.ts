import create from "zustand"
import { Note, notesArray } from "../definitions/notes"
import { StringInstrument } from "../definitions/instruments"
import { RenderablePattern, renderables } from "../definitions/renderables"



type State = {
    renderables: RenderablePattern[],

    index1: number,
    index2: number,

/*     firstIntervals:boolean,
    secondIntervals:boolean,
 */
    secondHidden:boolean,

/*     toggleFirstIntervals:() => void,
    toggleSecondIntervals:() => void, */

    setIndex1: (index: number) => void
    setIndex2: (index: number) => void
    toggleSecondHidden:() => void,
    
    
    serialize:() => SerializedState,
    deserialize: (serializedState : SerializedState) => void,


}

export interface SerializedState {
    index1: number,
    index2: number,

    secondHidden:boolean,
}

declare const window : any;

export const useSimpleStore = window.store = create<State>((set, get) => ({
    renderables,

    index1:0,
    index2:0,

/*     firstIntervals:false,
    secondIntervals:false, */

    secondHidden:true,
    
    setIndex1: (index1) => set(state => ({ index1 })),
    setIndex2: (index2) => set(state => ({ index2 })),
    toggleSecondHidden: () => set(state => ({ secondHidden:!state.secondHidden })),
    /* toggleFirstIntervals: () => set(state => ({ firstIntervals:!state.firstIntervals })),
    toggleSecondIntervals: () => set(state => ({ secondIntervals:!state.secondIntervals })),
 */

    serialize: () => {
        const state = get()
        
        return {
            index1:state.index1,
            index2:state.index2,
            secondHidden:state.secondHidden,
        }
    },

    deserialize: (serializedState) => {

        set(state => {
            return {
                index1:serializedState.index1,
                index2:serializedState.index2,
                secondHidden:serializedState.secondHidden,
            }
        })
        
    },

}))

export type MasterStore = {
    states : State[],

    loadStates():void,
    saveStates():void,
    
}

export const masterStore = create<MasterStore>((set, get) => ({

    states:[],
    
    loadStates: () => {

        const state = localStorage.getItem("state")
        if (!state) return;
        console.log("localStorage get", state)
        const parsed = JSON.parse(state)
        console.log("localStorage get parsed", parsed)


        const states = []


        // set(state => ({  })
        
    },

    saveStates: () => {

        set(state => ({  }))

    }


}))