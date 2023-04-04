import React, { useEffect, useState } from 'react';
import { useMasterStore } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import Pattern from "./Pattern"
import { SpecificChord } from '../definitions/Chords';
import { renderables } from '../definitions/renderables';
import { SpecificScale, specificScales } from '../definitions/Scales';
import SimpleState from './SimpleState';
import classes from "./MasterState.module.css"

//create your forceUpdate hook
function useForceUpdate() {

    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function MasterState() {

    const masterStore = useMasterStore()

    console.log("masterStore", masterStore)
    const forceUpdate = useForceUpdate()


    useEffect(() => {

        console.log("state in Pattern", masterStore.states)
        forceUpdate()
    }, [masterStore.states])



    if (masterStore.states.length === 0) return <div>loading states...</div>

    return <div className={classes.master}>

        <div className={classes.heading}>
            <div className={classes.headText}>



                Guitar scale/chord visualizer
            </div>
            <div className={classes.headingLink}>

                <a href="https://github.com/vincentwue/guitar-trainer" target="_blank">more information on github</a>
            </div>

            <div className={classes.checkboxes}>

                <label className={classes.hideLegendLabel}>
                    <input type="checkbox" checked={masterStore.hideLegends} readOnly onClick={e => masterStore.toggleHideLegends()}></input>
                    hide legends
                </label>

                <label className={classes.hideLegendLabel}>
                    <input type="checkbox" checked={masterStore.showPiano} readOnly onClick={e => masterStore.toggleShowPiano()}></input>
                    show piano
                </label>

            </div>
        </div>

        {masterStore.states.map((state:any, i:any) => {
            return <SimpleState useState={state} create={masterStore.create} delete={masterStore.delete} n={i}></SimpleState>
        })}

        <div className={classes.white}>

        </div>


    </div>

}

