
import {Dictionary,Note} from "./interfaces"
import { intervals } from "./intervals"


export interface Notes {
    C:Note,
    Db:Note,
    D:Note,
    Eb:Note,
    E:Note,
    F:Note,
    Gb:Note,
    G:Note,
    Ab:Note,
    A:Note,
    Bb:Note,
    B:Note,
}

export const notes : Notes = {
    C:{
        id:"C",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"transparent",
    },
    Db:{
        id:"Db",
        intervalFromC:intervals.MinorSecond,
        standardColor:"#FF0000",
    },
    D:{
        id:"D",
        intervalFromC:intervals.MajorSecond,
        standardColor:"#800000",
    },
    Eb:{
        id:"Eb",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#FFFF00",
    },
    E:{
        id:"E",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#808000",
    },
    F:{
        id:"F",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#00FF00",
    },
    Gb:{
        id:"Gb",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#008000",
    },
    G:{
        id:"G",
        intervalFromC:intervals.PerfectFifth,
        standardColor:"#00FFFF",
    },
    Ab:{
        id:"Ab",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#008080",
    },
    A:{
        id:"A",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#0000FF",
    },
    Bb:{
        id:"Bb",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#000080",
    },
    B:{
        id:"B",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#FF00FF",
    },
}

export const notesArray : Note[] = Object.values(notes)