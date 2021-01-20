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
        return <option key={i} value={i}>{renderable.id}</option>
    })

    let presentInScales;
    if (state.renderables[state.index1].source.hasOwnProperty("presentInScales")) {

        const renderablePattern = state.renderables[state.index1].source as SpecificChord

        presentInScales = renderablePattern.presentInScales
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

    return <div  style={{ fontSize: 20, display:"flex", flexDirection:"column" , height:"100%"}}>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" ,fontWeight:'bolder',  fontSize:25, padding:10, borderBottom:"2px solid black", backgroundColor:"#ff8282"}}>
            simple two layer guitar scale/chord visualizer
            <div style={{fontSize:17, paddingLeft:20, display:"flex",fontWeight:'bolder', alignItems:"center", justifyContent:"center"}}>

            <a href="https://github.com/vincentwue/guitar-trainer" target="_blank">more info on github</a>
            </div>
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
                <div style={{ width: 500 }}>first layer (choose chord to see its modes):</div>

                <select onChange={e => state.setIndex1(parseFloat(e.target.value))} style={{ fontSize: 20 }} value={state.index1}>

                    {options}
                </select>
            </div>
            <div style={{ width: "100%", display: "flex", padding: 10 }}>

                <div style={{ width: 500 }}>second layer (just small black dots currently):</div>

                <select onChange={e => state.setIndex2(parseFloat(e.target.value))} style={{ fontSize: 20 }} value={state.index2}>
                    {options}


                </select>
            </div>
            <div style={{ width: "100%", display: "flex", margin: 10, marginLeft:200 }}>

                <label>
                    <input type="checkbox" checked={state.secondHidden} onChange={e => state.toggleSecondHidden()}></input>
            hide second layer
        </label>
            </div>
        </div>




        <Pattern
            secondHidden={state.secondHidden}
            first={state.renderables[state.index1]}
            second={state.renderables[state.index2]}
            firstIntervals={state.firstIntervals}
            secondIntervals={state.secondIntervals}
        />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: 1, flexGrow:1, overflow: "auto" }}>
            {presentInScales}

        </div>
    </div>

}

