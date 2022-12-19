import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement(
//     'h1',
//     {
//         id: 'title',
//     },
//     'Hello React'
// )

const title = <h1 id="title">Hello react</h1>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{title}</React.StrictMode>)
