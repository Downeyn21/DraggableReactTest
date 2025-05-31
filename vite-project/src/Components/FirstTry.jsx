import { useState } from 'react';

function FirstTry() {
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
    <div className='container' onDragEnter={(e) => {dragEnter(e, 'container 1')}}>
      <p className={dragItem === 'Tomato' ? 'drag' : ''} 
        draggable='true' 
        onDragStart={(e) => {dragStart(e, 'Tomato')}} 
        onDragEnd={dragEnd}
        >
          Tomato
        </p>
      <p className={dragItem === 'Potato' ? 'drag' : ''} 
        draggable='true' 
        onDragStart={(e) => {dragStart(e, 'Potato')}} 
        onDragEnd={dragEnd}
        >
          Potato
        </p>
    </div>
    <div className='container' onDragEnter={(e) => {dragEnter(e, 'container 2')}}>
      <p className={dragItem === 'Orange' ? 'drag' : ''} 
        draggable='true' 
        onDragStart={(e) => {dragStart(e, 'Orange')}} 
        onDragEnd={dragEnd}
        >
          Orange
        </p>
      <p className={dragItem === 'Peach' ? 'drag' : ''} 
        draggable='true' 
        onDragStart={(e) => {dragStart(e, 'Peach')}}
        onDragEnd={dragEnd}
        >
          Peach
        </p>
    </div>
    </>
  )
}

export default FirstTry;