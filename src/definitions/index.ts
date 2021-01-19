
import { specificScales, scales } from "./scales"
import { getStringInstrument, RawStringInstruments } from './instruments';
import { specificChords } from "./chords";
import { Note, notes } from "../definitions/notes";
import { createRenderablePattern } from "./renderables";
import { intervals, Interval, intervalsArray } from "../definitions/intervals";
import "./renderables"

export function getInterval(from: Note, to: Note): Interval {

    const n = ((to.intervalFromC.step - from.intervalFromC.step) + 12) % 12

    return intervalsArray[n]

}