


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
    doReMiColor?:string
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
        standardColor: "#9e006f"
    },

    MajorSecond: {
        id: "majorSecond",
        step: 2,
        standardSymbol: "9",
        standardColor: "#ff00b3"
    },

    MinorThird: {
        id: "minorThird",
        step: 3,
        standardSymbol: "b3",
        standardColor: "#b7ff42"
    },

    MajorThird: {
        id: "majorThird",
        step: 4,
        standardSymbol: "3",
        standardColor: "#7dc900"
    },
    PerfectForth: {
        id: "perfectForth",
        step: 5,
        standardSymbol: "11",
        standardColor: "#f7e886"
    },
    Tritone: {
        id: "tritone",
        step: 6,
        standardSymbol: "b5",
        standardColor: "#ad6500"
    },


    PerfectFifth: {
        id: "perfectFifth",
        step: 7,
        standardSymbol: "5",
        standardColor: "#ffdd00"
    },


    MinorSixth: {
        id: "minorSixth",
        step: 8,
        standardSymbol: "b13",
        standardColor: "#ff0019"
    },
    MajorSixth: {
        id: "majorSixth",
        step: 9,
        standardSymbol: "13",
        standardColor: "#d42c3d"
    },
    MinorSeventh: {
        id: "minorSeventh",
        step: 10,
        standardSymbol: "7",
        standardColor: "#0073ff"
    },
    MajorSeventh: {
        id: "majorSeventh",
        step: 11,
        standardSymbol: "Δ",
        standardColor: "#00eaff"
    },

}

export const solmisationColors = [
    "#138708",//"Do", grün ionisch
    "",//"Ra",
    "#3cd6d4",//"Re", türkis
    "",//"Me",
    "#b31212",//"Mi", phrygisch
    "#ed7505",//"Fa", orange lydisch
    "",//"Se",
    "#ac1bfa",//"So", purple mixo
    "",//"Le",
    "#ffdb38",//"La", gelb moll
    "",//"Li",
    "#996100",//"Ti", braun lokrisch
]

export const intervalsArray: Interval[] = Object.values(intervals).map((interval, i) =>  {
    interval.doReMiColor = solmisationColors[i]
    return interval
})

