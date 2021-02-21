import React from 'react';
import { State } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import classes from "./SimpleState.module.css"
import Pattern from "./Pattern"
import { SpecificChord } from '../definitions/chords';
import { renderables } from '../definitions/renderables';
import { SpecificScale, specificScales } from '../definitions/scales';
import { UseStore } from 'zustand';


export type SimpleStateType = {
    useState: UseStore<State>,
    create(usestore: UseStore<State>): void,
    delete(usestore: UseStore<State>): void
}

export default function SimpleState(props: SimpleStateType) {

    const state = props.useState()

    console.log(state)
    console.log(state.serialize())

    const options = state.renderables.map((renderable, i) => {
        return <option key={i} value={i}>{renderable.id}</option>
    })

    let presentInScales;
    if (state.renderables[state.index1].source.hasOwnProperty("presentInScales")) {

        const renderablePattern = state.renderables[state.index1].source as SpecificChord

        presentInScales = renderablePattern.presentInScales.filter(e => !e.id.includes("-del"))
            // filter to only show scales with specific root note
            .filter(pattern => pattern.id.split(" ")[0] === state.renderables[state.index1].id.split(" ")[0])
            .map((specificScale, i) => {
                return <div key={i} >
                    <button
                        style={{ padding: 10, paddingLeft: 40, margin: 10, fontSize: 20, width: 500, textAlign: "left" }}
                        onClick={e => {

                            const abc = renderables.map(renderable => renderable.id).indexOf(specificScale.id)
                            state.setIndex2(abc)

                        }}>{specificScale.id}</button>
                    {"  -- base scale:  " + (specificScale.scale.step + 1) + " of  " + specificScale.baseSpecificScale?.id}
                </div>
            })

    }

    let containingChords;

    if (state.renderables[state.index1].source.hasOwnProperty("autoChords")) {

        const specificScale = state.renderables[state.index1].source as SpecificScale

        if (specificScale.autoChords) {

            containingChords = specificScale.autoChords.map((chord, i) => {

                // const specificChord  = chord as SpecificChord

                console.log(chord)

                return <button style={{ fontSize: 20, padding: 10, margin: 20 }} key={i} onClick={e => {
                    const renderable = renderables.find(r => r.id === chord.id)
                    if (renderable) {

                        const index = renderables.indexOf(renderable)
                        state.setIndex2(index)
                    }
                }}>{(i + 1)}
                    <br></br>
                    {chord.id}
                    <br></br>
                    {specificScale.scale.rawScale.modes[i]}
                </button>
            })
        }


    }


    return <div style={{ fontSize: 20, display: "flex", flexDirection: "column", height: "100%", minHeight:700 }}>


        <div style={{height:2, backgroundColor:"black", marginBottom:5}}>
        
        
        
        </div>

        <div >

        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>


            {/*         <label>
            <input type="checkbox" checked={state.firstIntervals} onChange={e => state.toggleFirstIntervals()}></input>
            first intervals
            </label>
            <label>
            <input type="checkbox" checked={state.secondIntervals} onChange={e => state.toggleSecondIntervals()}></input>
            second intervals
        </label> */}

            <div style={{ width: "100%", display: "flex", padding: 10 }}>
                <div style={{ width: 500, marginRight: 20, textAlign: "right" }}>first layer:</div>

                <select onChange={e => state.setIndex1(parseFloat(e.target.value))} style={{ fontSize: 20 }} value={state.index1}>

                    {options}
                </select>
                <button style={{ marginLeft: 20 }} onClick={e => {
                    const index = state.index1
                    state.setIndex1(state.index2)
                    state.setIndex2(index)
                }}>invert</button>
            </div>
            <div style={{ width: "100%", display: "flex", padding: 10 }}>

                <div style={{ width: 500, marginRight: 20, textAlign: "right" }}>second layer:</div>

                <select onChange={e => state.setIndex2(parseFloat(e.target.value))} style={{ fontSize: 20 }} value={state.index2}>
                    {options}


                </select>
                <div style={{ marginLeft: 20 }}>
                    <label>
                        <input type="checkbox" checked={state.secondHidden} onChange={e => state.toggleSecondHidden()}></input>
            hide second layer
        </label>
                </div>
                <button onClick={e => props.create(props.useState)}>copy</button>
                <button onClick={e => props.delete(props.useState)}>delete</button>
            </div>



        </div>




        <Pattern
            secondHidden={state.secondHidden}
            first={state.renderables[state.index1]}
            second={state.renderables[state.index2]}
        /*       firstIntervals={state.firstIntervals}
              secondIntervals={state.secondIntervals} */
        />

        <div style={{ display: presentInScales ? "flex" : "none", flexDirection: "column", alignItems: "flex-start", height: 1, flexGrow: 1, overflow: "auto" }}>
            {presentInScales}
        </div>
        <div style={{ display: containingChords ? "flex" : "none", flexDirection: "row", justifyContent: "center", height: 1, flexGrow: 1, overflow: "auto" }}>
            {containingChords}
        </div>
    </div>

}

