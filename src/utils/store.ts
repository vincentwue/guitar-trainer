import create, { UseStore } from "zustand"
import { Note, notesArray } from "../definitions/notes"
import { StringInstrument } from "../definitions/instruments"
import { RenderablePattern, renderables } from "../definitions/renderables"



export type State = {
    renderables: RenderablePattern[],

    index1: number,
    index2: number,

    /*     firstIntervals:boolean,
        secondIntervals:boolean,
     */
    secondHidden: boolean,

    /*     toggleFirstIntervals:() => void,
        toggleSecondIntervals:() => void, */

    setIndex1: (index: number) => void
    setIndex2: (index: number) => void
    toggleSecondHidden: () => void,


    serialize: () => SerializedState,
    deserialize: (serializedState: SerializedState) => void,


}

export interface SerializedState {
    index1: number,
    index2: number,

    secondHidden: boolean,
}

declare const window: any;

export const createUseSimpleStore = (a: number = 0, b: number = 0) => create<State>((set, get) => ({
    renderables,

    index1: a,
    index2: b,

    /*     firstIntervals:false,
        secondIntervals:false, */

    secondHidden: false,

    setIndex1: (index1) => {
        // console.log(index1, get())
        set(state => ({ index1 }))
        useMasterStore.getState().saveStates()
    },
    setIndex2: (index2) => {
        // console.log(index2, get())
        set(state => ({ index2 }))
        useMasterStore.getState().saveStates()

    },
    toggleSecondHidden: () => {
        set(state => ({ secondHidden: !state.secondHidden }))
        useMasterStore.getState().saveStates()

    },
    /* toggleFirstIntervals: () => set(state => ({ firstIntervals:!state.firstIntervals })),
    toggleSecondIntervals: () => set(state => ({ secondIntervals:!state.secondIntervals })),
 */

    serialize: () => {
        const state = get()

        return {
            index1: state.index1,
            index2: state.index2,
            secondHidden: state.secondHidden,
        }
    },

    deserialize: (serializedState) => {

        set(state => {
            return {
                index1: serializedState.index1,
                index2: serializedState.index2,
                secondHidden: serializedState.secondHidden,
            }
        })

    },

}))

export type MasterStore = {
    states: UseStore<State>[],

    hideLegends: boolean,

    toggleHideLegends(): void,

    loadStates(): void,
    saveStates(): void,

    create(paramState: UseStore<State>): void,
    delete(paramState: UseStore<State>): void,

}

export const useMasterStore = create<MasterStore>((set, get) => ({

    states: [],

    hideLegends: false,
    toggleHideLegends: () => set({ hideLegends: !get().hideLegends }),

    loadStates: () => {

        if (get().states.length > 0) {
            console.error("already loaded state from localstorage")
            return
        }

        const state = localStorage.getItem("state")
        if (!state) {

            const simpleStore = createUseSimpleStore()
            simpleStore.getState().setIndex1(0)
            simpleStore.getState().setIndex2(1)
            // simpleStore.getState().toggleSecondHidden()
            set({ states: [simpleStore] })
            get().saveStates()
            return
        };

        console.log("localStorage get", state)
        const parsed = JSON.parse(state)
        console.log("localStorage get parsed", parsed)

        const mapped = parsed.map((item: SerializedState) => {
            const store = createUseSimpleStore()
            store.getState().deserialize(item)
            return store
        })


        const states = mapped


        set(state => ({ states }))

    },

    saveStates: () => {

        const serialized = get().states.map(s => s.getState().serialize())
        console.log(serialized)
        localStorage.setItem("state", JSON.stringify(serialized))
        // window.location.reload()

    },

    create: paramState => {

        const store = createUseSimpleStore()
        // set(() => ({ states: [newStore].concat(get().states) }))


        // store.getState().setIndex1(paramState.getState().index1)
        // store.getState().setIndex2(paramState.getState().index2)

        // return

        store.getState().deserialize({
            index1: paramState.getState().index1,
            index2: paramState.getState().index2,
            secondHidden: paramState.getState().secondHidden,
        })

        const oldIndex = get().states.indexOf(paramState)

        const left = get().states.slice(0, oldIndex)
        const right = get().states.slice(oldIndex)

        const newStates = [...left, store, ...right]

        set({ states: newStates })

        get().saveStates()
        window.location.reload()
        return

    },

    delete: paramState => {
        if (get().states.length === 1) return
        set({ states: get().states.filter(s => s !== paramState) })
        get().saveStates()
        window.location.reload()
    }


}))

useMasterStore.getState().loadStates()