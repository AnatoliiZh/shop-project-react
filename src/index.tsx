import React from 'react'
import ReactDOM from 'react-dom/client'

const content = (
    <div>
        <ul>
            <li>
                <li>List item 1</li>
                <li>List item 2</li>
            </li>
        </ul>
        <p>Hello world</p>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
