import { chords, createSpecificChord } from "./Chords"
import { scales } from "./Scales"
import { notes ,notesByName} from "./Notes"
import { reorderModeNames, calculateModeSteps} from "./Scales"
import { getPositionsOfChordInScale } from "./ChordsAndScales"


it("reorders mode names correctly", () => {

    const a = [
        "ionisch (dur)",
        "dorisch",
        "phrygisch",
        "lydisch",
        "mixolydisch",
        "aeolisch (moll)",
        "lokrisch",
    ]

    const newBase = 2

    const result = [
        "phrygisch",
        "lydisch",
        "mixolydisch",
        "aeolisch (moll)",
        "lokrisch",
        "ionisch (dur)",
        "dorisch",
    ]


    expect(reorderModeNames(a, newBase)).toStrictEqual(result)

})

it("puts the steps right", () => {

    const dur = [0, 2, 4, 5, 7, 9, 11]
    const moll =[0, 2, 3, 5, 7, 8, 10]
    const phrygisch =[0, 1, 3, 5, 7, 8, 10]

    expect(calculateModeSteps(dur, 6)).toStrictEqual(moll)
    expect(calculateModeSteps(dur, 3)).toStrictEqual(phrygisch)

})

it("creates specific chords", () => {


    // expect(createSpecificChord(notesByName.A, chords[0]).notes).toStrictEqual([notesByName.A, notesByName.C, notesByName.E])
    expect(createSpecificChord(notesByName.H, chords[2]).notes).toStrictEqual([notesByName.H, notesByName.Eb, notesByName.Gb, notesByName.A])

}) 

it("knows when a chord is in a scale", ()=>{


    expect(getPositionsOfChordInScale(scales["ionisch (dur)"], chords[0])).toStrictEqual([1,2,5])

})