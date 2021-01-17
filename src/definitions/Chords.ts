import { Interval, intervalsByName } from "./Intervals";
import { Note, notes } from "./Notes";

export interface SpecificChord {
    chord:Chord,
    notes:Note[],
    rootNote: Note,
}

export function createSpecificChord(note : Note, chord : Chord) : SpecificChord {

    
    let destination = []

    for (const interval of chord.intervals) {
        destination.push((interval.step+note.intervalToC.step) %12)
    }
    
    destination = destination.map(n => notes[n])

    return {
        chord, rootNote:note,notes:destination
    }

}

export interface Chord {
    name: string,
    intervals: Interval[],
    isTriad:boolean,
    isTetrad:boolean,
}


function createChord(name: string, intervals: Interval[]): Chord {

    return {
        intervals, name, isTetrad : intervals.length === 4, isTriad : intervals.length ===3
    }

}

const ins = intervalsByName
export const chords: Chord[] = [
    createChord("_", [
        ins.Prime,
        ins.kleineTerz,
        ins.Quinte,
    ]),
    createChord("", [
        ins.Prime,
        ins.großeTerz,
        ins.Quinte,
    ]),
    createChord("7", [
        ins.Prime,
        ins.großeTerz,
        ins.Quinte,
        ins.kleineSeptime,
    ]),
    createChord("7#5", [
        ins.Prime,
        ins.großeTerz,
        ins.kleineSexte,
        ins.kleineSeptime,
    ]),
    createChord("7#11", [
        ins.Prime,
        ins.großeTerz,
        ins.Tritonus,
        ins.Quinte,
        ins.kleineSeptime,
    ]),
    createChord("7b9", [
        ins.Prime,
        ins.kleineSekunde,
        ins.großeTerz,
        ins.Quinte,
        ins.kleineSeptime,
    ]),
    createChord("_7", [
        ins.Prime,
        ins.kleineTerz,
        ins.Quinte,
        ins.kleineSeptime,
    ]),
    createChord("_7b5", [
        ins.Prime,
        ins.kleineTerz,
        ins.Tritonus,
        ins.kleineSeptime,
    ]),
    createChord("ᵒ7", [
        ins.Prime,
        ins.kleineTerz,
        ins.Tritonus,
        ins.kleineSeptime,
    ]),
    createChord("ᵒ", [
        ins.Prime,
        ins.kleineTerz,
        ins.Tritonus,
    ]),
]

declare const window: any;
window.chords = chords
// console.log(chords)
