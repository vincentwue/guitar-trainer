import React from 'react';
import { Interval, intervals } from '../definitions/intervals';
import { Note } from '../definitions/notes';
import { RenderableNote, RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
import classes from "./Pattern.module.css"

export interface RenderableCell {
    renderableNote: RenderableNote,
    colors: DisplayType,
    symbols: DisplayType,
}
export interface CellProps {
    first: RenderableCell,
    second: RenderableCell,
    secondHidden:boolean
}

export enum DisplayType {
    Intervals = "Intervals",
    Notes = "Notes",
}



function StringTemplate(props: any) {

    return <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", position: "relative" }}>
        <div style={{
            display: "flex",
            width: "100%",
            background: "black",
            height: "1px"
            /*             display: "absolute",
                        top: 1,
                        left: 10,
                        right: 10,
                        bottom:5,
                        backgroundColor: "black", */

        }}></div>
        <div style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }}>

            {props.children}
        </div>
    </div>

}

export default function Pattern(props: CellProps) {

    // console.log(props)

    const { first, second } = props;
     const colorFirst = hexToRgb(first.renderableNote.interval.standardColor)
     const colorSecond = hexToRgb(second.renderableNote.interval.standardColor)

    if (first.renderableNote.hidden && second.renderableNote.hidden) return <StringTemplate />

    return <div style={{ height: 60 }}>

        <StringTemplate>
            <div style={{
                position: "relative",
                height: "100%",
                width: "100%",
                display: "flex",
            }}>

                <div className="first" style={{
                    position: "absolute",
                    display: first.renderableNote.hidden ? "none" : "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    color: "red",
                    backgroundColor: first.renderableNote.interval === intervals.PerfectUnison? "grey" : colorFirst,
                    borderRadius:10,
                }}>

                    {props.first.renderableNote.note.id}
                </div>

                <div className="second" style={{
                    position: "absolute",
                    display: second.renderableNote.hidden || props.secondHidden ? "none" : "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 0,
                    left: "80%",
                    bottom: "80%",
                    right: 0,
                    color:"blue",
                    fontSize:25,
                    // background:colorSecond,
                    background:"black",
                    borderRadius:20,
                }}>

                    {/* {props.second.renderableNote.interval.standardSymbol} */}
                    {/* {props.second.renderableNote.note.id} */}
                </div>

            </div>
        </StringTemplate>
    </div>

}

