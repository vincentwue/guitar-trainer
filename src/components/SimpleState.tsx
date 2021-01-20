import React from 'react';
import { useSimpleStore } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import classes from "./Pattern.module.css"
import Pattern from "./Pattern"
import { SpecificChord } from '../definitions/chords';
import { renderables } from '../definitions/renderables';

export default function SimpleState() {

    const state = useSimpleStore()
    console.log(state)

    const options = state.renderables.map((renderable, i) => {
        return <option value={i}>{renderable.id}</option>
    })

    let presentInScales;
    if (state.renderables[state.index1].source.hasOwnProperty("presentInScales")) {

        const renderablePattern = state.renderables[state.index1].source as SpecificChord

        presentInScales = renderablePattern.presentInScales
            // filter to only show scales with specific root note
            .filter(pattern => pattern.id.split(" ")[0] === state.renderables[state.index1].id.split(" ")[0])
            .map((specificScale, i) => {
                return <div >
                    <button
                        style={{ padding: 10, paddingLeft: 40, margin: 10, fontSize: 20, width: 900, textAlign: "left" }}
                        onClick={e => {

                            const abc = renderables.map(renderable => renderable.id).indexOf(specificScale.id)
                            console.log("d", { e, abc, specificScale })
                            state.setIndex2(abc)

                        }}>{specificScale.id}</button>
                         {"  -- base scale:  "+(specificScale.scale.step+1)+"  " + specificScale.baseSpecificScale?.id}
                </div>
            })

    }

    return <div className={classes.wrapper}>

        <label>
            <input type="checkbox" checked={state.secondHidden} onChange={e => state.toggleSecondHidden()}></input>
            hide second
        </label>
        {/*         <label>
            <input type="checkbox" checked={state.firstIntervals} onChange={e => state.toggleFirstIntervals()}></input>
            first intervals
        </label>
        <label>
            <input type="checkbox" checked={state.secondIntervals} onChange={e => state.toggleSecondIntervals()}></input>
            second intervals
        </label> */}

        <select onChange={e => state.setIndex1(parseFloat(e.target.value))} value={state.index1}>

            {options}
        </select>
        <select onChange={e => state.setIndex2(parseFloat(e.target.value))} value={state.index2}>
            {options}


        </select>
        <Pattern
            secondHidden={state.secondHidden}
            first={state.renderables[state.index1]}
            second={state.renderables[state.index2]}
            firstIntervals={state.firstIntervals}
            secondIntervals={state.secondIntervals}
        />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: 400, overflow: "auto" }}>
            {presentInScales}

        </div>
    </div>

}

