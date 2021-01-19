
import { specificScales, scales } from "./scales"
import { getStringInstrument, RawStringInstruments } from './instruments';
import { specificChords } from "./chords";

const guitar = getStringInstrument(RawStringInstruments.standardGuitar)
console.log(guitar)
export { }


console.log(scales)
console.log(specificScales)

console.log(specificChords)

