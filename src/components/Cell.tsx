import React from 'react';
import { Interval, intervals } from '../definitions/intervals';
import { Note } from '../definitions/notes';
import { RenderableNote, RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
import classes from "./Cell.module.css"
import classnames from "classnames"
import classNames from 'classnames';

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

export default function Pattern(props: CellProps) {

    // console.log(props)

    const { first, second } = props;
    const colorFirst = hexToRgb(first.renderableNote.interval.standardColor)
    const colorSecond = hexToRgb(second.renderableNote.interval.standardColor)

    if (first.renderableNote.hidden && second.renderableNote.hidden) return <div className={classes.cell}>

        <StringTemplate />

    </div>

    return <div className={classes.cell}>

        <StringTemplate>
            <div className={classes.wrapper}>

                <div
                    style={{ backgroundColor: colorFirst }}
                    className={classNames(
                        classes.first,
                        first.renderableNote.hidden && classes.hidden
                    )}>

                    {props.first.renderableNote.note.id}

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

