
import React, { useReducer } from 'react'

function reducer(state , action){
    if(action.type == 'incremented_age'){
        return(
            {
                age: state.age + 1,
                name: "Chheng"
            }
        )
    }
}

export default function IncrementAgeComponent() {

    // useReducer hook
    const [state , dispatch] = useReducer(reducer , {age : 20, name: "Chheng"})

  return (
    
    <>
    
    <button className="bg-blue-200 border border-black rounded-lg ml-3 mt-1 px-4 py-2"
    
    onClick={() => {
        dispatch({ type : 'incremented_age'})
    }}> Increment Age (+)</button>

    <p>Hello , {state.name} I'm {state.age} years old.</p>

    </>
  )
}
