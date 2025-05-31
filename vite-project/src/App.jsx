import { useState } from 'react';
import './App.css'
import FirstTry from './Components/FirstTry';
import SecondTry from './Components/SecondTry';

function App() {
  const [dragItem, setDragItem] = useState('')
  const [position, setPosition] = useState({ x:0, y:0 })

  function dragStart(e, item) {
    setDragItem(item)
    console.log(e.clientX);
    
  }

  function dragEnd() {
    setDragItem('')
  }

  function dragEnter(e ,container) {
    e.preventDefault
    
  }

  return (
    <>
      {/* <FirstTry /> */}
      <SecondTry />
    </>
  )
}

export default App
