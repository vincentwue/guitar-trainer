import { Interval, intervalsByName } from "./Intervals";

export interface Note {
    flatName: string,
    sharpName: string,
    intervalToC: Interval,
}

function createNote(intervalToC: Interval, flatName: string, sharpName?: string): Note {
    return {
        flatName, sharpName: sharpName ? sharpName : flatName, intervalToC
    }
}
const ins = intervalsByName
export const notes: Note[] = [
    createNote(ins.Prime, "C"),
    createNote(ins.kleineSekunde, "C#", "Db"),
    createNote(ins.großeSekunde, "D"),
    createNote(ins.kleineTerz, "Eb", "D#"),
    createNote(ins.großeTerz, "E"),
    createNote(ins.Quarte, "F"),
    createNote(ins.Tritonus, "Gb", "F#"),
    createNote(ins.Quinte, "G"),
    createNote(ins.kleineSexte, "Ab", "G#"),
    createNote(ins.großeSexte, "A"),
    createNote(ins.kleineSeptime, "Ab", "A#"),
    createNote(ins.großeSeptime, "H"),
]

export interface NotesDictionary {
    [index:string]:Note,
}



export const notesByName:NotesDictionary={

}

for (const note of notes) {
    notesByName[note.flatName] = note
}

    declare const window: any;
window.notes = notes
window.notesByName = notesByName
// console.log(notes)
