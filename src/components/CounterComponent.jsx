
import React, { useState } from 'react'

export default function CounterComponent() {
    
    const [count , setCount] = useState(0);

  return (
    <>
    <h1>Result of count : {count}</h1>
    <button className="bg-blue-400 border border-black rounded-lg ml-3 mt-1 px-4 py-2"
    
    onClick={() => setCount(count+1)}
    
    >Add (+)</button>

    <button className="bg-red-300 border border-black rounded-lg ml-3 px-4 py-2"
    
    onClick={()=> count <= 0 ? setCount(0): setCount(count-1)}

    >Delete (-)</button>
    </>
  )
}
