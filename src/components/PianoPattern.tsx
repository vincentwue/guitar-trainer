import classes from './Pattern.piano.module.css';
import React, { useEffect } from 'react';
import { RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
import Cell, { DisplayType } from "./Cell"
import classNames from 'classnames';
import { useMasterStore } from '../utils/store';
import { notesArray } from '../definitions/Notes';

type PatternProps = {
  first: RenderablePattern,
  second: RenderablePattern,
  secondHidden: boolean,
  n: number,
  /*   firstIntervals: boolean,
    secondIntervals: boolean, */
}

export default function PianoPattern(props: PatternProps) {

  console.log("pattern", props)

  const { second, first } = props

  const a = []
  const masterState = useMasterStore()

  let blackCount = 0
  for (let index = 0; index < 50; index++) {

    const noBlack = index % 7 === 0 || index % 7 === 3
    if (!noBlack) blackCount++

    const stepsFromC = (blackCount + index) % 12

    const inScale = first.notes.find(note => note.intervalFromC.step === stepsFromC)
    const isRoot = first.notes[0].intervalFromC.step === stepsFromC
    // const inScale2 = second.notes.find(note => note.intervalFromC.step === stepsFromC)
    // const isRoot2 = second.notes[0].intervalFromC.step === stepsFromC

    const stepsFromCBlack = (blackCount + index - 1) % 12

    const isBlackinScale = first.notes.find(note => note.intervalFromC.step === stepsFromCBlack)
    const isBlackRoot = first.notes[0].intervalFromC.step === stepsFromCBlack
    // const isBlackinScale2 = second.notes.find(note => note.intervalFromC.step === stepsFromCBlack)
    // const isBlackRoot2 = second.notes[0].intervalFromC.step === stepsFromCBlack

    // const rootColor="red"

    const whiteKey = <div className={classes.whiteKey}
      style={{
        // backgroundColor: isRoot ? rootColor : inScale ? "green" : "white"
        backgroundColor: "white"
      }}
    >

      {!noBlack &&
        <div className={classes.blackKey}
          style={{
            left: -6,
            width: 6,
            border: "2px solid black",
            // backgroundColor:isBlackRoot ? rootColor : isBlackinScale ? "green" : "white"
            backgroundColor: "black"
          }}
        >
          {/* <div className={classNames(isRoot2 && classes.isRoot2, inScale2 && classes.inScale2)}></div> */}
          <div className={classNames(isBlackRoot && classes.isRoot, isBlackinScale && classes.inScale)}></div>

        </div>
      }

      <div className={classes.whiteKeyNoteName}>
        {/* {notesArray[stepsFromC].id} */}

        <div className={classNames(isRoot && classes.isRoot, inScale && classes.inScale)}></div>
        {/* <div className={classNames(isRoot2 && classes.isRoot2, inScale2 && classes.inScale2, classes.white)}></div> */}

      </div>

    </div>
    a.push(whiteKey)

  }


  return (<div>
    <div className={classNames(classes.heading, !masterState.hideLegends ? classes.hidden : "")}>

      {props.n + " - " + props.first.id + " - " + props.second.id}

    </div>
    <div className={classes.wrapper}>
      {a}
    </div>
  </div>
  );
}

