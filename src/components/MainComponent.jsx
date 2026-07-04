

import React from 'react'

export default function MainComponent() {
  return (
    <div>
        Main
    </div>
  )
}

export function ChildrenComponent(){

    const name = "Chheng";
    const gender = "Female";
    const myExpression = "I love her so so so so much ❤️";
    const isLoved = true;

    return(

        
        <>
            <h1>My cute girl name is : {name} </h1>
            <h1>My cute girl gerder is : {gender} </h1>
            <h1>My expression about my cute girl : {myExpression} </h1>

            {
                isLoved? (
                    <h1>
                        She really love me yayyyy 😘😍
                    </h1>
                ) : (
                    <h1>
                        Awww really u not love me 🥹
                    </h1>
                )
            }
        </>
    )
}

