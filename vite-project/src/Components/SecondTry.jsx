import { useState } from "react";

function SecondTry() {
  const [dragItem, setDragItem] = useState('')
  const [redContainer, setRedContainer] = useState(['Orange', 'Peach'])
  const [blueContainer, setBlueContainer] = useState(['Apple', 'Banana'])

  function MoveFruit(container) {
    if(container === "red") {
      if(redContainer.includes(dragItem)) return
      setRedContainer(prev => [...prev, dragItem])
      setBlueContainer(prev => prev.filter(item => item !== dragItem))
      console.log(redContainer);
      
    } else {
      if(blueContainer.includes(dragItem)) return
      setBlueContainer(prev => [...prev, dragItem])
      setRedContainer(prev => prev.filter(item => item !== dragItem))
    }
    // console.log('new array => ', newArray);
    
  }

  function handleDragOver(e, container) {
    e.preventDefault()
    // console.log(container, e);
    MoveFruit(container)
  }

  function dragStart(e, fruit) {
    setDragItem(fruit)
    console.log("dragStart", fruit)
  }

  function dragEnd() {
    setDragItem('')
    console.log('dragEnd');
    
  }

  return ( 
    <>
    <div 
    className="container redWrapper" 
    onDragOver={(e) => {handleDragOver(e, "red")}}
    onDrop={dragEnd}
    >
      {redContainer.map((fruit, index) => (
        <p
        key={index}
        draggable='true'
        onDragStart={(e) => {dragStart(e, fruit)}}
        onDragEnd={dragEnd}
        className={dragItem === fruit ? 'drag' : ''}
        >
          {fruit}</p>
      ))}
    </div>


    <div 
    className="container blueWrapper"
    onDragOver={(e) => {handleDragOver(e, "blue")}}
    onDrop={dragEnd}
    >
      {blueContainer.map((fruit, index) => (
        <p
        key={index}
        draggable='true'
        onDragStart={(e) => {dragStart(e, fruit)}}
        onDragEnd={dragEnd}
        className={dragItem === fruit ? 'drag' : ''}
        >
          {fruit}</p>
      ))}
    </div>
    </>
  );
}

export default SecondTry;