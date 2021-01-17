import {Scale, scales} from "./Scales"
import {Chord} from "./Chords"

export function getPositionsOfChordInScale(scale: Scale, chord: Chord) : number[] {

    const scalesjo : Scale[]= scale.modes.map((scale:string) => scales[scale])

    const result : number[] =[]

    for (let index = 0; index < scalesjo.length; index++) {
        const element = scalesjo[index];
        
        let chordIsThere = true
        for (const interval of chord.intervals) {

            if (!element.steps.includes(interval.step)) {
                chordIsThere = false
                break;
            }
        }
        if (chordIsThere) {
            result.push(index)
        }


    }

    return result

}