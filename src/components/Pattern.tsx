import React from 'react';
import { RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
import classes from "./Pattern.module.css"

type PatternProps = {
  first: RenderablePattern,
  second: RenderablePattern,
  secondHidden: boolean,
  firstIntervals: boolean,
  secondIntervals: boolean,
}

export default function Pattern(props: PatternProps) {

  console.log(props)


  const mappedNotes = props.first.strings.map(string => {

    const mappedString =  string.map(note => {
      const color = hexToRgb(note.interval.standardColor)
      if (note.hidden) return <div className={classes.note + " " + classes.hidden}></div>
      
      else return <div style={{ backgroundColor: color }} className={classes.text + " " + classes.note}>{props.firstIntervals ? note.interval.standardSymbol : note.note.id}</div>
    })

    return <div className={classes.string} >
      {mappedString}
      </div>
  }).reverse()

  return (
    <div className={classes.wrapper}>
       {mappedNotes} 
    </div>
  );
}

