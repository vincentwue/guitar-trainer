
import { Interval, intervals } from "./Intervals"


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

export interface Note {
    readonly id: string,
    readonly intervalFromC: Interval,
    readonly standardColor: string,
}

export const notes : Notes = {
    C:{
        id:"C",
        intervalFromC:intervals.PerfectUnison,
        standardColor:"#ffffff",
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
        intervalFromC:intervals.MinorThird,
        standardColor:"#FFFF00",
    },
    E:{
        id:"E",
        intervalFromC:intervals.MajorThird,
        standardColor:"#808000",
    },
    F:{
        id:"F",
        intervalFromC:intervals.PerfectForth,
        standardColor:"#00FF00",
    },
    Gb:{
        id:"Gb",
        intervalFromC:intervals.Tritone,
        standardColor:"#008000",
    },
    G:{
        id:"G",
        intervalFromC:intervals.PerfectFifth,
        standardColor:"#00FFFF",
    },
    Ab:{
        id:"Ab",
        intervalFromC:intervals.MinorSixth,
        standardColor:"#008080",
    },
    A:{
        id:"A",
        intervalFromC:intervals.MajorSixth,
        standardColor:"#0000FF",
    },
    Bb:{
        id:"Bb",
        intervalFromC:intervals.MinorSeventh,
        standardColor:"#000080",
    },
    B:{
        id:"B",
        intervalFromC:intervals.MajorSeventh,
        standardColor:"#FF00FF",
    },
}

export const notesArray : Note[] = Object.values(notes)