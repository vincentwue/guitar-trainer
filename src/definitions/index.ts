
import { specificScales, scales } from "./Scales"
import { getStringInstrument, RawStringInstruments } from './instruments';
import { specificChords } from "./Chords";
import { Note, notes } from "./Notes";
import { createRenderablePattern } from "./renderables";
import { intervals, Interval, intervalsArray } from "./Intervals";
import "./renderables"

export function getInterval(from: Note, to: Note): Interval {

    const n = ((to.intervalFromC.step - from.intervalFromC.step) + 12) % 12

    return intervalsArray[n]

}