import { useState } from "react";

function FullMotionDrag() {
  const [dragPos, setDragPos] = useState({ x: 0, y: 0})
  const [isDrag, setIsDrag] = useState(false)

  function handleMouseDown() {
    setIsDrag(true)
  }

  function handleMouseUp() {
    setIsDrag(false)
  }

  function handleMouseMove(e) {
    if(isDrag) {
      const windowPos = e.currentTarget.getBoundingClientRect()
      const trueMousePosX = (e.clientX - windowPos.left) - 25
      const trueMousePosY = (e.clientY - windowPos.top) - 25
      setDragPos({x:trueMousePosX, y:trueMousePosY})
    } else {
      return
    }
    // console.log(dragPos)
  }

  const gridSquares = []
  for(let i = 0; i < 25; i++) {
    gridSquares.push(i + 1)
  }

  return ( 
    <>
    <div 
    className="Window"
    onMouseMove={(e) => {handleMouseMove(e)}}
    >
      {gridSquares.map((num, index) => (
        <div 
        key={index} 
        className="tile"
        style={{
          
        }}
        >
          {num}</div>
      ))}
    <div 
    className="testObject"
    style={{
      left: dragPos.x,
      top: dragPos.y,
    }}
    onMouseDown={() => {handleMouseDown()}}
    onMouseUp={() => {handleMouseUp()}}
    ></div>
    </div>
    </>
   );
}

export default FullMotionDrag;