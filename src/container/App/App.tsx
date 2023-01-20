import { useState } from 'react'
import './App.scss'

// type Counter = {
//     [numberCounter: number]: number
// }

const App = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)

    return (
        <div className="task-1">
            <h2>Перше завдання:</h2>
            <button onClick={() => setCounter1(counter1 + 1)}>
                Change count {counter1}
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Change count {counter2}
            </button>
            <button onClick={() => setCounter3(counter3 + 1)}>
                Change count {counter3}
            </button>
        </div>
    )
}
export default App
