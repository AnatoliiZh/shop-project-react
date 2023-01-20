import { useState } from 'react'
import './App.scss'

type Counter = {
    [numberCounter: number]: number
}

const App = () => {
    const [counter, setCounter] = useState<Counter>({})

    const changeCounter = (numberCounter: number) => {
        setCounter((prevState: Counter) => ({
            ...prevState,
            [numberCounter]: ++prevState[numberCounter] || 1,
        }))
    }

    return (
        <div className="task-1">
            <h2>Перше завдання:</h2>
            <button onClick={() => changeCounter(1)}>
                Change count {counter[1] || 0}
            </button>
            <button onClick={() => changeCounter(2)}>
                Change count {counter[2] || 0}
            </button>
            <button onClick={() => changeCounter(3)}>
                Change count {counter[3] || 0}
            </button>
        </div>
    )
}
export default App
