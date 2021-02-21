import React, { useEffect } from 'react';
import { useMasterStore } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import Pattern from "./Pattern"
import { SpecificChord } from '../definitions/chords';
import { renderables } from '../definitions/renderables';
import { SpecificScale, specificScales } from '../definitions/scales';
import SimpleState from './SimpleState';
import classes from "./MasterState.module.css"

export default function MasterState() {

    const masterStore = useMasterStore()

    console.log("masterStore", masterStore)

    useEffect(() => {

        masterStore.loadStates()

    })

    if (masterStore.states.length === 0) return <div>loading states...</div>


    return <div className={classes.master}>

        <div className={classes.heading}>
            <div className={classes.headText}>
            
            
            
            Guitar scale/chord visualizer
            </div>
            <div className={classes.headingLink}>

                <a href="https://github.com/vincentwue/guitar-trainer" target="_blank">more information on github</a>
            </div>

        <label className={classes.hideLegendLabel}>
             <input type="checkbox" checked={masterStore.hideLegends} readOnly onClick={e => masterStore.toggleHideLegends()}></input> 
             hide legends
        </label>

        </div>

        {masterStore.states.map(state => {
            return <SimpleState useState={state} create={masterStore.create} delete={masterStore.delete}></SimpleState>
        })}

        <div className={classes.white}>
        
        </div>


    </div>

}

