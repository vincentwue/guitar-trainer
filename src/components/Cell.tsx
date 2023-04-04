import React from 'react';
import { Interval, intervals } from '../definitions/Intervals';
import { Note } from '../definitions/Notes';
import { RenderableNote, RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
import classes from "./Cell.module.css"
import classnames from "classnames"
import classNames from 'classnames';
import useLocalStorage from './useLocalStorage';

export interface RenderableCell {
    renderableNote: RenderableNote,
    colors: DisplayType,
    symbols: DisplayType,
}
export interface CellProps {
    first: RenderableCell,
    second: RenderableCell,
    secondHidden: boolean
}

export enum DisplayType {
    Intervals = "Intervals",
    Notes = "Notes",
}

function StringTemplate(props: any) {

    return <div className={classes.stringTemplate}>
        <div className={classes.stringTemplate1}></div>
        <div className={classes.stringTemplate2}>

            {props.children}
        </div>
    </div>

}
export const solmisation = [
    "Do",
    "Ra",
    "Re",
    "Me",
    "Mi",
    "Fa",
    "Se",
    "So",
    "Le",
    "La",
    "Li",
    "Ti",
]


function getDoReMi(props: CellProps) {
    console.log(props)
    
    return solmisation[props.first.renderableNote.interval.step]
}

export default function Pattern(props: CellProps) {

    const [doReMi, setDoReMi] = useLocalStorage("doremi", true)

    // console.log(props)

    const { first, second } = props;
    const colorFirst = hexToRgb(first.renderableNote.interval.standardColor)
    const colorDoReMi = first.renderableNote.interval.doReMiColor ? hexToRgb(first.renderableNote.interval.doReMiColor, true) : "white"
    const colorSecond = hexToRgb(second.renderableNote.interval.standardColor)

    if (first.renderableNote.hidden && second.renderableNote.hidden) return <div className={classes.cell}>

        <StringTemplate />

    </div>

    return <div className={classes.cell}>

        <StringTemplate>
            <div className={classes.wrapper}>

                <div
                    style={{ backgroundColor: doReMi ? colorDoReMi : colorFirst }}
                    className={classNames(
                        classes.first,
                        first.renderableNote.hidden && classes.hidden,
                        doReMi ? classes.doremi : ""
                    )}>

                    {doReMi ?
                        <React.Fragment>
                            {getDoReMi(props)}
                        </React.Fragment>
                        :
                        <React.Fragment>

                            {props.first.renderableNote.note.id}
                        </React.Fragment>
                    }


                </div>

                <div className={classnames(
                    classes.second,
                    (second.renderableNote.hidden || props.secondHidden) && classes.hidden,
                    second.renderableNote.interval === intervals.PerfectUnison && classes.isUnison
                )} ></div>

            </div>
        </StringTemplate>
    </div>

}

