import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useRenderableStore } from "./utils/store"
import { RenderableArrayComponent } from './components/RenderableArrayComponent';
import { notes } from './definitions/notes';

function App() {

  const renderableState = useRenderableStore()

  useEffect(() => {
    // renderableState.add(guitar, "notes", createSpecificScale(notes.C, scales.major))
  }, [])

  let mappedRenderableArray;
  if (renderableState?.renderableArrays) {

    mappedRenderableArray = renderableState.renderableArrays.map(renderableArray => {
      return <RenderableArrayComponent renderableArray={renderableArray} renderableState={renderableState}></RenderableArrayComponent>
    })

  }

  return (
    <div className="App">
      <button onClick={e => {/* renderableState.add() */ }}>add</button>
     {mappedRenderableArray} 
    </div>
  );
}

export default App;
