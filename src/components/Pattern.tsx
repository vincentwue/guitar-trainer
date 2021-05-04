import classes from './Pattern.piano.module.css';
import React, { useEffect } from 'react';
import { RenderablePattern } from '../definitions/renderables';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import { hexToRgb } from '../utils/utils';
import Cell, { DisplayType } from "./Cell"
import classNames from 'classnames';
import { useMasterStore } from '../utils/store';

type PatternProps = {
  first: RenderablePattern,
  second: RenderablePattern,
  secondHidden: boolean,
  n: number,
  /*   firstIntervals: boolean,
    secondIntervals: boolean, */
}

export default function Pattern(props: PatternProps) {

  console.log("pattern", props)

  const { second, first } = props

  const a = []
  const masterState = useMasterStore()


  for (let index = 0; index < 50; index++) {

    const noBlack = index % 7 === 0 || index % 7 === 3

    const stepsFromC = index % 7

    const inScale = first.notes.find(note => note.intervalFromC.step === stepsFromC)
    const isRoot = first.notes[0].intervalFromC.step === stepsFromC


    const whiteKey = <div className={classes.whiteKey}
      style={{
        backgroundColor: isRoot ? "yellow" : inScale ? "green" : "white"
      }}
    >
      

      {!noBlack &&
        <div className={classes.blackKey}
          style={{
            left: -6,
            width: 10
          }}
        ></div>
      }

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

