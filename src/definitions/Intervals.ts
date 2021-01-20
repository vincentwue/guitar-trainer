


export interface Intervals {
    PerfectUnison: Interval,
    MinorSecond: Interval,
    MajorSecond: Interval,
    MinorThird: Interval,
    MajorThird: Interval,
    PerfectForth: Interval,
    Tritone: Interval,
    PerfectFifth: Interval,
    MinorSixth: Interval,
    MajorSixth: Interval,
    MinorSeventh: Interval,
    MajorSeventh: Interval,
}

export interface Interval {
    readonly id: string,
    // readonly octaveName:string,
    readonly step: number,
    readonly standardSymbol: string,
    // readonly octaveSymbol: string,
    readonly standardColor: string,
}

// https://en.wikipedia.org/wiki/Interval_(music)#cite_ref-TritoneA4_6-0:~:text=below.-,Number%20of,Interval

export const intervals: Intervals = {

    PerfectUnison: {
        id: "unison",
        step: 0,
        standardSymbol: "root",
        standardColor: "#000000"
    },

    MinorSecond: {
        id: "minorSecond",
        step: 1,
        standardSymbol: "b9",
        standardColor: "#cf0e00"
    },

    MajorSecond: {
        id: "majorSecond",
        step: 2,
        standardSymbol: "9",
        standardColor: "#cf4f00"
    },

    MinorThird: {
        id: "minorThird",
        step: 3,
        standardSymbol: "b3",
        standardColor: "#72cf00"
    },

    MajorThird: {
        id: "majorThird",
        step: 4,
        standardSymbol: "3",
        standardColor: "#FF7F50"
    },
    PerfectForth: {
        id: "perfectForth",
        step: 5,
        standardSymbol: "11",
        standardColor: "#00751f"
    },
    Tritone: {
        id: "tritone",
        step: 6,
        standardSymbol: "b5",
        standardColor: "#9FE2BF"
    },


    PerfectFifth: {
        id: "perfectFifth",
        step: 7,
        standardSymbol: "5",
        standardColor: "#6495ED"
    },


    MinorSixth: {
        id: "minorSixth",
        step: 8,
        standardSymbol: "b13",
        standardColor: "#00751f"
    },
    MajorSixth: {
        id: "majorSixth",
        step: 9,
        standardSymbol: "13",
        standardColor: "#900C3F"
    },
    MinorSeventh: {
        id: "minorSeventh",
        step: 10,
        standardSymbol: "7",
        standardColor: "#CCCCFF"
    },
    MajorSeventh: {
        id: "majorSeventh",
        step: 11,
        standardSymbol: "Δ",
        standardColor: "#40E0D0"
    },

}

export const intervalsArray: Interval[] = Object.values(intervals)

