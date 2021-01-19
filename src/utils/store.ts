import create from "zustand"
import { RenderableArray,  RenderableNote, RenderableState, RenderableString, } from "../definitions/renderables"
import { Note, notesArray } from "../definitions/notes"
import { StringInstrument } from "../definitions/instruments"


/* export interface CreateRenderableArray {
    (stringInstrument: StringInstrument, renderable: Renderable): RenderableArray;
}

let createRenderableArray : CreateRenderableArray;

createRenderableArray = function(stringInstrument, renderable) {

    const renderableArray : RenderableArray = {

    }

    return 
} */

export const useRenderableStore = create<RenderableState>(set => ({


    renderableArrays: [],

    add: (stringInstrument, config, renderable) => set(state => {

        const renderableStrings: RenderableString[] = []


        return {
            renderableArrays: []
        }
    }),
    remove: (id) => set(state => {

        return {

        }
    }),



}))