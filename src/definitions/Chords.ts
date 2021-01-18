import { Interval, Chord, Dictionary, Note } from "./interfaces"
import { intervals } from "./intervals"

export interface Chords {
    minor:Chord,
}

export const chords : Chords =  {
    minor:{
        id:"minor",
        intervals:[intervals.MinorThird, intervals.PerfectUnison],
        symbol:"_",
        isTriad:true,
        isTetrad:false,
        presentInScales:[],
    }
}