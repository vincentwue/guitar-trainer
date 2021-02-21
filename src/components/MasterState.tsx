import React, { useEffect, useState } from 'react';
import { useMasterStore } from '../utils/store';
// import { RenderableArray, RenderableState } from '../definitions/renderables';
import Pattern from "./Pattern"
import { SpecificChord } from '../definitions/chords';
import { renderables } from '../definitions/renderables';
import { SpecificScale, specificScales } from '../definitions/scales';
import SimpleState from './SimpleState';
import classes from "./MasterState.module.css"

//create your forceUpdate hook
function useForceUpdate(){
    
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function MasterState() {

    const masterStore = useMasterStore()

    console.log("masterStore", masterStore)
    const forceUpdate = useForceUpdate()
    
    
    useEffect(()=>{
        
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

