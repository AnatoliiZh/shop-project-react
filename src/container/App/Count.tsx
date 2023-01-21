import React from 'react'
import { useState } from 'react'

type Props = {}

const Count = (props: Props) => {
    const  [count, setCount ] = useState(0)

  return (
    <div><button onClick={() => setCount(prevState => prevState + 1 ) }>Change count {count}</button> 
    </div>
  )
}

export default Count