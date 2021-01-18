import create from "zustand"
import { RenderableArray, Note, RenderableNote, RenderableState, RenderableString, StringInstrument } from "./interfaces"
import { notesArray } from "./notes"


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

        for (const note of stringInstrument.tuning) {

            const notes: RenderableNote[] = []

            const renderableString: RenderableString = {
                notes
            }

            renderableStrings.push(renderableString)

            const indexInNotes: number = notesArray.indexOf(note)
            for (let index = 0; index < stringInstrument.fretsCount; index++) {
                const grabbedNote: Note = notesArray[(index + indexInNotes) % 12]
                
                const renderableNote: RenderableNote = {
                    color:grabbedNote.standardColor,
                    text:grabbedNote.id
                }

                notes.push(renderableNote)

            }


        }


        const renderableArray: RenderableArray = {
            index: 0,
            strings: renderableStrings,
            heading:stringInstrument.tuning[0].id+" "+ renderable.id,
            config
        }


        return {
            renderableArrays: [renderableArray]
        }
    }),
    remove: (id) => set(state => {

        return {

        }
    }),



}))