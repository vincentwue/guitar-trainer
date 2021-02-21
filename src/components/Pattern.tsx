import classes from './Patterns.module.css';
import React from 'react';
import { RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
// import classes from "./Pattern.module.css"
import Cell, { DisplayType } from "./Cell"
import classNames from 'classnames';
import { useMasterStore } from '../utils/store';

type PatternProps = {
  first: RenderablePattern,
  second: RenderablePattern,
  secondHidden: boolean,
/*   firstIntervals: boolean,
  secondIntervals: boolean, */
}

export default function Pattern(props: PatternProps) {

  console.log(props)

  const reversedSecondStrings = props.second.strings
  const masterState = useMasterStore()

  const mappedNotes = props.first.strings.map((string, stringIndex) => {

    const mappedString = string.map((renderableNote, fretIndex) => {
      // const color = hexToRgb(renderableNote.interval.standardColor)

/*       let borderRight = "4px solid grey";
      let borderLeft = "4px solid grey";
      if (fretIndex === 0) borderRight = "5px solid black"
      if (fretIndex === 11) borderRight = "5px solid black"
      if (fretIndex === 12) borderRight = "5px solid black"
      if (fretIndex === 23) borderRight = "5px solid black"
      if (fretIndex === 1) borderLeft = "5px solid black"
      if (fretIndex === 13) borderLeft = "5px solid black"
      if (fretIndex === 12) borderLeft = "5px solid black"
      if (fretIndex === 24) borderLeft = "5px solid black" */
      
      return <div  key={fretIndex} className={classNames(classes["fret"+fretIndex], classes.fret)}  style={{
        gridColumnStart: fretIndex + 1,
        gridColumnEnd: fretIndex + 2,
        gridRowStart: props.first.strings.length - stringIndex,
        gridRowEnd: props.first.strings.length - stringIndex,
        // backgroundColor: color,
        // minWidth:40,
        // }}>{note.hidden ? "" : props.firstIntervals ? note.interval.standardSymbol : note.note.id}</div>
      }}><Cell
        secondHidden={props.secondHidden}
        first={{ renderableNote, colors: DisplayType.Intervals, symbols: DisplayType.Notes }}
        second={{ renderableNote: reversedSecondStrings[stringIndex][fretIndex], colors: DisplayType.Intervals, symbols: DisplayType.Notes }}
      ></Cell></div>
      // if (note.hidden) return <div className={classes.note + " " + classes.hidden}></div>

      // else return <div style={{ backgroundColor: color }} className={classes.text + " " + classes.note}>{props.firstIntervals ? note.interval.standardSymbol : note.note.id}</div>
    })

    return mappedString
  })

  const mappedFretNumbers = props.first.fretsArray.map((n, i) => {
    return <div key={i} className={classes.preFretNumbers} style={{
      gridColumnStart: i + 1,
      gridColumnEnd: i + 2,
      gridRowStart: props.first.strings.length + 2,
      gridRowEnd: props.first.strings.length + 3,
      // textAlign:"center",
      // minWidth:40,
    }}>{n ? n : ""}</div>
  })
  const mappedFretNumbers2 = props.first.fretsArray.map((n, i) => {
    return <div key={i} className={classes.postFretNumbers} style={{
      gridColumnStart: i + 1,
      gridColumnEnd: i + 2,
      gridRowStart: 0,
      gridRowEnd: 1,
      // textAlign:"center",
      // minWidth:40,
    }}>{n ? n : ""}</div>
  })

  return (
    <div >
      <div className={classes.grid} style={{
        display: "grid",
        gridTemplateColumns: "repeat(" + props.first.fretsArray.length + ", 1fr)",
        gridTemplateRows: "repeat(" + props.first.strings.length + ", 1fr)",
      }}>
        {mappedNotes}
        {mappedFretNumbers2}
        {!masterState.hideLegends && mappedFretNumbers}
      </div>
    </div>
  );
}

