import { useState, useRef, useEffect } from 'react';
import { Tile } from './components/Tile';
import { Grid } from './components/Grid';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
     <Grid size={4}/>
    </div>
  )
}

export default App
