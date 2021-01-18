import React from 'react';
import { RenderableArray, RenderableState, RenderableString } from '../definitions/interfaces';
import { hexToRgb } from '../utils/utils';
import classes from "./RenderableArrayComponent.module.css"

type RenderableArrayComponentProps = {
  renderableState:RenderableState,
  renderableArray:RenderableArray,
}

export function RenderableArrayComponent(props:RenderableArrayComponentProps) {

  console.log(props)

  const mappedArray = props.renderableArray.strings.map((string : RenderableString) => {

      
    
    const mappedNotes = string.notes.map(note => {
      const rgb = hexToRgb(note.color)
      let rgbString;
      if (rgb) {
        rgbString = "rgb("+rgb.r+","+rgb.g+","+rgb.b+",0.5)"
        console.log(rgbString)
      }
      return <div className={classes.notes} style={{backgroundColor:rgbString}}>
        <div className={classes.text}>{note.text}</div>
      </div>
    })

    return <div className={classes.box}>{mappedNotes}</div>


  }).reverse()
  
  return (
    <div className={classes.wrapper}>
      {/* props.renderableArray.id */}
      hello wolrd
      {mappedArray}
    </div>
  );
}

