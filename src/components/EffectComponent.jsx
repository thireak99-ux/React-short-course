

import { use Effect , useState, useEffect} from 'react'

export default function EffectComponent() {

  const [ count , setCount ] = useState(0);
  let handleIncrementCount = useEffect (()=> {

    function CountFunc(){
      setCount = count+1;
    }
    CountFunc();
  }, [])

  return (
    
    <div>

      <h1> Count : {count}</h1>

    </div>

  )
}
