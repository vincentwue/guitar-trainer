import {Scale, scales,createSpecificScale} from "./Scales"
import {Chord, chords, createSpecificChord, SpecificChord} from "./Chords"
import { notes } from "./Notes";

console.log("dd",getPositionsOfChordInScale(scales["ionisch (dur)"], chords[2]))
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
declare const window:any
window.specificScales = createAllSpecificScalesWithSpecificChords()
export function createAllSpecificScalesWithSpecificChords() {

    // run over all nrotes

    const allSpecificScales = []

    for (const note of notes) {

        // run over all scales
        for (const [, scale] of Array.from(Object.entries(scales))) {
            

            // create all specific scales
            const specificScale = createSpecificScale(note, scale)
            specificScale.specificChords = []
            
            let presentChords = []
            // get all possible chords
            for (const chord of chords) {

                const inScale = getPositionsOfChordInScale(scale, chord)

                
                if (inScale.length) {

                    const specificChords : SpecificChord[] = inScale.map(n => {
                        const note = specificScale.notes[n]
                        return createSpecificChord(note, chord)
                    })
                    
                    // const specificChord = createSpecificChord()
                    specificScale.specificChords=specificScale.specificChords.concat(specificChords)
                    presentChords.push({
                        inScale, chord, specificChords
                    })
                }
                console.log(scale.name,chord.name, inScale,{chord, inScale, scale, specificScale})
                

            }

            // create specific chords
            allSpecificScales.push(specificScale,
               )
        }
        
        
        
    }
    console.log(allSpecificScales)
    
    return allSpecificScales

}