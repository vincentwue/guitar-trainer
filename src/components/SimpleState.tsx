import React from 'react';
import { useSimpleStore } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import classes from "./Pattern.module.css"
import Pattern from "./Pattern"

export default function SimpleState() {

    const state = useSimpleStore()
    console.log(state)

    const options = state.renderables.map((renderable, i) => {
        return <option value={i}>{renderable.id}</option>
    })
    return <div className={classes.wrapper}>

        <label>
            <input type="checkbox" checked={state.secondHidden} onChange={e => state.toggleSecondHidden()}></input>
            hide second
        </label>
        <label>
            <input type="checkbox" checked={state.firstIntervals} onChange={e => state.toggleFirstIntervals()}></input>
            first intervals
        </label>
        <label>
            <input type="checkbox" checked={state.secondIntervals} onChange={e => state.toggleSecondIntervals()}></input>
            second intervals
        </label>

        <select onChange={e => state.setIndex1(parseFloat(e.target.value))} >

            {options}
        </select>
        <select onChange={e => state.setIndex2(parseFloat(e.target.value))} >
            {options}


        </select>
        <Pattern
            secondHidden={state.secondHidden}
            first={state.renderables[state.index1]}
            second={state.renderables[state.index2]}
            firstIntervals={state.firstIntervals}
            secondIntervals={state.secondIntervals}
        />
    </div>

}

