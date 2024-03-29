import React from 'react';
import { createUseSimpleStore, State, useMasterStore } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import classes from "./SimpleState.module.css"
import Pattern from "./Pattern"
import PianoPattern from "./PianoPattern"
import { SpecificChord } from '../definitions/Chords';
import { renderables } from '../definitions/renderables';
import { SpecificScale, specificScales } from '../definitions/Scales';
import { UseStore } from 'zustand';
import useLocalStorage from './useLocalStorage';


export type SimpleStateType = {
    useState: UseStore<State>,
    create(usestore: UseStore<State>): void,
    delete(usestore: UseStore<State>): void,
    n: number,
}

export default function SimpleState(props: SimpleStateType) {

    const state = props.useState()

    // console.log("SimpleState props", state)
    // console.log(state.serialize())
    const masterState = useMasterStore()
    const [doReMi, setDoReMi] = useLocalStorage("doremi", true)

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
                return <div key={i} className={classes.presentInScalesRow}>
                    <button
                        className={classes.presentInScalesButton}
                        /* style={{ padding: 10, paddingLeft: 40, margin: 10, fontSize: 20, width: 500, textAlign: "left" }} */
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

        // console.log("hi", specificScale)
        if (specificScale.autoChords) {

            containingChords = specificScale.autoChords.map((chord, i) => {

                // const specificChord  = chord as SpecificChord
                if (chord.id && chord.id.includes("-del")) return null

                return <button /* style={{ fontSize: 20, padding: 10, margin: 20 }} */ className={classes.specificChordButton} key={i} onClick={e => {
                    const renderable = renderables.find(r => r.id === chord.id)
                    if (renderable) {

                        const index = renderables.indexOf(renderable)
                        state.setIndex2(index)
                    }
                }}>{(i + 1)}
                    {/* {chord.id} */}
                    {chord.id && chord.id.padEnd(10, "_").padStart(15, "_")}
                    {specificScale.scale.rawScale.modes[i]}
                </button>
            })
        }


    }
    let allContainingChords;

    if (state.renderables[state.index1].source.hasOwnProperty("chords")) {

        const specificScale = state.renderables[state.index1].source as SpecificScale

        // console.log("specificScale", specificScale)

        if (specificScale.chords) {

            allContainingChords = specificScale.chords.flat().map((chord, i) => {

                // const specificChord  = chord as SpecificChord

                if (chord.id && chord.id.includes("-del")) return null


                // console.log(chord)

                return <button /* style={{ fontSize: 20, padding: 10, margin: 20 }} */ className={classes.specificChordButton} key={i} onClick={e => {
                    const renderable = renderables.find(r => r.id === chord.id)
                    if (renderable) {

                        const index = renderables.indexOf(renderable)
                        state.setIndex2(index)
                    }
                }}>{(i + 1)}
                    {chord.id && chord.id.padEnd(10, "_").padStart(15, "_")}
                    {specificScale.scale.rawScale.modes[i]}
                </button>
            })
        }


    }

    let pattern = <Pattern
        secondHidden={state.secondHidden}
        first={state.renderables[state.index1]}
        second={state.renderables[state.index2]}
        n={props.n}
    /*       firstIntervals={state.firstIntervals}
          secondIntervals={state.secondIntervals} */
    />

    if (masterState.showPiano) {
        pattern = <PianoPattern
            secondHidden={state.secondHidden}
            first={state.renderables[state.index1]}
            second={state.renderables[state.index2]}
            n={props.n}
        ></PianoPattern>
    }

    if (masterState.hideLegends) return pattern


    return <div /* style={{ fontSize: 20, display: "flex", flexDirection: "column", height: "100%", minHeight: 700 }} */ className={classes.simpleState}>

        <div /* style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}  */ className={classes.settings}>


            {/*         <label>
            <input type="checkbox" checked={state.firstIntervals} onChange={e => state.toggleFirstIntervals()}></input>
            first intervals
            </label>
            <label>
            <input type="checkbox" checked={state.secondIntervals} onChange={e => state.toggleSecondIntervals()}></input>
            second intervals
        </label> */}

            {/* <div className={classes.label}>first layer:</div> */}
            <div >

                {props.n}

            </div>

            <select onChange={e => state.setIndex1(parseFloat(e.target.value))} value={state.index1}>

                {options}
            </select>
            <select onChange={e => state.setIndex2(parseFloat(e.target.value))} value={state.index2}>
                {options}


            </select>
            <button onClick={e => {
                const index = state.index1
                state.setIndex1(state.index2)
                state.setIndex2(index)
            }}>invert</button>
            <div >
                <label>
                    <input type="checkbox" checked={state.secondHidden} onChange={e => state.toggleSecondHidden()}></input>
                    hide second layer
                </label>
            </div>
            <button onClick={e => props.create(props.useState)}>copy</button>
            <button onClick={e => props.delete(props.useState)}>delete</button>
            <div >
                <label>
                    <input type="checkbox" checked={doReMi} onChange={e => setDoReMi(!doReMi)}></input>
                    DoReMi (refresh req)
                </label>
            </div>
        </div>






        {pattern}


        <div className={classes.legend}>




            <div className={classes.presentInScales} /* style={{ display: presentInScales ? "flex" : "none", flexDirection: "column", alignItems: "flex-start", height: 1, flexGrow: 1, overflow: "auto" }} */>
                {presentInScales}
            </div>
            <div className={classes.presentInChords}/* style={{ display: containingChords ? "flex" : "none", flexDirection: "row", justifyContent: "center", height: 1, flexGrow: 1, overflow: "auto" }} */>
                {containingChords}
            </div>
            <div className={classes.allContainingChords}/* style={{ display: containingChords ? "flex" : "none", flexDirection: "row", justifyContent: "center", height: 1, flexGrow: 1, overflow: "auto" }} */>
                {allContainingChords}
            </div>

        </div>
        <div className={classes.bottomBorder}>



        </div>
    </div>

}

