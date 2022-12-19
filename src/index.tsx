import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                sequi quam, qui, nihil maxime neque omnis eius blanditiis ab
                repudiandae hic quasi, natus magnam doloribus repellat odit
                quaerat excepturi sit?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                sequi quam, qui, nihil maxime neque omnis eius blanditiis ab
                repudiandae hic quasi, natus magnam doloribus repellat odit
                quaerat excepturi sit?
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
